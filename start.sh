#!/bin/bash
dotnet publish IMS.API/IMS.API.csproj -c Release -o publish
dotnet publish/IMS.API.dll
