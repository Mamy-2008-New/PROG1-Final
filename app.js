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
    
    const archives = layout("Archives", generateArchivesPage());
    fs.writeFileSync(path.join(DIST_DIR, 'archives.html'), archives);
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), archives);

    fs.writeFileSync(path.join(DIST_DIR, 'a-propos.html'), layout("À Propos", `
        <div class="card">
            <h1>ℹ️ À Propos</h1>
            <p>Ce site est généré dynamiquement pour l'examen final de PROG1.</p>
        </div>
    `));

    articles.forEach(art => {
        const fileName = `article-${slugify(art.title)}.html`;
        fs.writeFileSync(path.join(DIST_DIR, fileName), layout(art.title, generateArticlePage(art)));
    });

    console.log("Site généré dans /dist");
}

build();