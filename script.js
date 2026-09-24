/*
  Le navigateur lit parfois le JavaScript avant d'avoir créé tout le HTML.
  DOMContentLoaded garantit que les éléments HTML existent avant notre code.
*/
document.addEventListener('DOMContentLoaded', () => {
  // Tout le code est placé dans cet événement afin d'attendre que le HTML soit chargé.
  // Ainsi, les éléments recherchés avec getElementById existent déjà dans la page.
  /*
    Tableau contenant les questions du quiz.
    Pour chaque objet :
    - q contient l'énoncé ;
    - choices contient les réponses possibles ;
    - answer contient l'index de la bonne réponse, en commençant à 0 ;
    - explanation contient le texte affiché après la réponse.
  */
  // Données statiques du quiz : JavaScript les utilise pour construire les questions.
  // answer correspond à la position de la bonne réponse dans le tableau choices.
  const quizQuestions = [
    {
      q: 'Que signifie HTML ?',
      choices: [
        'HyperText Markup Language',
        'High Transfer Machine Logic',
        'Hyperlink Tool Method Language',
        'Home Text Marking Language',
      ],
      answer: 0,
      explanation: 'HTML est le langage de structure d’une page web : il organise le contenu avec des balises comme h1, p ou img.',
    },
    {
      q: 'À quoi sert le CSS dans une page web ?',
      choices: [
        'À créer la structure du contenu',
        'À gérer la mise en forme et le style',
        'À stocker les données utilisateur',
        'À exécuter des calculs côté serveur',
      ],
      answer: 1,
      explanation: 'Le CSS sert à modifier la couleur, la taille, l’espacement et la disposition des éléments d’une page.',
    },
    {
      q: 'Quel langage permet de rendre une page web interactive ?',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL'],
      answer: 2,
      explanation: 'JavaScript ajoute des interactions comme des clics, des formulaires, des animations et des validations dynamiques.',
    },
    {
      q: 'Quel opérateur vérifie une égalité stricte en JavaScript ?',
      choices: ['=', '==', '===', '=>'],
      answer: 2,
      explanation: '=== vérifie à la fois la valeur et le type, sans conversion automatique comme ==.',
    },
    {
      q: 'Comment déclare-t-on une constante en JavaScript ?',
      choices: ['const', 'var', 'let', 'final'],
      answer: 0,
      explanation: 'const sert à déclarer une variable dont la valeur ne doit pas être réaffectée dans le programme.',
    },
    {
      q: 'Quelle méthode permet d’ajouter un élément à la fin d’un tableau JavaScript ?',
      choices: ['push()', 'append()', 'add()', 'concat()'],
      answer: 0,
      explanation: 'push() permet d’ajouter un ou plusieurs éléments à la fin du tableau et de modifier directement ce tableau.',
    },
    {
      q: 'Que fait la commande git commit ?',
      choices: [
        'Elle clone un dépôt distant',
        'Elle enregistre les modifications dans l’historique local',
        'Elle supprime les fichiers modifiés',
        'Elle télécharge les dépendances du projet',
      ],
      answer: 1,
      explanation: 'git commit crée un instantané de l’état actuel des fichiers pour conserver l’historique local du projet.',
    },
    {
      q: 'Quel langage est utilisé pour interroger une base de données ?',
      choices: ['HTML', 'CSS', 'SQL', 'JSON'],
      answer: 2,
      explanation: 'SQL signifie Structured Query Language et sert à lire, écrire et manipuler des données dans une base.',
    },
    {
      q: 'Quel est le rôle d’une balise <a> en HTML ?',
      choices: ['Créer une image', 'Créer un lien hypertexte', 'Définir un titre', 'Ajouter un formulaire'],
      answer: 1,
      explanation: 'La balise <a> sert à créer un lien vers une autre page, une section ou une ressource externe.',
    },
    {
      q: 'Quelle propriété CSS modifie la couleur du texte ?',
      choices: ['background-color', 'font-size', 'color', 'margin'],
      answer: 2,
      explanation: 'La propriété color définit la couleur du texte d’un élément.',
    },
    {
      q: 'Quel est le type de données d’un résultat logique en JavaScript ?',
      choices: ['String', 'Boolean', 'Number', 'Object'],
      answer: 1,
      explanation: 'Un booléen ne peut prendre que deux valeurs : true ou false.',
    },
    {
      q: 'Quelle boucle repète une action tant qu’une condition est vraie ?',
      choices: ['for', 'while', 'switch', 'return'],
      answer: 1,
      explanation: 'La boucle while continue à s’exécuter tant que la condition qu’elle teste reste vraie.',
    },
    {
      q: 'Que représente un bit ?',
      choices: ['Un octet', 'Une information binaire', 'Une ligne de code', 'Un script de base de données'],
      answer: 1,
      explanation: 'Un bit est la plus petite unité d’information et peut représenter deux états : 0 ou 1.',
    },
    {
      q: 'Quel est le but d’une fonction en programmation ?',
      choices: ['Créer un site web', 'Répéter un bloc de code selon un besoin précis', 'Stocker des images', 'Remplacer un navigateur'],
      answer: 1,
      explanation: 'Une fonction regroupe un ensemble d’instructions réutilisables pour réaliser une tâche précise.',
    },
    {
      q: 'Quelle valeur est associée à l’absence de contenu en JavaScript ?',
      choices: ['undefined', 'null', 'NaN', 'false'],
      answer: 1,
      explanation: 'null indique explicitement qu’une variable ne contient aucune valeur utile.',
    },
    {
      q: 'Quelle méthode permet de sélectionner un élément HTML par son identifiant ?',
      choices: ['document.querySelector()', 'document.getElementById()', 'document.createElement()', 'document.getElementsByTagName()'],
      answer: 1,
      explanation: 'getElementById() retourne l’élément unique dont l’attribut id correspond à la valeur demandée.',
    },
    {
      q: 'Quel mot-clé permet d’exécuter un bloc de code si une condition est vraie ?',
      choices: ['for', 'if', 'while', 'return'],
      answer: 1,
      explanation: 'if teste une condition puis exécute le code uniquement lorsque cette condition est vraie.',
    },
    {
      q: 'Que signifie l’acronyme URL ?',
      choices: ['User Resource Link', 'Uniform Resource Locator', 'Universal Request Layout', 'Unified Routing Language'],
      answer: 1,
      explanation: 'Une URL désigne l’adresse d’une ressource sur le web, comme une page ou un fichier.',
    },
    {
      q: 'Quel est le rôle de Python dans le développement ?',
      choices: ['C’est uniquement un langage de design graphique', 'C’est un langage polyvalent pour scripting et programmation', 'C’est un standard HTML', 'C’est un système de gestion de base de données'],
      answer: 1,
      explanation: 'Python est utilisé pour l’automatisation, l’analyse de données, le développement web et la programmation générale.',
    },
    {
      q: 'Que fait la commande git clone ?',
      choices: [
        'Elle crée une copie locale d’un dépôt distant',
        'Elle efface les branches existantes',
        'Elle valide les fichiers en ligne',
        'Elle fusionne automatiquement deux projets',
      ],
      answer: 0,
      explanation: 'git clone permet de récupérer un projet distant sur votre machine pour commencer à travailler dessus.',
    },
  ];

  /*
    Données statiques des flashcards.
    Chaque objet contient les textes affichés sur le recto et le verso de la carte.
  */
  const flashcardsData = [
    {
      question: "Qu'est-ce qu'un algorithme ?",
      answer: 'Une suite d’instructions ordonnées permettant de résoudre un problème ou d’effectuer une tâche.',
      explanation: 'C’est comme une recette : on suit plusieurs étapes dans un ordre précis pour obtenir un résultat.',
      example: 'Pour préparer un thé : chauffer l’eau, mettre le thé dans une tasse, verser l’eau chaude, puis ajouter du sucre si nécessaire.',
      takeaway: 'Un algorithme décrit étape par étape comment résoudre un problème.',
      category: 'algorithmique',
    },
    {
      question: 'Qu’est-ce que le binaire ?',
      answer: 'Un système de numération en base 2 qui utilise uniquement 0 et 1.',
      explanation: 'Les ordinateurs utilisent ces deux chiffres pour représenter deux états, comme éteint et allumé.',
      example: 'Le nombre binaire 1010 vaut 10 en décimal.',
      takeaway: 'Le binaire utilise seulement 0 et 1.',
      category: 'bases',
    },
    {
      question: 'Que signifie URL ?',
      answer: 'Uniform Resource Locator : l’adresse d’une ressource sur le web.',
      explanation: 'Une URL indique au navigateur où trouver une page, une image ou un fichier.',
      example: 'https://exemple.com est une URL qui permet d’accéder à un site.',
      takeaway: 'Une URL est l’adresse d’une ressource internet.',
      category: 'web',
    },
    {
      question: 'Qu’est-ce qu’une variable ?',
      answer: 'Un nom qui permet de stocker une valeur et de la retrouver dans un programme.',
      explanation: 'Imaginez une boîte étiquetée : son contenu peut être lu ou modifié pendant l’exécution.',
      example: 'let age = 18 crée une variable age contenant la valeur 18.',
      takeaway: 'Une variable stocke une information sous un nom.',
      category: 'programmation',
    },
    { question: 'Que signifie DOM ?', answer: 'Document Object Model : la représentation de la page HTML manipulable avec JavaScript.', explanation: 'Le DOM transforme les balises de la page en objets que JavaScript peut lire et modifier.', example: 'document.querySelector("h1") permet de sélectionner un titre.', takeaway: 'Le DOM est le pont entre JavaScript et la page HTML.', category: 'web' },
    { question: 'Qu’est-ce qu’une fonction ?', answer: 'Un bloc de code réutilisable qui réalise une tâche précise.', explanation: 'Une fonction évite de recopier les mêmes instructions et peut recevoir des informations.', example: 'function saluer() { return "Bonjour"; } définit une fonction saluer.', takeaway: 'Une fonction regroupe du code réutilisable.', category: 'programmation' },
    { question: 'À quoi sert une boucle ?', answer: 'À répéter une ou plusieurs instructions plusieurs fois.', explanation: 'Elle est utile quand une action doit être répétée tant qu’une condition est vraie ou pour chaque élément.', example: 'Une boucle peut afficher les nombres de 1 à 5.', takeaway: 'Une boucle répète une action automatiquement.', category: 'algorithmique' },
    { question: 'Qu’est-ce qu’une condition ?', answer: 'Une expression qui permet de choisir entre plusieurs actions.', explanation: 'Le programme vérifie une situation puis exécute le bloc adapté.', example: 'Si la note est supérieure ou égale à 10, afficher « réussi ».', takeaway: 'Une condition permet au programme de prendre une décision.', category: 'algorithmique' },
    { question: 'Que contient une chaîne de caractères ?', answer: 'Du texte, par exemple "Bonjour" ou "JavaScript".', explanation: 'Une chaîne est une suite de caractères placée entre guillemets.', example: 'const ville = "Dakar" stocke un texte dans ville.', takeaway: 'Une chaîne représente du texte.', category: 'programmation' },
    { question: 'Que contient un nombre ?', answer: 'Une valeur numérique entière ou décimale.', explanation: 'Les nombres permettent de compter, mesurer et effectuer des calculs.', example: 'let prix = 12.5 stocke un nombre décimal.', takeaway: 'Le type nombre sert aux valeurs et aux calculs.', category: 'programmation' },
    { question: 'À quoi sert addEventListener ?', answer: 'À écouter un événement et à exécuter une fonction lorsqu’il se produit.', explanation: 'On peut ainsi réagir à un clic, une saisie ou une autre action.', example: 'button.addEventListener("click", afficher) réagit au clic.', takeaway: 'addEventListener rend une interface interactive.', category: 'web' },
    { question: 'Qu’est-ce qu’un événement ?', answer: 'Une action détectée par le navigateur, comme un clic ou une saisie.', explanation: 'Le navigateur signale cette action afin que le programme puisse y répondre.', example: 'click, submit et input sont des événements courants.', takeaway: 'Un événement représente une action de l’utilisateur ou du navigateur.', category: 'web' },
    { question: 'À quoi sert querySelector ?', answer: 'À sélectionner le premier élément HTML correspondant à un sélecteur CSS.', explanation: 'JavaScript peut ensuite lire ou modifier l’élément sélectionné.', example: 'document.querySelector(".menu") sélectionne le premier élément de classe menu.', takeaway: 'querySelector recherche un élément dans la page.', category: 'web' },
    { question: 'À quoi sert createElement ?', answer: 'À créer un nouvel élément HTML en JavaScript.', explanation: 'L’élément créé peut ensuite être configuré et ajouté à la page.', example: 'document.createElement("p") crée un paragraphe.', takeaway: 'createElement fabrique une nouvelle balise avec JavaScript.', category: 'web' },
    { question: 'Que fait appendChild ?', answer: 'Il ajoute un élément enfant à un élément parent dans le DOM.', explanation: 'C’est une manière d’insérer un élément créé dans la structure de la page.', example: 'section.appendChild(paragraphe) place le paragraphe dans section.', takeaway: 'appendChild ajoute un élément dans un autre.', category: 'web' },
    { question: 'Qu’est-ce qu’un objet JavaScript ?', answer: 'Une structure qui regroupe des propriétés et leurs valeurs.', explanation: 'Un objet décrit souvent une chose en regroupant ses informations.', example: 'Une carte peut avoir les propriétés question et réponse.', takeaway: 'Un objet organise plusieurs informations liées.', category: 'programmation' },
    { question: 'Qu’est-ce qu’un booléen ?', answer: 'Un type qui possède seulement deux valeurs : true ou false.', explanation: 'Il sert à représenter une réponse oui/non ou vrai/faux.', example: 'isOpen = true indique qu’un panneau est ouvert.', takeaway: 'Un booléen ne peut être que vrai ou faux.', category: 'programmation' },
    { question: 'À quoi sert Math.random ?', answer: 'À produire un nombre pseudo-aléatoire entre 0 inclus et 1 exclu.', explanation: 'Cette fonction permet de varier un résultat, par exemple pour choisir au hasard.', example: 'Math.random() peut servir à choisir une question aléatoire.', takeaway: 'Math.random produit une valeur pseudo-aléatoire.', category: 'programmation' },
    { question: 'Qu’est-ce qu’un index ?', answer: 'La position d’un élément dans un tableau. Le premier index vaut 0.', explanation: 'L’index permet d’accéder à un élément précis d’une liste.', example: 'fruits[0] désigne le premier fruit du tableau fruits.', takeaway: 'Un index indique la position d’un élément.', category: 'structures' },
  ];

  /*
    querySelectorAll récupère plusieurs éléments et renvoie une NodeList.
    Ces deux listes servent à afficher un seul module à la fois.
  */
  // Récupération des éléments principaux de l'interface pour pouvoir les modifier.
  const navButtons = document.querySelectorAll('.nav-btn');
  const modules = document.querySelectorAll('.module');
  const welcomeScreen = document.getElementById('welcome-screen');
  const startAppButton = document.getElementById('start-app');
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  // Ferme l'écran d'accueil et révèle les modules de l'application.
  // classList.add ajoute une classe CSS sans recharger la page.
  startAppButton.addEventListener('click', () => {
    welcomeScreen.classList.add('is-hidden');
    welcomeScreen.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('welcome-active');
  });

  /*
    Affiche le module choisi :
    classList.toggle(classe, condition) ajoute la classe si la condition est vraie
    et la retire dans le cas contraire.
  */
  // Affiche uniquement le module choisi dans le menu.
  function changeModule(button) {
    modules.forEach((module) => {
      module.classList.toggle('active', module.id === button.dataset.module);
    });
    navButtons.forEach((navButton) => {
      navButton.classList.toggle('active', navButton === button);
      navButton.setAttribute('aria-current', navButton === button ? 'page' : 'false');
    });
  }

  // Ajoute le même comportement click à chaque bouton de navigation.
  navButtons.forEach((button) => button.addEventListener('click', () => changeModule(button)));

  // Sur petit écran, ce bouton ouvre ou ferme le menu de navigation.
  menuToggle.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  navButtons.forEach((button) => button.addEventListener('click', () => {
    mainMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  }));
  let previousScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const shouldHide = currentScrollY > previousScrollY && currentScrollY > 80;
    document.querySelector('.topbar').classList.toggle('nav-hidden', shouldHide);
    if (currentScrollY <= 20) document.querySelector('.topbar').classList.remove('nav-hidden');
    previousScrollY = currentScrollY;
  }, { passive: true });

  document.querySelector('.nav-home').addEventListener('click', () => {
    welcomeScreen.classList.remove('is-hidden');
    welcomeScreen.setAttribute('aria-hidden', 'false');
  });

  /*
    État temporaire du quiz.
    Ces variables mémorisent la question actuelle, le score et les réponses
    pendant que l'utilisateur avance dans le questionnaire.
  */
  let currentQuestion = 0;
  let score = 0;
  let quizStarted = false;
  let quizFinished = false;
  let selectedAnswer = null;
  let userAnswers = [];
  let validatedAnswers = [];
  let quizStartedAt = 0;
  let currentPlayerName = '';
  let currentPlayerId = '';
  let currentPlayerEmail = '';
  let openFlashcardForQuestion = () => {};
  const quizContent = document.getElementById('quiz-content');
  const quizIntro = document.getElementById('quiz-intro');
  const quizResult = document.getElementById('quiz-result');
  const statsMessage = document.getElementById('stats-message');
  const startQuizButton = document.getElementById('start-quiz');
  const quizStorageKey = 'bytequestQuizHistory';
  const participantSessionKey = 'bytequestParticipantSession';
  const participantsStorageKey = 'bytequestParticipants';

  // Lit les résultats enregistrés sur cet appareil.
  // try/catch évite que l'application plante si les données sont invalides.
  function getQuizHistory() {
    try {
      return JSON.parse(localStorage.getItem(quizStorageKey)) || [];
    } catch (error) {
      return [];
    }
  }

  // Protège les textes provenant des champs utilisateur avant de les insérer dans du HTML.
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }[character]));
  }

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  }

  // Classe les participants : bonnes réponses, pourcentage, puis temps réalisé.
  function sortResults(results) {
    return results.slice().sort((first, second) =>
      second.correct - first.correct
      || second.percentage - first.percentage
      || (first.durationSeconds ?? Number.MAX_SAFE_INTEGER) - (second.durationSeconds ?? Number.MAX_SAFE_INTEGER)
      || new Date(first.date) - new Date(second.date));
  }

  function getRankedResults(quizName = 'all') {
    const results = quizName === 'all'
      ? getQuizHistory()
      : getQuizHistory().filter((item) => item.name === quizName);
    return sortResults(results).map((item, index) => ({ ...item, position: index + 1 }));
  }

  // Prépare puis sauvegarde le résultat final du quiz dans localStorage.
  function saveQuizResult() {
    const wrongQuestions = quizQuestions
      .filter((question, index) => validatedAnswers[index] !== question.answer)
      .map((question) => ({ question: question.q, explanation: question.explanation }));
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const durationSeconds = Math.max(0, Math.round((Date.now() - quizStartedAt) / 1000));
    const history = getQuizHistory();
    const result = {
      id: `result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      participantId: currentPlayerId,
      fullName: currentPlayerName,
      playerName: currentPlayerName,
      playerEmail: currentPlayerEmail,
      name: 'Quiz informatique',
      total: quizQuestions.length,
      correct: score,
      wrong: quizQuestions.length - score,
      percentage,
      durationSeconds,
      date: new Date().toISOString(),
      mistakes: wrongQuestions,
    };
    history.push(result);
    localStorage.setItem(quizStorageKey, JSON.stringify(history.slice(-30)));
    return result;
  }

  // Reconstruit les statistiques visibles à partir des résultats enregistrés.
  function renderStats() {
    const history = getQuizHistory();
    const currentResults = currentPlayerName
      ? history.filter((item) => item.participantId === currentPlayerId || (!item.participantId && (item.playerName || item.fullName) === currentPlayerName))
      : [];
    const currentAverage = currentResults.length
      ? Math.round(currentResults.reduce((sum, item) => sum + item.percentage, 0) / currentResults.length)
      : 0;
    const best = currentResults.length ? Math.max(...currentResults.map((item) => item.percentage)) : 0;
    const statisticsCard = document.getElementById('my-statistics');
    const statisticsList = document.getElementById('participant-statistics-list');

    statisticsCard.innerHTML = currentPlayerName
      ? `<strong>${escapeHtml(currentPlayerName)}</strong><span>${currentResults.length} quiz terminé(s)</span><span>Moyenne : <b>${currentAverage} %</b></span><span>Meilleur résultat : <b>${best} %</b></span>`
      : '<p>Indiquez votre nom avant de commencer un quiz pour voir votre évolution.</p>';
    statisticsList.innerHTML = history.length ? history.slice().reverse().map((item) => `
      <tr><td>${escapeHtml(item.fullName || item.playerName)}</td><td>${escapeHtml(item.playerName)}</td><td>${escapeHtml(item.name)}</td><td>${item.correct} / ${item.total}</td><td><strong>${item.percentage} %</strong></td><td>${new Date(item.date).toLocaleDateString('fr-FR')}</td></tr>
    `).join('') : '<tr><td colspan="6">Aucun quiz terminé.</td></tr>';
    statsMessage.textContent = history.length
      ? 'Les pourcentages sont mis à jour automatiquement après chaque quiz.'
      : 'Commencez un quiz pour créer les premières statistiques.';
    renderParticipants();
  }

  // Affiche le classement filtré par quiz dans le tableau correspondant.
  function renderLeaderboard() {
    const selectedQuiz = document.getElementById('ranking-quiz').value;
    const leaderboard = getRankedResults(selectedQuiz);
    const target = document.getElementById('player-leaderboard');
    target.innerHTML = leaderboard.length ? leaderboard.map((item) => `
      <tr><td><strong>${item.position <= 3 ? ['🥇', '🥈', '🥉'][item.position - 1] : `#${item.position}`}</strong></td><td>${escapeHtml(item.playerName)}</td><td>${item.correct} / ${item.total}</td><td>${item.percentage} %</td><td>${escapeHtml(item.name)}</td><td>${formatDuration(item.durationSeconds || 0)}</td></tr>
    `).join('') : '<tr><td colspan="6">Aucun joueur enregistré.</td></tr>';
  }

  // Affiche tous les participants enregistrés, du meilleur score au moins bon.
  function getParticipants() {
    try {
      return JSON.parse(localStorage.getItem(participantsStorageKey)) || [];
    } catch (error) {
      return [];
    }
  }

  function renderParticipants() {
    const participants = getParticipants();
    const history = getQuizHistory();
    const target = document.getElementById('participants-list');
    target.innerHTML = participants.length ? participants.map((item) => `
      ${(() => {
        const results = history.filter((result) => result.participantId === item.id || (!result.participantId && result.playerName === item.name));
        const average = results.length ? Math.round(results.reduce((sum, result) => sum + result.percentage, 0) / results.length) : 0;
        const latest = results.length ? results[results.length - 1].percentage : '-';
        return `<tr><td><strong>${escapeHtml(item.name)}</strong></td><td>${escapeHtml(item.email)}</td><td>${results.length}</td><td>${results.length ? `${average} %` : '-'}</td><td>${latest === '-' ? latest : `${latest} %`}</td><td><button class="danger-action delete-participant" type="button" data-participant-id="${escapeHtml(item.id)}">Supprimer</button></td></tr>`;
      })()}
    `).join('') : '<tr><td colspan="6">Aucun participant enregistré.</td></tr>';
    target.querySelectorAll('.delete-participant').forEach((button) => button.addEventListener('click', () => {
      const remaining = getParticipants().filter((item) => item.id !== button.dataset.participantId);
      localStorage.setItem(participantsStorageKey, JSON.stringify(remaining));
      renderParticipants();
    }));
  }

  // Crée les options du filtre à partir des quiz réellement présents dans l'historique.
  function updateRankingOptions() {
    const select = document.getElementById('ranking-quiz');
    const names = [...new Set(getQuizHistory().map((item) => item.name))];
    select.innerHTML = '<option value="all">Tous les quiz</option>' + names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  }

  // Vérifie l'identité du participant puis initialise une nouvelle partie.
  function startQuiz() {
    const participant = getParticipants().find((item) => item.id === currentPlayerId);
    if (!participant) {
      const message = document.getElementById('participant-message');
      message.className = 'form-message is-error';
      message.textContent = 'Inscrivez-vous avant de commencer le quiz.';
      return;
    }
    currentPlayerId = participant.id;
    currentPlayerName = participant.name;
    currentPlayerEmail = participant.email;
    localStorage.setItem(participantSessionKey, JSON.stringify({ id: participant.id }));
    document.getElementById('participant-message').textContent = '';
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = Array(quizQuestions.length).fill(null);
    validatedAnswers = Array(quizQuestions.length).fill(null);
    quizStarted = true;
    quizFinished = false;
    quizStartedAt = Date.now();
    quizIntro.classList.add('is-hidden');
    quizResult.classList.add('is-hidden');
    quizContent.classList.remove('is-hidden');
    displayQuestion();
  }

  // Restaure les informations du dernier participant après une nouvelle ouverture.
  function restorePlayerSession() {
    try {
      const session = JSON.parse(localStorage.getItem(participantSessionKey));
      if (session) {
        const participant = getParticipants().find((item) => item.id === session.id);
        if (participant) {
          currentPlayerId = participant.id;
          currentPlayerName = participant.name;
          currentPlayerEmail = participant.email;
        }
      }
    } catch (error) {
      localStorage.removeItem(participantSessionKey);
    }
  }

  // Le bouton de réinitialisation supprime uniquement les données locales de ByteQuest.
  document.getElementById('reset-data').addEventListener('click', () => {
    if (!window.confirm('Effacer tous les participants et résultats enregistrés ?')) return;
    localStorage.removeItem(quizStorageKey);
    localStorage.removeItem(participantsStorageKey);
    currentPlayerId = '';
    currentPlayerName = '';
    currentPlayerEmail = '';
    localStorage.removeItem(participantSessionKey);
    renderStats();
    document.getElementById('reset-message').textContent = 'Les données de test ont été réinitialisées.';
  });

  const authForm = document.getElementById('quiz-registration-form');
  const authModeButtons = document.querySelectorAll('.auth-mode');
  const authSwitchButton = document.getElementById('auth-switch-button');
  const authSwitchText = document.getElementById('auth-switch-text');
  const authSubmitButton = document.getElementById('quiz-auth-submit');
  const signupNameWrapper = document.getElementById('signup-name-wrapper');
  const participantNameInput = document.getElementById('participant-name');
  const participantEmailInput = document.getElementById('participant-email');
  const participantPasswordInput = document.getElementById('participant-password');

  function setAuthMode(mode, preserveMessage = false) {
    const isSignup = mode === 'signup';
    authForm.dataset.authMode = mode;
    authModeButtons.forEach((button) => {
      const active = button.dataset.authMode === mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    signupNameWrapper.classList.toggle('is-hidden', !isSignup);
    participantNameInput.required = isSignup;
    participantPasswordInput.required = true;
    authSubmitButton.textContent = isSignup ? "S'inscrire" : 'Se connecter';
    authSwitchText.textContent = isSignup ? 'Vous avez déjà un compte ?' : 'Pas encore inscrit ?';
    authSwitchButton.textContent = isSignup ? 'Se connecter' : 'Créer un compte';
    const message = document.getElementById('participant-message');
    if (message && !preserveMessage) {
      message.textContent = '';
      message.className = 'form-message';
    }
    if (isSignup) {
      participantNameInput.focus();
    } else {
      participantEmailInput.focus();
    }
  }

  authModeButtons.forEach((button) => {
    button.addEventListener('click', () => setAuthMode(button.dataset.authMode));
  });

  authSwitchButton.addEventListener('click', () => {
    const nextMode = authForm.dataset.authMode === 'signup' ? 'login' : 'signup';
    setAuthMode(nextMode);
  });

  authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = participantNameInput;
    const emailInput = participantEmailInput;
    const passwordInput = participantPasswordInput;
    const message = document.getElementById('participant-message');
    const mode = authForm.dataset.authMode || 'signup';
    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();
    const participants = getParticipants();
    const validName = /^(?=.*\p{L})[\p{L}]+(?:[ '\-][\p{L}]+)*$/u.test(name);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (mode === 'signup') {
      if (!validName) {
        message.className = 'form-message is-error';
        message.textContent = 'Veuillez écrire un nom avec des lettres, pas un nombre seul.';
        nameInput.focus();
        return;
      }
      if (!validEmail) {
        message.className = 'form-message is-error';
        message.textContent = 'Veuillez écrire une adresse e-mail valide, par exemple nom@site.com.';
        emailInput.focus();
        return;
      }
      if (password.length < 6) {
        message.className = 'form-message is-error';
        message.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        passwordInput.focus();
        return;
      }
      if (participants.some((item) => item.email === email)) {
        message.className = 'form-message is-error';
        message.textContent = 'Cette adresse e-mail est déjà enregistrée. Essayez de vous connecter.';
        setAuthMode('login');
        return;
      }

      const participant = { id: `participant-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name, email, password };
      participants.push(participant);
      localStorage.setItem(participantsStorageKey, JSON.stringify(participants));
      currentPlayerId = participant.id;
      currentPlayerName = participant.name;
      currentPlayerEmail = participant.email;
      localStorage.setItem(participantSessionKey, JSON.stringify({ id: participant.id }));
      authForm.reset();
      message.className = 'form-message is-success';
      message.textContent = 'Compte créé avec succès. Vous pouvez maintenant vous connecter.';
      setAuthMode('login', true);
      renderParticipants();
      return;
    }

    if (!validEmail) {
      message.className = 'form-message is-error';
      message.textContent = 'Veuillez écrire une adresse e-mail valide pour vous connecter.';
      emailInput.focus();
      return;
    }

    const participant = participants.find((item) => item.email === email);
    if (!participant) {
      message.className = 'form-message is-error';
      message.textContent = 'Aucun compte trouvé pour cette adresse. Créez un compte pour commencer.';
      setAuthMode('signup', true);
      return;
    }

    if (participant.password !== password) {
      message.className = 'form-message is-error';
      message.textContent = 'Le mot de passe est incorrect.';
      passwordInput.focus();
      return;
    }

    currentPlayerId = participant.id;
    currentPlayerName = participant.name;
    currentPlayerEmail = participant.email;
    localStorage.setItem(participantSessionKey, JSON.stringify({ id: participant.id }));
    authForm.reset();
    message.className = 'form-message is-success';
    message.textContent = 'Connexion réussie.';
    renderParticipants();
    renderStats();
  });

  setAuthMode('signup');

  window.addEventListener('storage', (event) => {
    if ([participantsStorageKey, quizStorageKey, participantSessionKey].includes(event.key)) {
      renderStats();
    }
  });

  // Génère dynamiquement la question et ses boutons de réponse dans le DOM.
  function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    const previousAnswer = userAnswers[currentQuestion];
    const validated = validatedAnswers[currentQuestion] !== null;
    const percent = Math.round(((currentQuestion + 1) / quizQuestions.length) * 100);
    quizContent.innerHTML = `
      <div class="quiz-progress-heading"><span>Question ${currentQuestion + 1} / ${quizQuestions.length}</span><span>${percent} %</span></div>
      <div class="quiz-progress-track"><div class="quiz-progress-bar" style="width: ${percent}%"></div></div>
      <div class="quiz-question-card">
        <span class="card-kicker">Question ${currentQuestion + 1}</span>
        <h3>${question.q}</h3><p class="quiz-instruction">Choisissez une seule réponse.</p>
        <div class="quiz-choices"></div>
        <div class="quiz-actions"><button class="secondary-action" id="previous-question" type="button" ${currentQuestion === 0 ? 'disabled' : ''}>Question précédente</button><button class="primary-action" id="validate-answer" type="button" ${previousAnswer === null || validated ? 'disabled' : ''}>Valider ma réponse</button></div>
        <div id="quiz-feedback"></div>
      </div>`;
    const choicesContainer = quizContent.querySelector('.quiz-choices');
    // Une boucle crée un bouton pour chaque proposition de réponse.
    question.choices.forEach((choice, index) => {
      const answerButton = document.createElement('button');
      answerButton.className = `answer-btn ${previousAnswer === index ? 'selected' : ''}`;
      answerButton.type = 'button';
      answerButton.textContent = choice;
      answerButton.disabled = validated;
      answerButton.addEventListener('click', () => {
        selectedAnswer = index;
        userAnswers[currentQuestion] = index;
        choicesContainer.querySelectorAll('.answer-btn').forEach((button) => button.classList.remove('selected'));
        answerButton.classList.add('selected');
        quizContent.querySelector('#validate-answer').disabled = false;
      });
      choicesContainer.appendChild(answerButton);
    });
    quizContent.querySelector('#validate-answer').addEventListener('click', () => checkAnswer(userAnswers[currentQuestion]));
    quizContent.querySelector('#previous-question').addEventListener('click', () => { currentQuestion -= 1; displayQuestion(); });
    if (validated) showFeedback(validatedAnswers[currentQuestion] === question.answer);
  }

  // Affiche la correction, l'explication et le bouton pour passer à la suite.
  function showFeedback(isCorrect) {
    const question = quizQuestions[currentQuestion];
    const feedback = quizContent.querySelector('#quiz-feedback');
    feedback.innerHTML = `<div class="answer-feedback ${isCorrect ? 'is-correct' : ''}"><strong>${isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse'}</strong><p><b>Explication :</b> ${question.explanation}</p>${!isCorrect ? '<button class="review-quiz-topic" type="button">Revoir cette notion</button>' : ''}</div><button class="next-quiz-button primary-action" type="button">${currentQuestion === quizQuestions.length - 1 ? 'Voir mon résultat' : 'Question suivante →'}</button>`;
    feedback.querySelector('.next-quiz-button').addEventListener('click', () => {
      if (currentQuestion === quizQuestions.length - 1) finishQuiz();
      else { currentQuestion += 1; displayQuestion(); }
    });
    const reviewButton = feedback.querySelector('.review-quiz-topic');
    if (reviewButton) reviewButton.addEventListener('click', () => openFlashcardForQuestion(question.q));
  }

  // Compare la réponse choisie à la bonne réponse et met à jour le score.
  function checkAnswer(selectedIndex) {
    if (selectedIndex === null || selectedIndex === undefined || validatedAnswers[currentQuestion] !== null) return;
    const question = quizQuestions[currentQuestion];
    validatedAnswers[currentQuestion] = selectedIndex;
    if (selectedIndex === question.answer) score += 1;
    quizContent.querySelectorAll('.answer-btn').forEach((button, index) => {
      button.disabled = true;
      if (index === question.answer) button.classList.add('correct');
      if (index === selectedIndex && selectedIndex !== question.answer) button.classList.add('wrong');
    });
    quizContent.querySelector('#validate-answer').disabled = true;
    showFeedback(selectedIndex === question.answer);
  }

  // Termine le quiz, calcule le pourcentage et affiche le résultat final.
  function finishQuiz() {
    quizFinished = true;
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const message = percentage >= 90 ? 'Excellent ! Vous maîtrisez très bien ces notions.' : percentage >= 70 ? 'Très bien ! Quelques notions peuvent encore être renforcées.' : percentage >= 50 ? 'Bon début. Revoyez certaines notions puis essayez à nouveau.' : 'Continuez à apprendre avec les Flashcards et recommencez le Quiz.';
    const result = saveQuizResult();
    renderStats();
    const position = getRankedResults('Quiz informatique').find((item) => item.id === result.id)?.position || 1;
    quizContent.classList.add('is-hidden');
    quizResult.classList.remove('is-hidden');
    quizResult.innerHTML = `<span class="learning-badge">Quiz terminé</span><h2>Votre résultat</h2><strong class="final-score">${score} / ${quizQuestions.length}</strong><p class="result-message">${message}</p><div class="result-summary"><span>Bonnes réponses<strong>${score}</strong></span><span>Mauvaises réponses<strong>${quizQuestions.length - score}</strong></span><span>Réussite<strong>${percentage} %</strong></span><span>Position<strong>${position}e</strong></span><span>Temps<strong>${formatDuration(result.durationSeconds)}</strong></span></div><div class="quiz-result-actions"><button id="restart-quiz" class="primary-action" type="button">Refaire le Quiz</button><button id="view-stats" class="secondary-action" type="button">Voir mes statistiques</button></div>`;
    document.getElementById('restart-quiz').addEventListener('click', startQuiz);
    document.getElementById('view-stats').addEventListener('click', () => document.querySelector('[data-module="stats"]').click());
  }

  document.getElementById('start-quiz').addEventListener('click', startQuiz);

  /*
    Module de conversion et de calcul.
    Les formulaires interceptent l'événement submit pour afficher les résultats
    directement dans la page, sans rechargement du navigateur.
  */
  const converterForm = document.getElementById('converter-form');
  const calculationForm = document.getElementById('calculation-form');
  const conversionNumber = document.getElementById('conversion-number');
  const conversionBase = document.getElementById('conversion-base');
  const conversionBinary = document.getElementById('conversion-binary');
  const conversionOctal = document.getElementById('conversion-octal');
  const conversionDecimal = document.getElementById('conversion-decimal');
  const conversionHexadecimal = document.getElementById('conversion-hexadecimal');
  const conversionResult = document.getElementById('conversion-result');
  const firstNumber = document.getElementById('first-number');
  const secondNumber = document.getElementById('second-number');
  const calculationBase = document.getElementById('calculation-base');
  const calculationOperation = document.getElementById('calculation-operation');
  const operationPreview = document.getElementById('operation-preview');
  const calculationMessage = document.querySelector('#calculation-result .form-message');
  const calculationEquation = document.getElementById('calculation-equation');
  const calculationExplanation = document.getElementById('calculation-explanation');

  const baseNames = {
    2: 'binaire',
    8: 'octale',
    10: 'décimale',
    16: 'hexadécimale',
  };

  // Retourne un rappel des chiffres autorisés pour la base sélectionnée.
  function getDigitsForBase(base) {
    return base === 2 ? '0 et 1'
      : base === 8 ? '0 à 7'
        : base === 10 ? '0 à 9'
          : '0 à 9 et A à F';
  }

  // Vérifie un nombre saisi et le transforme en valeur décimale JavaScript.
  function parseBaseNumber(text, base) {
    const normalized = text.trim().toUpperCase();
    const unsigned = normalized.startsWith('-') ? normalized.slice(1) : normalized;
    const allowedPattern = base === 2 ? /^[01]+$/
      : base === 8 ? /^[0-7]+$/
        : base === 10 ? /^[0-9]+$/
          : /^[0-9A-F]+$/;

    // Première condition : un champ vide ne peut pas être converti.
    if (unsigned === '') {
      return { error: 'Le champ ne peut pas être vide.' };
    }

    const invalidCharacter = unsigned.match(base === 16 ? /[^0-9A-F]/ : base === 10 ? /[^0-9]/ : base === 8 ? /[^0-7]/ : /[^01]/);
    // Deuxième condition : chaque caractère doit être autorisé par la base.
    if (invalidCharacter) {
      return {
        error: `Le chiffre « ${invalidCharacter[0]} » n'est pas valide en base ${base}. Utilisez uniquement ${getDigitsForBase(base)}.`,
      };
    }

    if (!allowedPattern.test(unsigned)) {
      return { error: `Utilisez uniquement ${getDigitsForBase(base)} en base ${base}.` };
    }

    const value = Number.parseInt(normalized, base);
    if (!Number.isSafeInteger(value)) {
      return { error: 'Ce nombre est trop grand pour être traité.' };
    }

    return { value, text: normalized };
  }

  // Convertit une valeur JavaScript vers la base demandée pour l'affichage.
  function formatBaseNumber(value, base) {
    if (value < 0) return `-${Math.abs(value).toString(base).toUpperCase()}`;
    return value.toString(base).toUpperCase();
  }

  function showConversionError(message) {
    conversionResult.className = 'form-message is-error';
    conversionResult.textContent = `Erreur : ${message}`;
  }

  // Convertit le nombre saisi vers les quatre bases disponibles.
  converterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const base = Number(conversionBase.value);
    const parsed = parseBaseNumber(conversionNumber.value, base);

    if (parsed.error) {
      showConversionError(parsed.error);
      return;
    }

    conversionBinary.textContent = formatBaseNumber(parsed.value, 2);
    conversionOctal.textContent = formatBaseNumber(parsed.value, 8);
    conversionDecimal.textContent = parsed.value;
    conversionHexadecimal.textContent = formatBaseNumber(parsed.value, 16);
    conversionResult.className = 'form-message is-success';
    conversionResult.textContent = `Conversion réussie depuis la base ${base}.`;
  });

  calculationOperation.addEventListener('change', () => {
    operationPreview.textContent = calculationOperation.value === '*' ? '×' : calculationOperation.value === '/' ? '÷' : calculationOperation.value;
  });

  // Effectue l'opération choisie après avoir validé les deux nombres.
  calculationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const base = Number(calculationBase.value);
    const operation = calculationOperation.value;
    const first = parseBaseNumber(firstNumber.value, base);
    const second = parseBaseNumber(secondNumber.value, base);

    if (first.error || second.error) {
      calculationMessage.className = 'form-message is-error';
      calculationMessage.textContent = `Erreur : ${first.error || second.error}`;
      calculationEquation.textContent = 'Corrigez les nombres pour obtenir le résultat.';
      calculationExplanation.textContent = '';
      return;
    }

    if (operation === '/' && second.value === 0) {
      calculationMessage.className = 'form-message is-error';
      calculationMessage.textContent = 'Erreur : la division par zéro est impossible.';
      calculationEquation.textContent = 'Choisissez un deuxième nombre différent de zéro.';
      calculationExplanation.textContent = '';
      return;
    }

    // La structure conditionnelle choisit l'opération demandée.
    let answer;
    if (operation === '+') answer = first.value + second.value;
    if (operation === '-') answer = first.value - second.value;
    if (operation === '*') answer = first.value * second.value;
    if (operation === '/') answer = first.value / second.value;

    if (!Number.isFinite(answer) || Math.abs(answer) > Number.MAX_SAFE_INTEGER) {
      calculationMessage.className = 'form-message is-error';
      calculationMessage.textContent = 'Erreur : le résultat est trop grand pour être traité.';
      return;
    }

    const firstText = first.text;
    const secondText = second.text;
    const sign = operation === '*' ? '×' : operation === '/' ? '÷' : operation;
    const resultText = Number.isInteger(answer)
      ? formatBaseNumber(answer, base)
      : answer.toString(base).toUpperCase();

    calculationMessage.className = 'form-message is-success';
    calculationMessage.textContent = `Calcul effectué en base ${base}.`;
    calculationEquation.textContent = `${firstText} ${sign} ${secondText} = ${resultText}`;
    calculationExplanation.textContent = `En décimal : ${first.value} ${sign} ${second.value} = ${answer}. Les nombres ont été interprétés en ${baseNames[base]}.`;
  });

  // État du module flashcards : carte affichée et cartes évaluées par l'utilisateur.
  let currentCard = 0;
  let filteredCards = [...flashcardsData];
  let isAnswerVisible = false;
  const understoodCards = new Set();
  const reviewCards = new Set();
  const flashcardsIntro = document.getElementById('flashcards-intro');
  const flashcardsStudy = document.getElementById('flashcards-study');
  const flashcardCategory = document.getElementById('flashcard-category');
  const flashcardCategoryLabel = document.getElementById('flashcard-category-label');
  const flashcardNumber = document.getElementById('flashcard-number');
  const flashcardCategoryBadge = document.getElementById('flashcard-category-badge');
  const flashcardQuestion = document.getElementById('flashcard-question');
  const flashcardAnswerView = document.getElementById('flashcard-answer-view');
  const flashcardQuestionView = document.getElementById('flashcard-question-view');
  const flashcardAnswer = document.getElementById('flashcard-answer');
  const flashcardExplanation = document.getElementById('flashcard-explanation');
  const flashcardExample = document.getElementById('flashcard-example');
  const flashcardTakeaway = document.getElementById('flashcard-takeaway');
  const flashcardProgressLabel = document.getElementById('flashcard-progress-label');
  const flashcardProgressPercent = document.getElementById('flashcard-progress-percent');
  const flashcardProgressBar = document.getElementById('flashcard-progress-bar');
  const flashcardNumberLabel = document.getElementById('flashcard-number');
  const understoodCount = document.getElementById('understood-count');
  const reviewCount = document.getElementById('review-count');
  const previousCardButton = document.getElementById('previous-card');
  const nextCardButton = document.getElementById('next-card');
  const categoryLabels = {
    all: 'Toutes les catégories',
    algorithmique: 'Algorithmique',
    bases: 'Bases numériques',
    programmation: 'Programmation',
    web: 'Informatique et web',
    structures: 'Structures de données',
  };

  // Actualise les compteurs « comprises » et « à revoir » dans le DOM.
  function updateFlashcardCounters() {
    understoodCount.textContent = understoodCards.size;
    reviewCount.textContent = reviewCards.size;
  }

  // Affiche le contenu de la carte actuelle et met à jour la progression.
  function displayFlashcard() {
    const card = filteredCards[currentCard];
    if (!card) return;
    isAnswerVisible = false;
    flashcardQuestionView.classList.remove('is-hidden');
    flashcardAnswerView.classList.add('is-hidden');
    flashcardNumberLabel.textContent = `FLASHCARD ${String(currentCard + 1).padStart(2, '0')}`;
    flashcardQuestion.textContent = card.question;
    flashcardCategoryBadge.textContent = categoryLabels[card.category] || card.category;
    flashcardAnswer.textContent = card.answer;
    flashcardExplanation.textContent = card.explanation;
    flashcardExample.textContent = card.example;
    flashcardTakeaway.textContent = card.takeaway;
    const percent = Math.round(((currentCard + 1) / filteredCards.length) * 100);
    flashcardProgressLabel.textContent = `Carte ${currentCard + 1} / ${filteredCards.length}`;
    flashcardProgressPercent.textContent = `${percent} %`;
    flashcardProgressBar.style.width = `${percent}%`;
    flashcardProgressBar.parentElement.setAttribute('aria-valuenow', percent);
    previousCardButton.disabled = currentCard === 0;
    nextCardButton.textContent = currentCard === filteredCards.length - 1 ? 'Recommencer →' : 'Carte suivante →';
  }

  // Filtre les cartes selon la catégorie puis lance le parcours.
  function startFlashcards() {
    const selectedCategory = flashcardCategory.value;
    filteredCards = selectedCategory === 'all'
      ? [...flashcardsData]
      : flashcardsData.filter((card) => card.category === selectedCategory);
    currentCard = 0;
    understoodCards.clear();
    reviewCards.clear();
    flashcardCategoryLabel.textContent = categoryLabels[selectedCategory];
    flashcardsIntro.classList.add('is-hidden');
    flashcardsStudy.classList.remove('is-hidden');
    updateFlashcardCounters();
    displayFlashcard();
  }

  // Ouvre une flashcard liée à une question ratée du quiz.
  openFlashcardForQuestion = (questionText) => {
    let matchingIndex = flashcardsData.findIndex((card) => card.question === questionText);
    if (matchingIndex === -1) {
      const quizQuestion = quizQuestions.find((question) => question.q === questionText);
      if (!quizQuestion) return;
      flashcardsData.push({
        question: quizQuestion.q,
        answer: quizQuestion.choices[quizQuestion.answer],
        explanation: quizQuestion.explanation,
        example: 'Relisez la question, identifiez les mots importants et associez-les à la notion étudiée.',
        takeaway: 'Comprendre la définition permet de mieux reconnaître cette notion dans un exercice.',
        category: 'programmation',
      });
      matchingIndex = flashcardsData.length - 1;
    }
    document.querySelector('[data-module="flashcards"]').click();
    flashcardCategory.value = 'all';
    startFlashcards();
    currentCard = matchingIndex;
    displayFlashcard();
    document.getElementById('reveal-answer').click();
  };

  document.getElementById('start-flashcards').addEventListener('click', startFlashcards);
  document.getElementById('reset-flashcards').addEventListener('click', () => {
    flashcardsStudy.classList.add('is-hidden');
    flashcardsIntro.classList.remove('is-hidden');
  });
  document.getElementById('reveal-answer').addEventListener('click', () => {
    isAnswerVisible = true;
    flashcardQuestionView.classList.add('is-hidden');
    flashcardAnswerView.classList.remove('is-hidden');
    document.getElementById('flashcard-card').classList.add('answer-revealed');
  });
  previousCardButton.addEventListener('click', () => {
    if (currentCard > 0) {
      currentCard -= 1;
      displayFlashcard();
    }
  });
  nextCardButton.addEventListener('click', () => {
    currentCard = currentCard === filteredCards.length - 1 ? 0 : currentCard + 1;
    displayFlashcard();
  });
  document.getElementById('understood-card').addEventListener('click', () => {
    understoodCards.add(currentCard);
    reviewCards.delete(currentCard);
    updateFlashcardCounters();
    nextCardButton.click();
  });
  document.getElementById('review-card').addEventListener('click', () => {
    reviewCards.add(currentCard);
    understoodCards.delete(currentCard);
    updateFlashcardCounters();
    nextCardButton.click();
  });

  /*
    Initialisation : on restaure le participant, puis on affiche les statistiques.
    Les écrans du quiz et des flashcards sont construits lorsqu'ils sont démarrés.
  */
  restorePlayerSession();
  renderStats();
});