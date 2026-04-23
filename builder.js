import { articles } from './data.js';
import { countWords, slugify } from './stringUtils.js';

export function generateStatsPage() {
    let totalWords = 0;
    const authorCounts = {};

    articles.forEach(art => {
        const words = countWords(art.content);
        totalWords += words;

        authorCounts[art.author] = (authorCounts[art.author] || 0) + 1;
    });

    const avgWords = (totalWords / articles.length).toFixed(2);

    const topAuthor = Object.keys(authorCounts).reduce((a, b) => authorCounts[a] > authorCounts[b] ? a : b);

    const htmlContent = `
        <h1>Statistiques du Blog</h1>
        <div class="stats-box">
            <p><strong>Total de mots :</strong> ${totalWords}</p>
            <p><strong>Moyenne de mots par article :</strong> ${avgWords}</p>
            <p><strong>Auteur le plus actif :</strong> ${topAuthor} (${authorCounts[topAuthor]} articles)</p>
        </div>
    `;
    return htmlContent;
}

export function generateArchivesPage() {
    let listHTML = "<h1>Archives des articles</h1><ul>";
    
    articles.forEach(art => {
        const wordCount = countWords(art.content);
        const slug = slugify(art.title);
        listHTML += `
            <li>
                [${art.date}] <a href="article-${slug}.html">${art.title}</a> 
                (${wordCount} mots)
            </li>`;
    });

    listHTML += "</ul>";
    return listHTML;
}

export function generateArticlePage(article) {
    return `
        <article>
            <h1>${article.title}</h1>
            <p><em>Par ${article.author}, le ${article.date}</em></p>
            <div style="margin: 20px 0;">
                <img src="data:image/png;base64,${article.image}" alt="${article.title}" style="max-width: 100%; height: auto;">
            </div>
            <p>${article.content}</p>
            <hr>
            <a href="archives.html">← Retour aux archives</a>
        </article>
    `;
}