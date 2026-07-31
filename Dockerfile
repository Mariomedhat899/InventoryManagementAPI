# Stage 1: build/publish
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["IMS.API/IMS.API.csproj", "IMS.API/"]
COPY ["IMS.Core/IMS.Core.csproj", "IMS.Core/"]
COPY ["IMS.Infrastructure/IMS.Infrastructure.csproj", "IMS.Infrastructure/"]

RUN dotnet restore "IMS.API/IMS.API.csproj"

COPY . .
WORKDIR "/src/IMS.API"
RUN dotnet publish -c Release -o /app/publish

# Stage 2: runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 8080

ENV ASPNETCORE_ENVIRONMENT=Production \
    DATABASE_PROVIDER=Sqlite \
    ASPNETCORE_URLS=http://+:8080

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "IMS.API.dll"]
