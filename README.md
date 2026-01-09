# TepUp.space (MassEdu)

Educational platform built with [Docusaurus](https://docusaurus.io/) for learning about civic rights and responsibilities.

**Live Site**: [www.tepup.space](https://www.tepup.space)

## Quick Start

### Standard Setup
```bash
yarn
yarn start
```

### Docker Setup (Recommended)
```bash
docker-compose up dev
# Access at http://localhost:3001/
```

**For new npm packages or Dockerfile updates:**
```bash
docker-compose down
docker-compose build --no-cache dev
docker-compose up dev
```

**Common Docker commands:**
```bash
docker-compose down              # Stop containers
docker-compose logs dev -f       # View logs
docker-compose restart dev       # Restart (for config changes)
docker-compose ps                # Check status
```

## Development

**Auto-reload (no restart needed):**
- React components, CSS, MDX files
- Character data, most config changes

**Restart required:**
```bash
docker-compose restart dev  # For docusaurus.config.js changes
```

**Troubleshooting:**
- Try `http://127.0.0.1:3001/` instead of `localhost`
- Check logs: `docker-compose logs dev -f`
- Port conflicts: `netstat -ano | findstr :3001` (Windows) or `lsof -i :3001` (Mac/Linux)
- Memory issues: Docker Desktop → Settings → Resources → Memory: 4GB+
- Windows/WSL: Add to docker-compose.yml dev service:
  ```yaml
  environment:
    - CHOKIDAR_USEPOLLING=true
    - HOST=0.0.0.0
  ```

## Deployment

**GitHub Pages:**
```bash
yarn deploy
# or with SSH: USE_SSH=true yarn deploy
```

**Production Docker:**
```bash
docker-compose up -d prod  # Access at http://localhost:8080
```

## Contributing

### For Developers
1. Fork → Create feature branch → Commit → Push → Open PR

### For Non-Technical Contributors
**Direct GitHub editing** (easiest):
1. Navigate to file in GitHub
2. Click pencil icon → Edit → Preview
3. Commit changes → Create PR

**GitHub Desktop**:
1. Clone repository
2. Edit files locally
3. Commit and push changes

## Project Structure

**Three-layer architecture:**
- **Layer 1**: Character-driven storytelling with decision points
- **Layer 2**: Topic exploration with contextual links
- **Layer 3**: Foundation concepts and knowledge base

**Key directories:**
- `docs/course-tax/` - Tax education content
- `docs/knowledge-base/` - Foundation knowledge
- `src/components/` - Interactive components
- `src/data/` - Character and content data

## Code Guidelines

- Gender-neutral Vietnamese pronouns ("bạn ấy", "họ")
- No comments unless requested
- Vietnamese localization throughout
- Interactive elements in quiz/game components only

## License

[MIT License](LICENSE)
