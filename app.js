import fs from 'fs';
import path from 'path';
import http from 'http';
import { articles } from './data.js';
import { layout } from './layout.js';
import { slugify } from './stringUtils.js';
import { generateStatsPage, generateArchivesPage, generateArticlePage } from './builder.js';

const DIST_DIR = './dist';

function build() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }

    const statsHTML = layout("Statistiques", generateStatsPage());
    fs.writeFileSync(path.join(DIST_DIR, 'stats.html'), statsHTML);

    const archivesHTML = layout("Archives", generateArchivesPage());
    fs.writeFileSync(path.join(DIST_DIR, 'archives.html'), archivesHTML);
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), archivesHTML);

    articles.forEach(art => {
        const fileName = `article-${slugify(art.title)}.html`;
        const articleHTML = layout(art.title, generateArticlePage(art));
        fs.writeFileSync(path.join(DIST_DIR, fileName), articleHTML);
    });

    console.log("Site généré avec succès dans le dossier /dist");
}

build();

const port = 3000;
const SERVER = http.createServer((request, response) => {
    let filePath = request.url === '/' ? '/index.html' : request.url;
    const fullPath = path.join(process.cwd(), DIST_DIR, filePath);

    fs.readFile(fullPath, (err, content) => {
        if (err) {
            response.writeHead(404);
            response.end('Erreur 404 : Page introuvable !');
            return;
        }
        const EXT = path.extname(fullPath);
        response.writeHead(200, { 
            'Content-Type': EXT === '.html' ? 'text/html' : 'text/plain' 
        });
        response.end(content);
    });
});

SERVER.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
    console.log(`Appuyez sur Ctrl+C pour arrêter.`);
});