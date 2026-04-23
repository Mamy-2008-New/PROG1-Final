import fs from 'fs';
import path from 'path';
import { articles } from './data.js';
import { layout } from './layout.js';
import { slugify } from './stringUtils.js';
import { generateStatsPage, generateArchivesPage, generateArticlePage } from './builder.js';

const DIST_DIR = './dist';

function build() {
    if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

    fs.writeFileSync(path.join(DIST_DIR, 'stats.html'), layout("Statistiques", generateStatsPage()));
    
    const archivesHTML = layout("Archives", generateArchivesPage());
    fs.writeFileSync(path.join(DIST_DIR, 'archives.html'), archivesHTML);
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), archivesHTML);

    fs.writeFileSync(path.join(DIST_DIR, 'a-propos.html'), layout("À Propos", `
        <div class="card">
            <h1>ℹ️ À Propos</h1>
            <p>Ce site statique a été généré automatiquement à l'aide de Node.js dans le cadre d'un projet d'examen.</p>
        </div>`));

    articles.forEach(art => {
        const fileName = `article-${slugify(art.title)}.html`;
        fs.writeFileSync(path.join(DIST_DIR, fileName), layout(art.title, generateArticlePage(art)));
    });

    console.log("Site généré avec succès dans le dossier /dist");
}

build();