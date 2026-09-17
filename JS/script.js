/*
  Le navigateur lit parfois le JavaScript avant d'avoir créé tout le HTML.
  DOMContentLoaded garantit que les éléments HTML existent avant notre code.
*/
document.addEventListener('DOMContentLoaded', () => {
  /*
    Tableau contenant les questions du quiz.
    Pour chaque objet :
    - q contient l'énoncé ;
    - choices contient les réponses possibles ;
    - answer contient l'index de la bonne réponse, en commençant à 0 ;
    - explanation contient le texte affiché après la réponse.
  */
  const quizQuestions = [
    {
      q: 'Qui est considéré comme le père de l’informatique ?',
      choices: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Linus Torvalds'],
      answer: 0,
      explanation: 'Alan Turing a posé les bases théoriques de l’informatique et de l’intelligence artificielle.',
    },
    {
      q: 'Que signifie HTML ?',
      choices: [
        'High Text Machine Language',
        'HyperText Markup Language',
        'Home Tool Markup Language',
        'Hyper Transfer Method Language',
      ],
      answer: 1,
      explanation: 'HTML signifie HyperText Markup Language. Il sert à structurer le contenu d’une page web.',
    },
    {
      q: 'Combien de valeurs peut prendre un bit ?',
      choices: ['1', '2', '8', '10'],
      answer: 1,
      explanation: 'Un bit ne peut avoir que deux valeurs : 0 ou 1.',
    },
    {
      q: 'Quel langage sert à styliser une page web ?',
      choices: ['JavaScript', 'CSS', 'Python', 'SQL'],
      answer: 1,
      explanation: 'CSS signifie Cascading Style Sheets et sert à mettre en forme les pages web.',
    },
    {
      q: 'Quel langage permet de rendre une page web interactive ?',
      choices: ['JavaScript', 'HTML', 'CSS', 'XML'],
      answer: 0,
      explanation: 'JavaScript permet d’ajouter des comportements et de modifier la page selon les actions de l’utilisateur.',
    },
    {
      q: 'Que signifie CSS ?',
      choices: ['Computer Style System', 'Cascading Style Sheets', 'Creative Sheet Syntax', 'Colorful Style System'],
      answer: 1,
      explanation: 'CSS signifie Cascading Style Sheets, ou feuilles de style en cascade.',
    },
    {
      q: 'Quelle méthode sélectionne un élément grâce à son identifiant ?',
      choices: ['querySelectorAll()', 'getElementById()', 'getElementsByClassName()', 'createElement()'],
      answer: 1,
      explanation: 'getElementById() recherche un seul élément HTML grâce à la valeur de son attribut id.',
    },
    {
      q: 'Quelle instruction permet de créer une condition en JavaScript ?',
      choices: ['if', 'repeat', 'choose', 'condition'],
      answer: 0,
      explanation: 'if permet d’exécuter un bloc de code uniquement lorsqu’une condition est vraie.',
    },
    {
      q: 'Quelle boucle répète une action tant qu’une condition est vraie ?',
      choices: ['for', 'if', 'switch', 'return'],
      answer: 0,
      explanation: 'La boucle for répète une instruction plusieurs fois, généralement avec un compteur.',
    },
    {
      q: 'Comment déclare-t-on une constante en JavaScript ?',
      choices: ['constant', 'variable', 'const', 'final'],
      answer: 2,
      explanation: 'Le mot-clé const déclare une variable dont la référence ne doit pas être réassignée.',
    },
    {
      q: 'Quelle valeur représente l’absence de valeur ?',
      choices: ['empty', 'null', 'zero', 'void'],
      answer: 1,
      explanation: 'null représente volontairement une absence de valeur.',
    },
    {
      q: 'Quelle propriété modifie le contenu texte d’un élément ?',
      choices: ['textContent', 'innerColor', 'valueText', 'htmlText'],
      answer: 0,
      explanation: 'textContent permet de lire ou de modifier le texte contenu dans un élément HTML.',
    },
    {
      q: 'Quel événement se déclenche lorsqu’un utilisateur clique ?',
      choices: ['hover', 'submit', 'click', 'press'],
      answer: 2,
      explanation: 'L’événement click est déclenché lorsqu’un utilisateur clique sur un élément.',
    },
    {
      q: 'Quelle méthode ajoute un écouteur d’événement ?',
      choices: ['addEventListener()', 'listen()', 'onEvent()', 'watchEvent()'],
      answer: 0,
      explanation: 'addEventListener() associe une fonction à un événement comme click ou submit.',
    },
    {
      q: 'Quel symbole sert à écrire un commentaire sur une ligne ?',
      choices: ['<!-- -->', '//', '/* */', '#'],
      answer: 1,
      explanation: 'En JavaScript, deux barres obliques // commencent un commentaire sur une seule ligne.',
    },
    {
      q: 'Quel type de données contient plusieurs valeurs ordonnées ?',
      choices: ['Boolean', 'Number', 'Array', 'String'],
      answer: 2,
      explanation: 'Un tableau, appelé Array en JavaScript, contient plusieurs valeurs accessibles par index.',
    },
    {
      q: 'Quel index correspond au premier élément d’un tableau ?',
      choices: ['0', '1', '-1', 'first'],
      answer: 0,
      explanation: 'Les tableaux JavaScript commencent à l’index 0 : le premier élément est donc tableau[0].',
    },
    {
      q: 'Quelle méthode ajoute un élément à la fin d’un tableau ?',
      choices: ['start()', 'push()', 'addEnd()', 'append()'],
      answer: 1,
      explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d’un tableau.',
    },
    {
      q: 'Que renvoie une fonction avec return ?',
      choices: ['Une valeur', 'Une boucle', 'Une classe CSS', 'Un événement'],
      answer: 0,
      explanation: 'return termine la fonction et renvoie une valeur au code qui l’a appelée.',
    },
    {
      q: 'Quel opérateur vérifie une égalité stricte ?',
      choices: ['=', '==', '===', '!=='],
      answer: 2,
      explanation: '=== compare à la fois la valeur et le type sans effectuer de conversion automatique.',
    },
  ];

  /* Chaque objet représente une flashcard : front = recto, back = verso. */
  const flashcardsData = [
    {
      front: "Qu'est-ce qu'un algorithme ?",
      back: 'Une suite finie d’instructions permettant de résoudre un problème.',
    },
    {
      front: 'Qu’est-ce que le binaire ?',
      back: 'Un système de numération en base 2, avec uniquement 0 et 1.',
    },
    {
      front: "Que signifie URL ?",
      back: 'Uniform Resource Locator : l’adresse d’une ressource sur le web.',
    },
    {
      front: 'Qu’est-ce qu’une variable ?',
      back: 'Un emplacement mémoire nommé qui stocke une valeur.',
    },
    { front: 'Que signifie DOM ?', back: 'Document Object Model : la représentation de la page HTML manipulable avec JavaScript.' },
    { front: 'Qu’est-ce qu’une fonction ?', back: 'Un bloc de code réutilisable qui réalise une tâche précise.' },
    { front: 'À quoi sert une boucle ?', back: 'À répéter une ou plusieurs instructions plusieurs fois.' },
    { front: 'Qu’est-ce qu’une condition ?', back: 'Une expression qui permet de choisir entre plusieurs actions.' },
    { front: 'Que contient une chaîne de caractères ?', back: 'Du texte, par exemple "Bonjour" ou "JavaScript".' },
    { front: 'Que contient un nombre ?', back: 'Une valeur numérique entière ou décimale.' },
    { front: 'À quoi sert addEventListener ?', back: 'À écouter un événement et à exécuter une fonction lorsqu’il se produit.' },
    { front: 'Qu’est-ce qu’un événement ?', back: 'Une action détectée par le navigateur, comme un clic ou une saisie.' },
    { front: 'À quoi sert querySelector ?', back: 'À sélectionner le premier élément HTML correspondant à un sélecteur CSS.' },
    { front: 'À quoi sert createElement ?', back: 'À créer un nouvel élément HTML en JavaScript.' },
    { front: 'Que fait appendChild ?', back: 'Il ajoute un élément enfant à un élément parent dans le DOM.' },
    { front: 'Qu’est-ce qu’un objet JavaScript ?', back: 'Une structure qui regroupe des propriétés et leurs valeurs.' },
    { front: 'Qu’est-ce qu’un booléen ?', back: 'Un type qui possède seulement deux valeurs : true ou false.' },
    { front: 'À quoi sert Math.random ?', back: 'À produire un nombre pseudo-aléatoire entre 0 inclus et 1 exclu.' },
    { front: 'Qu’est-ce qu’un index ?', back: 'La position d’un élément dans un tableau. Le premier index vaut 0.' },
  ];

  /*
    querySelectorAll récupère plusieurs éléments et renvoie une NodeList.
    Ces deux listes servent à afficher un seul module à la fois.
  */
  const navButtons = document.querySelectorAll('.nav-btn');
  const modules = document.querySelectorAll('.module');
  const welcomeScreen = document.getElementById('welcome-screen');
  const startAppButton = document.getElementById('start-app');

  // Ferme l'écran d'accueil et révèle les modules de l'application.
  startAppButton.addEventListener('click', () => {
    welcomeScreen.classList.add('is-hidden');
    welcomeScreen.setAttribute('aria-hidden', 'true');
  });

  /*
    Affiche le module choisi :
    classList.toggle(classe, condition) ajoute la classe si la condition est vraie
    et la retire dans le cas contraire.
  */
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

  /*
    État du quiz : ces variables changent pendant la partie.
    currentQuestion est un index, score compte les bonnes réponses et
    answeredQuestions compte toutes les réponses déjà données.
  */
  let currentQuestion = 0;
  let score = 0;
  let answeredQuestions = 0;
  let nextQuestionTimer;
  const quizContent = document.getElementById('quiz-content');
  const quizScore = document.getElementById('quiz-score');
  const statsScore = document.getElementById('stats-score');
  const statsPercentage = document.getElementById('stats-percentage');
  const statsCorrect = document.getElementById('stats-correct');
  const statsWrong = document.getElementById('stats-wrong');
  const statsAnswered = document.getElementById('stats-answered');
  const statsProgress = document.getElementById('stats-progress');
  const statsMessage = document.getElementById('stats-message');

  /*
    Met à jour les statistiques visibles.
    Le pourcentage est calculé avec : bonnes réponses / réponses données * 100.
  */
  function updateStats() {
    // Si une réponse n'est pas correcte, elle est comptée dans wrong.
    const wrong = answeredQuestions - score;
    const percentage = answeredQuestions === 0
      ? 0
      : Math.round((score / answeredQuestions) * 100);

    statsScore.textContent = `${score} / ${quizQuestions.length}`;
    statsPercentage.textContent = `${percentage} %`;
    statsCorrect.textContent = score;
    statsWrong.textContent = wrong;
    statsAnswered.textContent = `${answeredQuestions} / ${quizQuestions.length} questions`;
    // La largeur de la barre représente le pourcentage de questions traitées.
    statsProgress.style.width = `${(answeredQuestions / quizQuestions.length) * 100}%`;
    statsProgress.parentElement.setAttribute('aria-valuenow', answeredQuestions);

    if (answeredQuestions === 0) {
      statsMessage.textContent = 'Répondez à une question pour commencer.';
    } else if (answeredQuestions === quizQuestions.length) {
      statsMessage.textContent = `Quiz terminé : ${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${quizQuestions.length}.`;
    } else {
      statsMessage.textContent = 'Continuez vos efforts, vos résultats se mettent à jour automatiquement.';
    }
  }

  /*
    Construit la question actuelle dans le DOM.
    innerHTML remplace le contenu précédent de quiz-content par la nouvelle question.
  */
  function displayQuestion() {
    // Quand l'index dépasse la dernière question, on affiche l'écran de fin.
    if (currentQuestion >= quizQuestions.length) {
      quizContent.innerHTML = `
        <h3>Quiz terminé !</h3>
        <p>Votre score final est de ${score} / ${quizQuestions.length}.</p>
        <button id="restart-quiz" type="button">Recommencer</button>
      `;
      document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
      return;
    }

    // On récupère l'objet correspondant à l'index actuel.
    const question = quizQuestions[currentQuestion];
    quizContent.innerHTML = `<h3>Question ${currentQuestion + 1} : ${question.q}</h3>`;

    // Une boucle crée un bouton HTML pour chaque proposition de réponse.
    question.choices.forEach((choice, index) => {
      const answerButton = document.createElement('button');
      answerButton.className = 'answer-btn';
      answerButton.type = 'button';
      answerButton.textContent = choice;
      // La fermeture mémorise index et le transmet au clic.
      answerButton.addEventListener('click', () => checkAnswer(index));
      quizContent.appendChild(answerButton);
    });
  }

  // Remet toutes les variables du quiz à leur valeur de départ.
  function restartQuiz() {
    clearTimeout(nextQuestionTimer);
    currentQuestion = 0;
    score = 0;
    answeredQuestions = 0;
    quizScore.textContent = `Score : 0 / ${quizQuestions.length}`;
    updateStats();
    displayQuestion();
  }

  // Passe à la question suivante uniquement après le clic sur le bouton dédié.
  function showNextQuestion() {
    clearTimeout(nextQuestionTimer);
    currentQuestion += 1;
    displayQuestion();
  }

  /*
    Vérifie la réponse sélectionnée.
    Les boutons sont ensuite désactivés pour empêcher plusieurs réponses
    à la même question.
  */
  function checkAnswer(selectedIndex) {
    clearTimeout(nextQuestionTimer);
    const correctIndex = quizQuestions[currentQuestion].answer;
    const question = quizQuestions[currentQuestion];
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach((button, index) => {
      // On bloque tous les boutons après le premier choix.
      button.disabled = true;
      if (index === correctIndex) button.classList.add('correct');
      if (index === selectedIndex && index !== correctIndex) button.classList.add('wrong');
    });

    // Une comparaison stricte vérifie que les deux index sont identiques.
    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) {
      score += 1;
    }

    // Création d'un bloc contenant l'explication et le bouton suivant.
    const feedback = document.createElement('div');
    feedback.className = 'answer-feedback';
    feedback.innerHTML = `
      <p class="answer-explanation ${isCorrect ? 'is-correct' : ''}">
        <strong>${isCorrect ? 'Correct !' : 'Faux.'}</strong> ${question.explanation}
      </p>
      <button class="next-quiz-button" type="button">Quiz suivant &rarr;</button>
    `;
    quizContent.appendChild(feedback);
    // Le bouton est créé dynamiquement : on lui ajoute donc son événement ici.
    feedback.querySelector('.next-quiz-button').addEventListener('click', showNextQuestion);

    answeredQuestions += 1;
    quizScore.textContent = `Score : ${score} / ${quizQuestions.length}`;
    updateStats();
  }

  /* Le formulaire convertit un nombre décimal en binaire et en hexadécimal. */
  const converterForm = document.getElementById('converter-form');
  // preventDefault empêche le formulaire de recharger la page après submit.
  converterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('decimal-input');
    const result = document.getElementById('conversion-result');
    // Number transforme le texte saisi en valeur numérique.
    const value = Number(input.value);

    // On refuse une saisie vide, décimale, non numérique ou négative.
    if (input.value.trim() === '' || !Number.isInteger(value) || value < 0) {
      result.innerHTML = '<p class="error-message">Entrez un entier positif ou nul.</p>';
      return;
    }

    // toString(2) convertit en base 2 et toString(16) en base 16.
    result.innerHTML = `
      <p><strong>Décimal :</strong> ${value}</p>
      <p><strong>Binaire :</strong> ${value.toString(2)}</p>
      <p><strong>Hexadécimal :</strong> ${value.toString(16).toUpperCase()}</p>
    `;
  });

  // currentCard contient l'index de la flashcard actuellement affichée.
  let currentCard = 0;
  const cardsContainer = document.getElementById('cards-container');

  /*
    Affiche une flashcard et permet de la retourner au clic.
    Chaque nouvel affichage recrée le bouton, puis lui associe un événement.
  */
  function displayCard() {
    const card = flashcardsData[currentCard];
    cardsContainer.innerHTML = `<button class="flashcard" id="flip-card" type="button">${card.front}</button>`;
    document.getElementById('flip-card').addEventListener('click', (event) => {
      // event.currentTarget désigne le bouton sur lequel l'événement est attaché.
      const isFront = event.currentTarget.textContent === card.front;
      event.currentTarget.textContent = isFront ? card.back : card.front;
    });
  }

  // Passe à la carte suivante ; % permet de revenir à 0 après la dernière.
  document.getElementById('next-card').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcardsData.length;
    displayCard();
  });

  /*
    Initialisation : on affiche une question, une flashcard et les statistiques
    dès que le document est prêt.
  */
  displayQuestion();
  displayCard();
  updateStats();
});