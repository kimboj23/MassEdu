# Docker Setup for MassEdu

This document outlines how to use Docker for development and production deployment of the MassEdu Docusaurus project.

## Prerequisites

- Docker and Docker Compose installed on your system
- Git repository cloned to your local machine

## Development Environment

### Starting the Development Server

```bash
# Start the development container
docker-compose up dev

# Access the site at http://localhost:3000/MassEdu/
```

The development environment features:
- Hot-reloading for instant feedback on code changes
- Node modules mounted in a volume for faster performance
- Automatic installation of dependencies

### Stopping the Development Server

```bash
# Press Ctrl+C in the terminal where docker-compose is running
# Or run this in a new terminal:
docker-compose down
```

## Production Environment

### Building and Running for Production

```bash
# Build and run the production container
docker-compose up -d prod

# Access the production version at http://localhost:8080
```

The production setup:
- Builds a static version of the site
- Serves it through Nginx for optimal performance
- Runs in detached mode (-d flag)

### Stopping the Production Server

```bash
docker-compose down
```

## Docker Configuration Files

The Docker setup consists of several key files:

- **docker-compose.yml**: Defines both development and production services
- **Dockerfile**: Multi-stage build for creating the production image
- **nginx.conf**: Nginx configuration for serving the static site
- **.dockerignore**: Excludes unnecessary files from Docker builds

## Troubleshooting

### Common Issues

1. **Site not accessible at localhost:3000**
   - Ensure nothing else is using port 3000
   - Check if the container started properly: `docker-compose ps`
   - Verify logs for errors: `docker-compose logs dev`

2. **Changes not reflecting in the browser**
   - Some changes might require a container restart
   - Check if file watching is working: `docker-compose logs dev`

3. **Dependencies not installing**
   - Remove the node_modules volume: `docker-compose down -v`
   - Restart the container: `docker-compose up dev`

### Viewing Container Logs

```bash
# View logs from the development container
docker-compose logs dev

# View logs from the production container
docker-compose logs prod

# Follow logs in real-time
docker-compose logs -f dev
```

## Customizing the Docker Setup

To modify the Docker configuration:

1. Edit **docker-compose.yml** to change ports, volumes, or environment variables
2. Update **Dockerfile** to change the build process
3. Modify **nginx.conf** to adjust the web server settings

After making changes to these files, rebuild the containers:

```bash
docker-compose down
docker-compose up --build dev
```

## Integration with CI/CD

For automated deployments, you can use this Docker setup with GitHub Actions or other CI/CD systems. The production Docker image can be built and pushed to a container registry as part of your deployment pipeline.