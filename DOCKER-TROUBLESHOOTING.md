# Docker Development Troubleshooting

## Issue: Site loading for a long time after "Client compiled successfully"

### Quick Fixes to Try:

#### 1. **Check if the server is actually running**
```bash
# Run this in a separate terminal while docker-compose up dev is running:
docker-compose logs dev -f

# Look for these messages:
# "webpack compiled successfully"
# "Docusaurus website is running at: http://localhost:3001/"
```

#### 2. **Access via different URLs**
Try these URLs in order:
- http://localhost:3001 (primary)
- http://127.0.0.1:3001 (alternative)
- http://0.0.0.0:3001 (if on Linux/WSL)

#### 3. **Clear Docker cache and rebuild**
```bash
# Stop the container
docker-compose down

# Remove the dev container and image
docker-compose rm dev
docker image rm massedu-dev

# Rebuild from scratch
docker-compose build --no-cache dev
docker-compose up dev
```

#### 4. **Check port conflicts**
```bash
# Check if port 3001 is already in use
netstat -ano | findstr :3001
# or on Mac/Linux:
lsof -i :3001

# If port is in use, kill the process or use different port in docker-compose.yml
```

#### 5. **Windows-specific fixes**

If you're on Windows with WSL:
```bash
# Add this to your docker-compose.yml dev service:
environment:
  - NODE_ENV=development
  - CHOKIDAR_USEPOLLING=true
  - WATCHPACK_POLLING=true
  - FAST_REFRESH=false
  - HOST=0.0.0.0  # Add this line
```

#### 6. **Memory issues**
```bash
# If the build is successful but site won't load, try increasing Docker memory:
# Docker Desktop -> Settings -> Resources -> Memory: 4GB+
```

#### 7. **Network debugging**
```bash
# Check if Docker container is running and port is mapped:
docker ps

# Should show something like:
# CONTAINER ID   IMAGE          PORTS                    NAMES
# abc123def456   massedu-dev    0.0.0.0:3001->3001/tcp  massedu-dev-1

# If port mapping is missing, check docker-compose.yml ports section
```

### Alternative: Run development server directly (bypass Docker)

If Docker continues to have issues:
```bash
# Install dependencies locally
npm install
# or
yarn install

# Start development server directly
npm run start
# or
yarn start

# This should work immediately and help isolate if it's a Docker-specific issue
```

### Still not working?

1. **Check the logs** with more detail:
   ```bash
   docker-compose up dev --verbose
   ```

2. **Enter the container** to debug:
   ```bash
   # In another terminal while container is running:
   docker-compose exec dev bash

   # Inside container, manually start the server:
   yarn start --host 0.0.0.0 --port 3001
   ```

3. **Check Docusaurus configuration**:
   - Verify `docusaurus.config.js` doesn't have conflicting settings
   - Check if any plugins are causing startup delays

### Expected Timeline:
- Container start: 2-5 seconds
- Dependency check: 5-10 seconds
- Webpack compilation: 30-60 seconds (first time), 5-15 seconds (subsequent)
- Site available: Should be immediate after "compiled successfully"

If the site takes longer than 2 minutes after compilation, there's likely a configuration issue.