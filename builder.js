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
            <h1>📊 Statistiques</h1>
            <div class="stats-box">
                <div class="stat-item"><strong>Total mots</strong><br>${totalWords}</div>
                <div class="stat-item"><strong>Moyenne/Art.</strong><br>${avgWords}</div>
                <div class="stat-item"><strong>Articles</strong><br>${articles.length}</div>
                <div class="stat-item"><strong>Top Auteur</strong><br>${topAuthor}</div>
            </div>
        </div>
    `;
}

export function generateArchivesPage() {
    let html = `<div class="card"><h1>📚 Archives</h1><ul>`;
    articles.forEach(art => {
        const slug = slugify(art.title);
        html += `<li>[${art.date}] <a href="article-${slug}.html">${art.title}</a> (${countWords(art.content)} mots)</li>`;
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
        </div>
    `;
}