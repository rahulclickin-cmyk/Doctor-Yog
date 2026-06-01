import fs from 'fs';
import path from 'path';

// Define the root of our workspace
const rootDir = process.cwd();
const appFilePath = path.join(rootDir, 'src', 'App.tsx');
const programsFilePath = path.join(rootDir, 'src', 'pages', 'Programs.tsx');
const sitemapOutputPath = path.join(rootDir, 'public', 'sitemap.xml');

// Base URL for the website
const baseUrl = 'https://www.doctoryog.com';

function getTodayDate(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function generateSitemap() {
  try {
    console.log('--- Starting Sitemap Generator ---');
    console.log(`Reading App.tsx from: ${appFilePath}`);

    // Read App.tsx
    if (!fs.existsSync(appFilePath)) {
      throw new Error(`src/App.tsx not found at ${appFilePath}`);
    }
    const appContent = fs.readFileSync(appFilePath, 'utf8');

    // Extract paths from Route elements
    // Examples: <Route path="/" ...>, <Route path="/retreats" ...>
    const routeRegex = /path=["']([^"']+)["']/g;
    let match;
    const rawPaths: string[] = [];

    while ((match = routeRegex.exec(appContent)) !== null) {
      const routePath = match[1];
      // Skip wildcard / fallback routes
      if (routePath && routePath !== '*') {
        rawPaths.push(routePath);
      }
    }

    console.log('Extracted raw paths:', rawPaths);

    // Dynamic resolution list
    const finalPaths: string[] = [];

    // Parse Programs.tsx to get dynamic types if `/programs/:type` exists
    let programTypes: string[] = [];
    if (fs.existsSync(programsFilePath)) {
      const programsContent = fs.readFileSync(programsFilePath, 'utf8');
      // Match pattern like: id: 'yoga-therapy', or id: "yoga-therapy"
      const idRegex = /id:\s*['"]([^'"]+)['"]/g;
      let idMatch;
      while ((idMatch = idRegex.exec(programsContent)) !== null) {
        if (idMatch[1] && !programTypes.includes(idMatch[1])) {
          programTypes.push(idMatch[1]);
        }
      }
    }

    if (programTypes.length === 0) {
      // Fallback program types if parsing fails
      programTypes = [
        'yoga-therapy',
        'ayurveda',
        'detox',
        'pain-management',
        '100hr-ttc',
        '200hr-ttc'
      ];
    }
    console.log('Resolved program types:', programTypes);

    // Process each path found
    for (const rawPath of rawPaths) {
      if (rawPath === '/programs/:type') {
        // Resolve dynamic program types
        for (const type of programTypes) {
          finalPaths.push(`/programs/${type}`);
        }
      } else {
        finalPaths.push(rawPath);
      }
    }

    // Ensure uniqueness
    const uniquePaths = Array.from(new Set(finalPaths));

    // Priority and Change Frequency Helper
    const getPriorityAndFreq = (route: string) => {
      if (route === '/') {
        return { priority: '1.0', changefreq: 'weekly' };
      }
      
      const mainPillars = ['/about', '/programs', '/retreats', '/book', '/contact', '/reserve'];
      if (mainPillars.includes(route)) {
        return { priority: '0.8', changefreq: 'weekly' };
      }

      if (route.startsWith('/privacy') || route.startsWith('/terms') || route.startsWith('/refund')) {
        return { priority: '0.3', changefreq: 'monthly' };
      }

      return { priority: '0.6', changefreq: 'monthly' };
    };

    const lastmod = getTodayDate();

    // Map each path to its URL element in sitemap
    const urlElements = uniquePaths.map((route) => {
      const fullUrl = `${baseUrl}${route === '/' ? '' : route}`;
      const { priority, changefreq } = getPriorityAndFreq(route);

      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

    // Build the full sitemap file content
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.join('\n')}
</urlset>`;

    fs.writeFileSync(sitemapOutputPath, sitemapContent, 'utf8');
    console.log(`\n✅ Success! Written ${uniquePaths.length} routes to ${sitemapOutputPath}\n`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
