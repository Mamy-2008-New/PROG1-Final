import fs from 'fs';
import path from 'path';
import { articles } from './data.js';
import { layout } from './layout.js';
import { slugify, truncate, countWords, escapeHTML } from './stringUtils.js';

const DIST_DIR = './dist';

function generateIndexPage() {
    const cards = articles.map(article => {
        const escapedTitle = escapeHTML(article.title);
        const truncatedContent = truncate(article.content, 100);
        const slug = slugify(article.title);
        return `
        <div class="card">
            <h2>${escapedTitle}</h2>
            <p>${truncatedContent}</p>
            <a href="${slug}.html">Lire l'article</a>
        </div>`;
    }).join('');
    return `<h1>Dernières publications</h1>${cards}`;
}

function generateArchivesPage() {
    const items = articles.map(article => {
        const escapedTitle = escapeHTML(article.title);
        const slug = slugify(article.title);
        const wordCount = countWords(article.content);
        return `<li>[${article.date}] <a href="${slug}.html">${escapedTitle}</a> (${wordCount} mots)</li>`;
    }).join('');
    return `
        <div class="card">
            <h1>📚 Archives des publications</h1>
            <ul>${items}</ul>
        </div>`;
}

function generateStatsPage() {
    let totalWords = 0;
    const authorCounts = {};
    articles.forEach(art => {
        totalWords += countWords(art.content);
        authorCounts[art.author] = (authorCounts[art.author] || 0) + 1;
    });
    const avgWords = (totalWords / articles.length).toFixed(2);
    const topAuthor = Object.keys(authorCounts).reduce((a, b) => authorCounts[a] > authorCounts[b] ? a : b);

    return `
        <div class="card">
            <h1>📊 Statistiques du Blog</h1>
            <div class="stats-box">
                <div class="stat-item"><strong>Mots au total</strong><br>${totalWords}</div>
                <div class="stat-item"><strong>Moyenne / Article</strong><br>${avgWords}</div>
                <div class="stat-item"><strong>Nombre d'articles</strong><br>${articles.length}</div>
                <div class="stat-item"><strong>Auteur le plus prolifique</strong><br>${escapeHTML(topAuthor)}</div>
            </div>
        </div>`;
}

function generateArticlePage(article) {
    const escapedTitle = escapeHTML(article.title);
    const escapedAuthor = escapeHTML(article.author);
    return `
        <div class="card">
            <img src="data:image/png;base64,${article.image}" style="width:100%; border-radius:8px;" alt="${escapedTitle}">
            <h1>${escapedTitle}</h1>
            <p><em>Par ${escapedAuthor} le ${article.date}</em></p>
            <div style="background: white; padding: 20px; border-radius: 8px;">${article.content}</div>
            <hr>
            <a href="archives.html">← Retour aux archives</a>
        </div>`;
}

export function build() {
    if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

    fs.writeFileSync(
        path.join(DIST_DIR, 'index.html'),
        layout("Accueil", generateIndexPage())
    );

    fs.writeFileSync(
        path.join(DIST_DIR, 'archives.html'),
        layout("Archives", generateArchivesPage())
    );

    fs.writeFileSync(
        path.join(DIST_DIR, 'stats.html'),
        layout("Statistiques", generateStatsPage())
    );

    fs.writeFileSync(
        path.join(DIST_DIR, 'a-propos.html'),
        layout("À Propos", `
            <div class="card">
                <h1>ℹ️ À Propos</h1>
                <p>Ce projet démontre un des potentiels utilisation de Node.js. Finalement, la limite restera toujours votre créativité et imagination. Cela dit, il faut Penser, Travailler et Impacter !</p>
            </div>`)
    );

    articles.forEach(article => {
        const fileName = `${slugify(article.title)}.html`;
        fs.writeFileSync(
            path.join(DIST_DIR, fileName),
            layout(article.title, generateArticlePage(article))
        );
    });

    console.log("Site web statique généré avec succès dans le répertoire /dist !");
}