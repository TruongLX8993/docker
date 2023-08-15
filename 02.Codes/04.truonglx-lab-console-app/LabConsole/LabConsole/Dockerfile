FROM mcr.microsoft.com/dotnet/runtime:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["LabConsole/LabConsole.csproj", "LabConsole/"]
RUN dotnet restore "LabConsole/LabConsole.csproj"
COPY . .
WORKDIR "/src/LabConsole"
RUN dotnet build "LabConsole.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "LabConsole.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LabConsole.dll"]
