export function layout(title, content) {
    return `
<!DOCTYPE html>

<html lang="fr">

<head>

    <meta charset="UTF-8">

    <title>[UTILISER LA VARIABLE title ICI]</title>

    <style>

        body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; background: #f4f7f6; }

        nav { background: #2c3e50; padding: 15px; border-radius: 8px; margin-bottom: 30px; display: flex; gap: 20px; }

        nav a { color: white; text-decoration: none; font-weight: bold; }

        nav a:hover { text-decoration: underline; }

        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 20px; }

        .stats-box { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }

        .stat-item { background: #e8f4fd; padding: 15px; border-radius: 8px; text-align: center; font-size: 1.2em; }

        footer { text-align: center; margin-top: 50px; color: #7f8c8d; font-size: 0.9em; }

    </style>

</head>

<body>

    <nav>

        <a href="index.html">🏠 Accueil</a>

        <a href="archives.html">📚 Archives</a>

        <a href="stats.html">📊 Stats</a>

        <a href="a-propos.html">ℹ️ À Propos</a>

    </nav>

    <main>[UTILISER LA VARIABLE content ICI]</main>

    <footer>Propulsé par Node.js - Examen final PROG1 avril 2026</footer>

</body>

</html>`;
}