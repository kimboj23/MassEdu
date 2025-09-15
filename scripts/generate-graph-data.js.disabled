const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

// Define all documentation instances, their file paths, and their URL routes.
// This should match your docusaurus.config.js setup.
const CONTENT_INSTANCES = [
  { id: 'knowledge-base', path: 'docs/knowledge-base', route: 'knowledge-base' },
  { id: 'course-tax', path: 'docs/course-tax', route: 'course-tax' },
];

const ABSOLUTE_CONTENT_PATHS = CONTENT_INSTANCES.map(instance => ({
    ...instance,
    absolutePath: path.join(__dirname, '..', instance.path)
}));

const OUTPUT_PATH = path.join(__dirname, '../static/graph.json');

function generateGraphData() {
  // Use a more robust glob pattern to find all markdown files within the defined content paths.
  const files = ABSOLUTE_CONTENT_PATHS.flatMap(instance =>
    glob.sync('**/*.md*', { cwd: instance.absolutePath, absolute: true })
  );

  const nodes = [];
  const links = new Set();

  // First pass: create all nodes
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data: frontmatter } = matter(content);

    const instance = ABSOLUTE_CONTENT_PATHS.find(p => file.startsWith(p.absolutePath));
    if (!instance) return; // Should not happen, but a good safeguard.

    const relativePath = path.relative(instance.absolutePath, file).replace(/\\/g, '/');
    const docSlug = relativePath.replace(/\.mdx?$/, '');
    const finalPath = path.posix.join('/', instance.route, docSlug);

    nodes.push({
      id: finalPath,
      title: frontmatter.title || path.basename(file),
      path: finalPath,
      group: instance.id, // Add group for coloring in the graph
    });
  });

  // Second pass: create links
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');

    const sourceInstance = ABSOLUTE_CONTENT_PATHS.find(p => file.startsWith(p.absolutePath));
    if (!sourceInstance) return;

    const sourceRelativePath = path.relative(sourceInstance.absolutePath, file).replace(/\\/g, '/');
    const sourceDocSlug = sourceRelativePath.replace(/\.mdx?$/, '');
    const sourceFinalPath = path.posix.join('/', sourceInstance.route, sourceDocSlug);

    // Regex to find standard markdown links: [text](link)
    const markdownLinkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
    let match;
    while ((match = markdownLinkRegex.exec(content)) !== null) {
      const targetLink = match[1];
      // Only consider relative links to other docs, ignoring assets and external links
      if (!targetLink.startsWith('http') && (targetLink.endsWith('.md') || targetLink.endsWith('.mdx'))) {
        const targetPath = path.resolve(path.dirname(file), targetLink);
        const targetInstance = ABSOLUTE_CONTENT_PATHS.find(p => targetPath.startsWith(p.absolutePath));

        // Gracefully handle links that point outside our content directories (e.g., broken links)
        if (targetInstance) {
          const targetRelativePath = path.relative(targetInstance.absolutePath, targetPath).replace(/\\/g, '/');
          const targetDocSlug = targetRelativePath.replace(/\.mdx?$/, '');
          const targetFinalPath = path.posix.join('/', targetInstance.route, targetDocSlug);
          links.add(JSON.stringify({ source: sourceFinalPath, target: targetFinalPath }));
        }
      }
    }

    // Regex to find links in custom <Tooltip> components: <Tooltip ... link="/path/to/doc" ...>
    const tooltipLinkRegex = /<Tooltip[^>]*link="([^"]+)"/g;
    while ((match = tooltipLinkRegex.exec(content)) !== null) {
      const targetFinalPath = match[1];
      links.add(JSON.stringify({ source: sourceFinalPath, target: targetFinalPath }));
    }
  });

  const graphData = { nodes, links: Array.from(links).map(JSON.parse) };
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(graphData, null, 2));
  console.log(`Graph data generated at ${OUTPUT_PATH}`);
}

generateGraphData();
