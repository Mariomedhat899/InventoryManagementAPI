<#
.SYNOPSIS
    Starts a live demo of IMS: builds frontend, copies to backend, runs API, opens tunnel.
#>

$ErrorActionPreference = 'Stop'
$BackendDir = 'D:\Mario\backEnd-Data\Projects\IMS-Backend\IMS.API'
$FrontendDir = 'D:\Mario\backEnd-Data\Projects\IMS-Angular-Frontend'
$WwwRoot = Join-Path $BackendDir 'wwwroot'
$ApiPort = 5150
$DistFolder = Join-Path $FrontendDir 'dist\ims-angular-frontend'

Write-Host ''
Write-Host '=== IMS Demo Launcher ===' -ForegroundColor Cyan
Write-Host ''

# ── 1. Build Angular frontend ────────────────────────────────────────────────
Write-Host '[1/4] Building Angular frontend...' -ForegroundColor Yellow
Push-Location $FrontendDir
$buildExit = 0
$prevErrorPref = $ErrorActionPreference
$ErrorActionPreference = 'SilentlyContinue'
cmd /c "ng.cmd build --configuration development >nul 2>&1"
$ErrorActionPreference = $prevErrorPref
$buildExit = $LASTEXITCODE
Pop-Location

if ($buildExit -ne 0) {
    Write-Host "ng build failed with exit code $buildExit" -ForegroundColor Red
    exit 1
}
Write-Host '  Frontend built.' -ForegroundColor Green

# ── 2. Copy built files into backend wwwroot ─────────────────────────────────
Write-Host '[2/4] Copying frontend to backend wwwroot...' -ForegroundColor Yellow
if (-not (Test-Path $WwwRoot)) {
    New-Item -Path $WwwRoot -ItemType Directory -Force | Out-Null
}
Copy-Item -Path (Join-Path $DistFolder '*') -Destination $WwwRoot -Recurse -Force
Write-Host '  Frontend copied to wwwroot.' -ForegroundColor Green

# ── 3. Start backend ─────────────────────────────────────────────────────────
Write-Host '[3/4] Starting backend on http://localhost:'$ApiPort -ForegroundColor Yellow
$backendProc = Start-Process -FilePath 'dotnet' -ArgumentList 'run' `
    -WorkingDirectory $BackendDir `
    -PassThru -NoNewWindow -RedirectStandardOutput 'backend.log' -RedirectStandardError 'backend-error.log'

Write-Host "  Backend PID: $($backendProc.Id)" -ForegroundColor Green
Write-Host '  Waiting for backend to become ready...' -ForegroundColor DarkGray

$maxWait = 60
$waited = 0
$ready = $false
while ($waited -lt $maxWait) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$ApiPort/api/Auth/Login" `
            -Method POST -ContentType 'application/json' -Body '{}' -UseBasicParsing -ErrorAction Stop
        $ready = $true
        break
    }
    catch {
        if ($_.Exception.Response.StatusCode -eq 400) {
            $ready = $true
            break
        }
    }
    Start-Sleep -Seconds 2
    $waited += 2
}

if (-not $ready) {
    Write-Host 'Backend did not become ready in time. Check backend-error.log.' -ForegroundColor Red
    exit 1
}
Write-Host '  Backend is ready.' -ForegroundColor Green

# ── 4. Start tunnel ──────────────────────────────────────────────────────────
Write-Host '[4/4] Starting tunnel...' -ForegroundColor Yellow

$tunnelTool = $null
if (Get-Command cloudflared -ErrorAction SilentlyContinue) {
    $tunnelTool = 'cloudflared'
}
elseif (Get-Command ngrok -ErrorAction SilentlyContinue) {
    $tunnelTool = 'ngrok'
}

if (-not $tunnelTool) {
    Write-Host ''
    Write-Host 'No tunnel tool found. Install one of:' -ForegroundColor Red
    Write-Host '  cloudflared : https://github.com/cloudflare/cloudflared/releases' -ForegroundColor White
    Write-Host '  ngrok       : https://ngrok.com/download' -ForegroundColor White
    Write-Host ''
    Write-Host 'Backend is still running on http://localhost:'$ApiPort -ForegroundColor Yellow
    Write-Host 'Demo account: demo@ims.com / Demo123!' -ForegroundColor Cyan
    Write-Host 'Press Ctrl+C to stop.' -ForegroundColor DarkGray
    try {
        while ($true) { Start-Sleep -Seconds 1 }
    }
    catch {}
    exit 0
}

Write-Host "  Using $tunnelTool..." -ForegroundColor DarkGray

$tunnelProc = $null
$tunnelUrl = $null

if ($tunnelTool -eq 'cloudflared') {
    $tunnelProc = Start-Process -FilePath 'cloudflared' -ArgumentList 'tunnel','--url',"http://localhost:$ApiPort" `
        -PassThru -NoNewWindow -RedirectStandardOutput 'tunnel.log' -RedirectStandardError 'tunnel-error.log'
    $tunnelUrl = [regex]::Match((Get-Content 'tunnel.log' -Wait -Tail 20), 'https://[a-z0-9-]+\.trycloudflare\.com').Value
}
else {
    $tunnelProc = Start-Process -FilePath 'ngrok' -ArgumentList 'http',"$ApiPort" `
        -PassThru -NoNewWindow -RedirectStandardOutput 'tunnel.log' -RedirectStandardError 'tunnel-error.log'
    Start-Sleep -Seconds 3
    $tunnelUrl = [regex]::Match((Get-Content 'tunnel.log' -Tail 20), 'https://[a-z0-9-]+\.ngrok(-free)?\.app').Value
}

$tries = 0
while (-not $tunnelUrl -and $tries -lt 15) {
    Start-Sleep -Seconds 1
    $tunnelUrl = [regex]::Match((Get-Content 'tunnel.log' -Tail 20), 'https://[^\s]+').Value
    $tries++
}

if ($tunnelUrl) {
    Write-Host ''
    Write-Host '============================================================' -ForegroundColor Green
    Write-Host "  DEMO URL : $tunnelUrl" -ForegroundColor Green
    Write-Host '  Username : demo@ims.com' -ForegroundColor Cyan
    Write-Host '  Password : Demo123!' -ForegroundColor Cyan
    Write-Host '============================================================' -ForegroundColor Green
    Write-Host ''
}
else {
    Write-Host 'Could not determine tunnel URL. Check tunnel.log' -ForegroundColor Yellow
    Write-Host 'Backend is still running on http://localhost:'$ApiPort -ForegroundColor Yellow
}

Write-Host 'Press Ctrl+C to stop everything.' -ForegroundColor DarkGray

try {
    while ($true) { Start-Sleep -Seconds 1 }
}
catch {
    Write-Host ''
    Write-Host 'Stopping services...' -ForegroundColor Yellow
    if ($tunnelProc -and !$tunnelProc.HasExited) { Stop-Process -Id $tunnelProc.Id -Force }
    if ($backendProc -and !$backendProc.HasExited) { Stop-Process -Id $backendProc.Id -Force }
    Write-Host 'Done.' -ForegroundColor Green
}
