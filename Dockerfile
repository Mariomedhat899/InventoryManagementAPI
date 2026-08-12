FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["IMS.API/IMS.API.csproj", "IMS.API/"]
COPY ["IMS.Infrastructure/IMS.Infrastructure.csproj", "IMS.Infrastructure/"]
COPY ["IMS.Core/IMS.Core.csproj", "IMS.Core/"]
RUN dotnet restore "IMS.API/IMS.API.csproj"
COPY . .
RUN dotnet publish "IMS.API/IMS.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "IMS.API.dll"]
