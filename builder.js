import { articles } from './data.js';
import { countWords, slugify } from './stringUtils.js';

export function generateStatsPage() {
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
                <div class="stat-item"><strong>Auteur le plus prolifique</strong><br>${topAuthor}</div>
            </div>
        </div>`;
}

export function generateArchivesPage() {
    let html = `<div class="card"><h1>📚 Archives des publications</h1><ul>`;
    articles.forEach(art => {
        html += `<li>[${art.date}] <a href="article-${slugify(art.title)}.html">${art.title}</a> (${countWords(art.content)} mots)</li>`;
    });
    html += `</ul></div>`;
    return html;
}

export function generateArticlePage(article) {
    return `
        <div class="card">
            <h1>${article.title}</h1>
            <p><em>Par ${article.author}, le ${article.date}</em></p>
            <img src="data:image/png;base64,${article.image}" alt="${article.title}">
            <p>${article.content}</p>
            <hr>
            <a href="archives.html">← Retour aux archives</a>
        </div>`;
}