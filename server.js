import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;
const DIST_DIR = './dist';

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
        const contentType = EXT === '.html' ? 'text/html' : 'text/plain';
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content);
    });
});

SERVER.listen(port, () => {
    console.log(`Serveur démarré : http://localhost:${port}`);
});