# MassEdu Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation & Development

### Option 1: Standard Setup

#### Installation
```
$ yarn
```

#### Local Development
```
$ yarn start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Build
```
$ yarn build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Option 2: Docker Setup (Recommended)

We now support Docker for both development and production environments.

#### Development
```bash
# Start the development server
docker-compose up dev

# Access the site at http://localhost:3000
```

#### Production Build
```bash
# Build and run the production version
docker-compose up -d prod

# Access the production site at http://localhost:8080
```

For more details on the Docker setup, see [DOCKER.md](DOCKER.md).

## Deployment

### GitHub Pages Deployment

Using SSH:
```
$ USE_SSH=true yarn deploy
```

Not using SSH:
```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Docker Deployment

You can also deploy the Docker production container to your hosting provider:

1. Build the Docker image:
   ```bash
   docker build -t massedu:latest .
   ```

2. Push to your container registry (if applicable):
   ```bash
   docker tag massedu:latest your-registry/massedu:latest
   docker push your-registry/massedu:latest
   ```

3. Deploy using your hosting provider's container service

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

[MIT License](LICENSE)

For non-technical contributors who only want to edit documentation content, here's a simplified workflow that requires no coding or complex setup:

# Contributing to Documentation (For Non-Technical Contributors)

## Option 1: Direct GitHub Editing (Easiest)

1. **Navigate to the File**: Go to the [MassEdu GitHub repository](https://github.com/your-org/MassEdu) in your web browser.

2. **Find Documentation Files**: Browse to the `docs` folder, which contains all the documentation markdown files.

3. **Edit a File**: 
   - Click on the markdown (.md) file you want to edit
   - Click the pencil icon (Edit this file) in the top-right corner
   - Make your changes directly in the browser

4. **Preview Changes**: Use the "Preview" tab to see how your changes will look

5. **Commit Changes**: 
   - Scroll to the bottom
   - Add a brief description of your changes
   - Select "Create a new branch and start a pull request"
   - Click "Propose changes"

6. **Submit Pull Request**: Follow the prompts to submit your changes for review

This method requires only a GitHub account and a web browser - no technical setup needed!

## Option 2: GitHub Desktop (Slightly More Advanced)

If you prefer to work on your local computer:

1. **Install GitHub Desktop**: Download and install [GitHub Desktop](https://desktop.github.com/)

2. **Clone the Repository**: 
   - Click "Clone a repository from the Internet..."
   - Select the MassEdu repository
   - Choose a location on your computer

3. **Edit Files**: 
   - Navigate to the `docs` folder on your computer
   - Edit markdown files with any text editor (even Notepad works!)

4. **Submit Changes**:
   - Return to GitHub Desktop
   - Your changes will be shown
   - Add a summary of your changes
   - Click "Commit to main"
   - Click "Push origin"

This approach still requires no coding knowledge but gives you the ability to work offline.

Both methods ensure your changes go through the proper review process before being published to the site!
