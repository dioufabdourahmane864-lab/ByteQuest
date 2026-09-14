/* On attend que le HTML soit chargé avant de chercher ses éléments.*/
document.addEventListener('DOMContentLoaded', () => {
  // Ce tableau contient les 20 questions et leurs réponses expliquées.
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

  // Chaque flashcard possède une question au recto et sa réponse au verso.
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

  // Récupère les boutons et les sections pour pouvoir les modifier avec le DOM.
  const navButtons = document.querySelectorAll('.nav-btn');
  const modules = document.querySelectorAll('.module');

  // Affiche le module choisi et actualise le bouton actif du menu.
  function changeModule(button) {
    modules.forEach((module) => {
      module.classList.toggle('active', module.id === button.dataset.module);
    });
    navButtons.forEach((navButton) => {
      navButton.classList.toggle('active', navButton === button);
      navButton.setAttribute('aria-current', navButton === button ? 'page' : 'false');
    });
  }

  // Ajoute l'événement click à chaque bouton du menu.
  navButtons.forEach((button) => button.addEventListener('click', () => changeModule(button)));

  // Ces variables mémorisent la position du quiz, le score et le délai.
  let currentQuestion = 0;
  let score = 0;
  let nextQuestionTimer;
  let canSkipExplanation = false;
  const quizContent = document.getElementById('quiz-content');
  const quizScore = document.getElementById('quiz-score');

  // Construit la question actuelle directement dans le DOM.
  function displayQuestion() {
    if (currentQuestion >= quizQuestions.length) {
      quizContent.innerHTML = `
        <h3>Quiz terminé !</h3>
        <p>Votre score final est de ${score} / ${quizQuestions.length}.</p>
        <button id="restart-quiz" type="button">Recommencer</button>
      `;
      document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
      return;
    }

    const question = quizQuestions[currentQuestion];
    quizContent.innerHTML = `<h3>Question ${currentQuestion + 1} : ${question.q}</h3>`;

    // Une boucle crée un bouton pour chaque proposition de réponse.
    question.choices.forEach((choice, index) => {
      const answerButton = document.createElement('button');
      answerButton.className = 'answer-btn';
      answerButton.type = 'button';
      answerButton.textContent = choice;
      // Le clic transmet l'index de la réponse à la fonction de vérification.
      answerButton.addEventListener('click', () => checkAnswer(index));
      quizContent.appendChild(answerButton);
    });
  }

  // Remet le quiz à zéro pour permettre une nouvelle tentative.
  function restartQuiz() {
    clearTimeout(nextQuestionTimer);
    canSkipExplanation = false;
    currentQuestion = 0;
    score = 0;
    quizScore.textContent = `Score : 0 / ${quizQuestions.length}`;
    displayQuestion();
  }

  // Passe à la question suivante et annule le délai encore en cours.
  function showNextQuestion() {
    clearTimeout(nextQuestionTimer);
    canSkipExplanation = false;
    currentQuestion += 1;
    displayQuestion();
  }

  // Après une erreur, un clic n'importe où permet de continuer sans attendre.
  document.addEventListener('click', () => {
    if (canSkipExplanation) showNextQuestion();
  });

  // Vérifie la réponse, colore les boutons et explique une erreur.
  function checkAnswer(selectedIndex) {
    clearTimeout(nextQuestionTimer);
    canSkipExplanation = false;
    const correctIndex = quizQuestions[currentQuestion].answer;
    const question = quizQuestions[currentQuestion];
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) button.classList.add('correct');
      if (index === selectedIndex && index !== correctIndex) button.classList.add('wrong');
    });

    if (selectedIndex === correctIndex) {
      score += 1;
      nextQuestionTimer = setTimeout(showNextQuestion, 900);
    } else {
      const explanation = document.createElement('p');
      explanation.className = 'answer-explanation';
      explanation.innerHTML = `<strong>Faux.</strong> ${question.explanation}<br><small>Cliquez n'importe où pour continuer.</small>`;
      quizContent.appendChild(explanation);
      // Le clic ayant choisi la réponse ne doit pas passer immédiatement à la suite.
      setTimeout(() => {
        canSkipExplanation = true;
      }, 0);
      nextQuestionTimer = setTimeout(showNextQuestion, 70000);
    }
    quizScore.textContent = `Score : ${score} / ${quizQuestions.length}`;
  }

  // Le formulaire convertit un nombre décimal en binaire et en hexadécimal.
  const converterForm = document.getElementById('converter-form');
  // Évite le rechargement et traite la saisie du formulaire en JavaScript.
  converterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('decimal-input');
    const result = document.getElementById('conversion-result');
    const value = Number(input.value);

    // Cette condition refuse une saisie vide, décimale ou négative.
    if (input.value.trim() === '' || !Number.isInteger(value) || value < 0) {
      result.innerHTML = '<p class="error-message">Entrez un entier positif ou nul.</p>';
      return;
    }

    // Les méthodes toString convertissent le nombre dans les bases demandées.
    result.innerHTML = `
      <p><strong>Décimal :</strong> ${value}</p>
      <p><strong>Binaire :</strong> ${value.toString(2)}</p>
      <p><strong>Hexadécimal :</strong> ${value.toString(16).toUpperCase()}</p>
    `;
  });

  let currentCard = 0;
  const cardsContainer = document.getElementById('cards-container');

  // Affiche une flashcard et permet de la retourner au clic.
  function displayCard() {
    const card = flashcardsData[currentCard];
    cardsContainer.innerHTML = `<button class="flashcard" id="flip-card" type="button">${card.front}</button>`;
    document.getElementById('flip-card').addEventListener('click', (event) => {
      const isFront = event.currentTarget.textContent === card.front;
      event.currentTarget.textContent = isFront ? card.back : card.front;
    });
  }

  // Passe à la carte suivante et revient à la première après la dernière.
  document.getElementById('next-card').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcardsData.length;
    displayCard();
  });

  // values contient les nombres des barres; isSorting bloque les clics concurrents.
  let values = [];
  let isSorting = false;
  const barsContainer = document.getElementById('bars-container');
  const sortButton = document.getElementById('sort-btn');
  const resetButton = document.getElementById('reset-btn');

  // Génère les valeurs et les barres utilisées pour visualiser le tri.
  function generateArray() {
    values = [];
    barsContainer.innerHTML = '';

    // La boucle crée 15 nombres et 15 éléments visuels.
    for (let index = 0; index < 15; index += 1) {
      const value = Math.floor(Math.random() * 140) + 30;
      values.push(value);
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${value}px`;
      bar.setAttribute('aria-label', `Valeur ${value}`);
      barsContainer.appendChild(bar);
    }
  }

  // Trie progressivement le tableau en animant chaque comparaison.
  async function bubbleSort() {
    isSorting = true;
    sortButton.disabled = true;
    resetButton.disabled = true;
    const bars = document.querySelectorAll('.bar');

    for (let end = values.length - 1; end > 0; end -= 1) {
      for (let index = 0; index < end; index += 1) {
        bars[index].classList.add('comparing');
        bars[index + 1].classList.add('comparing');
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Si deux valeurs sont dans le mauvais ordre, on les échange.
        if (values[index] > values[index + 1]) {
          [values[index], values[index + 1]] = [values[index + 1], values[index]];
          bars[index].style.height = `${values[index]}px`;
          bars[index + 1].style.height = `${values[index + 1]}px`;
        }

        bars[index].classList.remove('comparing');
        bars[index + 1].classList.remove('comparing');
      }
      bars[end].classList.add('sorted');
    }
    bars[0].classList.add('sorted');
    isSorting = false;
    sortButton.disabled = false;
    resetButton.disabled = false;
  }

  // Génère un nouveau tableau lorsque l'utilisateur clique sur le bouton.
  resetButton.addEventListener('click', () => {
    if (!isSorting) generateArray();
  });

  // Lance le tri uniquement s'il n'y a pas déjà un tri en cours.
  sortButton.addEventListener('click', () => {
    if (!isSorting) bubbleSort();
  });

  // Initialise les trois modules interactifs au chargement de la page.
  displayQuestion();
  displayCard();
  generateArray();
});