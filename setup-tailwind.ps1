# Check Node.js and npm versions
Write-Host "Checking Node.js and npm..."
node -v
npm -v

# If Node.js or npm is missing, prompt user
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is not installed. Please download from https://nodejs.org/en/download/"
    exit
}

# Clear npm cache
Write-Host "Clearing npm cache..."
npm cache clean --force

# Update npm globally
Write-Host "Updating npm globally..."
npm install -g npm

# Ensure npm global bin is in PATH
$npmGlobalPath = "$env:APPDATA\npm"
if ($env:PATH -notlike "*$npmGlobalPath*") {
    Write-Host "Adding npm global path to PATH..."
    setx PATH "$env:PATH;$npmGlobalPath"
}

# Navigate to project folder
Write-Host "Navigating to project folder..."
Set-Location "C:\Users\yoann\Documents\School\Xp-X5\jip_website\journee-internationale-pasteurs"

# Initialize npm if package.json is missing
if (-not (Test-Path "package.json")) {
    Write-Host "Initializing npm project..."
    npm init -y
}

# Install Tailwind CSS and dependencies locally
Write-Host "Installing Tailwind CSS and dependencies..."
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind config
Write-Host "Initializing Tailwind config..."
npx tailwindcss init -p

Write-Host "✅ Setup complete! Run 'npx tailwindcss -v' to verify."