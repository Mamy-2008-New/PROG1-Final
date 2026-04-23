export const articles = [
    {
        title: "Comprendre le Event Loop en JavaScript",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/CfHgAGgwJ/lYpQ1QAAAABJRU5ErkJggg==",
        content: "Le Event Loop est un concept fondamental pour comprendre comment fonctionne JavaScript côté serveur et côté client. Il permet de gérer les opérations asynchrones sans bloquer l'exécution du programme. En Node.js, ce mécanisme est essentiel pour traiter plusieurs requêtes en parallèle. Comprendre le fonctionnement de la pile d'exécution, de la file de tâches et des callbacks est indispensable pour tout développeur. Lorsque vous écrivez du code asynchrone, vous devez penser à l'ordre d'exécution réel et non à l'ordre d'écriture. Cela implique également une bonne maîtrise des Promises et async/await. Dans les applications modernes, la gestion efficace de l'asynchronisme permet d'améliorer considérablement les performances. De plus, cela réduit les risques de blocage et améliore l'expérience utilisateur. En approfondissant ce sujet, vous serez capable d'écrire du code plus performant et plus maintenable. Le Event Loop est souvent mal compris, mais il constitue le cœur du modèle d'exécution JavaScript. Une bonne compréhension vous permettra d'éviter de nombreux bugs liés à l'asynchronisme.",
        author: "Jean Backend",
        date: "2026-03-27"
    },
    {
        title: "Introduction aux Promises en JavaScript",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwADhAGCq7N2WQAAAABJRU5ErkJggg==",
        content: "Les Promises en JavaScript permettent de gérer plus proprement les opérations asynchrones. Avant leur introduction, les développeurs utilisaient principalement des callbacks, ce qui pouvait rapidement rendre le code difficile à lire. Les Promises offrent une meilleure structure et facilitent la gestion des erreurs. Elles reposent sur trois états : pending, fulfilled et rejected. Grâce aux méthodes then et catch, il est possible d'enchaîner des opérations de manière lisible. Avec l’arrivée de async/await, l’utilisation des Promises devient encore plus intuitive. Cela permet d’écrire du code asynchrone qui ressemble à du code synchrone. Cependant, il est important de comprendre les Promises avant d’utiliser async/await. Une mauvaise utilisation peut entraîner des bugs difficiles à détecter. Les Promises sont aujourd’hui au cœur du développement JavaScript moderne. Elles sont utilisées dans de nombreuses bibliothèques et frameworks. Maîtriser ce concept est donc indispensable pour progresser efficacement.",
        author: "Alice Développeuse",
        date: "2026-03-28"
    },
    {
        title: "Pourquoi utiliser Node.js pour le backend",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        content: "Node.js est devenu un choix incontournable pour le développement backend. Sa principale force réside dans sa capacité à gérer un grand nombre de connexions simultanées grâce à son modèle non bloquant. Cela en fait un excellent choix pour les applications en temps réel comme les chats ou les systèmes de notifications. De plus, utiliser JavaScript à la fois côté client et serveur simplifie le développement. Les développeurs peuvent réutiliser des compétences et partager du code. L’écosystème Node.js est également très riche grâce à npm, qui propose des milliers de packages. Cela permet de développer rapidement des applications robustes. Cependant, Node.js n’est pas adapté à tous les cas. Les tâches très intensives en calcul peuvent poser problème. Il est donc important de bien comprendre ses forces et ses limites. Dans de nombreux projets, Node.js permet de gagner en productivité et en performance. C’est une technologie incontournable dans le paysage actuel.",
        author: "Professeur JS",
        date: "2026-03-29"
    },
    {
        title: "Les bases du système de modules ESM",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAF/gJ+Yx2r8QAAAABJRU5ErkJggg==",
        content: "Les modules ESM représentent le standard moderne pour structurer du code JavaScript. Contrairement à CommonJS, ils utilisent les mots-clés import et export. Cela permet une meilleure organisation du code et facilite la maintenance. Les modules ESM sont également mieux optimisés pour les outils modernes comme les bundlers. Ils permettent le tree-shaking, ce qui réduit la taille des applications. Avec Node.js récent, ESM est désormais pleinement supporté. Il est donc recommandé de l’utiliser dans les nouveaux projets. Cependant, il est important de comprendre les différences avec CommonJS. Les règles de chargement et d’exécution ne sont pas les mêmes. Une bonne maîtrise des modules permet de structurer efficacement une application. Cela devient essentiel dans les projets de grande taille. Les modules sont la base d’un code propre et évolutif.",
        author: "Tech Mentor",
        date: "2026-03-30"
    },
    {
        title: "Gestion des fichiers avec fs en Node.js",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADhgG6wWQ3WAAAAABJRU5ErkJggg==",
        content: "Le module fs de Node.js permet de manipuler les fichiers du système. Il est possible de lire, écrire, modifier ou supprimer des fichiers. Ce module est essentiel pour de nombreuses applications backend. Il existe deux versions : synchrone et asynchrone. La version asynchrone est recommandée pour éviter de bloquer le thread principal. Grâce à fs, il est possible de créer des scripts puissants pour automatiser des tâches. Par exemple, générer des fichiers HTML comme dans ce projet. Il est également utilisé pour gérer des logs ou traiter des données. Cependant, il faut faire attention aux erreurs. Les accès fichiers peuvent échouer pour diverses raisons. Une bonne gestion des erreurs est donc indispensable. Le module fs est simple à utiliser mais très puissant. Il constitue un élément clé de l’écosystème Node.js.",
        author: "Jean Backend",
        date: "2026-03-31"
    },
    {
        title: "Les bonnes pratiques en JavaScript",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P8/AwAI/wP+Xh3Z0QAAAABJRU5ErkJggg==",
        content: "Adopter de bonnes pratiques en JavaScript est essentiel pour écrire du code maintenable. Cela inclut l’utilisation de noms de variables explicites, la structuration du code et la gestion des erreurs. Il est également important d’éviter la duplication de code. Les fonctions doivent être courtes et avoir une seule responsabilité. L’utilisation de modules permet de mieux organiser le projet. Le respect des conventions de codage facilite la collaboration. De plus, il est recommandé d’utiliser des outils comme ESLint. Ils permettent de détecter les erreurs et d’améliorer la qualité du code. Les tests sont également importants pour garantir le bon fonctionnement. Enfin, il ne faut pas négliger la documentation. Un code bien documenté est plus facile à comprendre et à maintenir. Ces bonnes pratiques sont essentielles pour tout développeur sérieux.",
        author: "Alice Développeuse",
        date: "2026-04-01"
    },
    {
        title: "Introduction aux API REST avec Node.js",
        image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGD4DwABBAEAffA9yQAAAABJRU5ErkJggg==",
        content: "Les API REST sont un standard pour la communication entre applications. Avec Node.js, il est possible de créer facilement des API performantes. Une API REST repose sur des méthodes HTTP comme GET, POST, PUT et DELETE. Elle permet de manipuler des ressources via des URLs. Node.js, associé à Express, simplifie grandement la création d’API. Cela permet de développer rapidement des services backend. Les API REST sont utilisées dans presque toutes les applications modernes. Elles permettent de séparer le frontend du backend. Cela améliore la modularité et la scalabilité. Cependant, il est important de respecter certaines bonnes pratiques. Par exemple, utiliser des codes HTTP appropriés et structurer correctement les routes. La sécurité est également un point crucial. Il faut protéger les données et gérer les accès. Les API REST sont un pilier du développement web moderne.",
        author: "Tech Mentor",
        date: "2026-04-02"
    }
];