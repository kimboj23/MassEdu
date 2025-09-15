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

# Access the site at http://localhost:3001/MassEdu/
# Alternative URL: http://127.0.0.1:3001/MassEdu/
```

#### Making Changes During Development

**Most changes auto-reload (no command needed):**
- React components (.js, .jsx)
- CSS/SCSS files
- MDX content files
- Character data (src/data/characters.js)
- Most configuration changes

*Just save the file and refresh your browser!*

**Configuration changes (restart required):**
```bash
# For docusaurus.config.js changes or environment variables
docker-compose restart dev
```

**Dependency/Docker changes (rebuild required):**
```bash
# For new npm packages or Dockerfile changes
docker-compose down
docker-compose build --no-cache dev
docker-compose up dev
```

#### Troubleshooting Docker Issues

If the site loads slowly or doesn't work:

1. **Check container status:**
   ```bash
   docker ps
   # Should show massedu-dev-1 as healthy
   ```

2. **View logs:**
   ```bash
   docker-compose logs dev -f
   ```

3. **Try alternative URLs:**
   - http://localhost:3001/MassEdu/
   - http://127.0.0.1:3001/MassEdu/

4. **Complete reset:**
   ```bash
   docker-compose down
   docker-compose build --no-cache dev
   docker-compose up dev
   ```

For more troubleshooting, see [DOCKER-TROUBLESHOOTING.md](DOCKER-TROUBLESHOOTING.md).

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

## Development Notes

### Project Architecture

This project uses a **three-layer educational architecture**:
- **Layer 1 (Storytelling)**: Character-driven narratives with decision points
- **Layer 2 (Issues)**: Topic exploration in Vietnamese context with hyperlinked terms to Layer 3
- **Layer 3 (Foundation)**: Concept pages with tagging and network visualization

### Key Components

**Character Data Management**:
- Central character registry at `src/data/characters.js`
- Cross-storyline tracking system
- Gender-neutral language using Vietnamese pronouns ("bạn ấy", "họ", "nhân vật này")

**Interactive Components**:
- `src/components/Quiz/` - Gamified quiz system with audio/haptic feedback
- `src/components/Tooltip/` - Enhanced tooltips for contextual information
- `src/components/CharacterProfile/` - Character information display

**Content Structure**:
- `docs/course-tax/` - Tax education storylines
- `docs/knowledge-base/` - Foundation knowledge pages
- `src/pages/tax-context/` - Contextual information pages

### Code Style Guidelines

- **No comments in code** unless explicitly requested
- **Gender-neutral language** throughout all content
- **Vietnamese localization** with appropriate cultural context
- **No decorative elements** in educational content
- **Interactive elements allowed** in quiz/game components for engagement

### Common Development Tasks

**Adding new characters**:
1. Update `src/data/characters.js` with character data
2. Create storyline episodes in appropriate `docs/` folder
3. Update sidebar configuration in `sidebars-course-tax.js`

**Adding tooltips**:
1. Import Tooltip component: `import Tooltip from '@site/src/components/Tooltip';`
2. Wrap text with tooltip and provide Layer 3 link

**Testing changes**:
- Use `yarn start` or `docker-compose up dev` for development
- Always test tooltip positioning and character navigation
- Verify sidebar navigation works correctly

### Troubleshooting Common Issues

**Character cards not working**: Check URL paths in character data match actual file locations
**Tooltips appearing off-screen**: Verify z-index and positioning strategy in tooltip CSS
**Docker not loading**: Try `http://127.0.0.1:3001/MassEdu/` instead of `localhost`
**Hot reloading not working**: Restart Docker service or check file watch polling settings
