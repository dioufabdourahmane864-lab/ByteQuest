document.addEventListener('DOMContentLoaded', () => {
  const quizQuestions = [
    {
      q: 'Qui est considéré comme le père de l’informatique ?',
      choices: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Linus Torvalds'],
      answer: 0,
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
    },
    {
      q: 'Combien de valeurs peut prendre un bit ?',
      choices: ['1', '2', '8', '10'],
      answer: 1,
    },
    {
      q: 'Quel langage sert à styliser une page web ?',
      choices: ['JavaScript', 'CSS', 'Python', 'SQL'],
      answer: 1,
    },
  ];

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
  ];

  const navButtons = document.querySelectorAll('.nav-btn');
  const modules = document.querySelectorAll('.module');

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modules.forEach((module) => module.classList.remove('active'));
      const target = document.getElementById(button.dataset.module);
      if (target) {
        target.classList.add('active');
      }

      navButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    });
  });

  let currentQuestion = 0;
  let score = 0;
  const quizContent = document.getElementById('quiz-content');
  const quizScore = document.getElementById('quiz-score');

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizScore.textContent = 'Score : 0 / 4';
    displayQuestion();
  }

  function displayQuestion() {
    if (!quizContent) return;

    if (currentQuestion >= quizQuestions.length) {
      quizContent.innerHTML = `
        <h3>Quiz terminé !</h3>
        <p>Votre score final est de ${score} / ${quizQuestions.length}.</p>
        <button id="restart-quiz">Recommencer</button>
      `;

      const restartButton = document.getElementById('restart-quiz');
      if (restartButton) {
        restartButton.addEventListener('click', restartQuiz);
      }
      return;
    }

    const question = quizQuestions[currentQuestion];
    let html = `<h3>Question ${currentQuestion + 1} : ${question.q}</h3>`;

    question.choices.forEach((choice, index) => {
      html += `<button class="answer-btn" data-index="${index}">${choice}</button>`;
    });

    quizContent.innerHTML = html;

    document.querySelectorAll('.answer-btn').forEach((button) => {
      button.addEventListener('click', () => {
        checkAnswer(Number(button.dataset.index));
      });
    });
  }

  function checkAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestion].answer;
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) {
        button.classList.add('correct');
      } else if (index === selectedIndex) {
        button.classList.add('wrong');
      }
    });

    if (selectedIndex === correctIndex) {
      score += 1;
    }

    quizScore.textContent = `Score : ${score} / ${quizQuestions.length}`;

    setTimeout(() => {
      currentQuestion += 1;
      displayQuestion();
    }, 1200);
  }

  const convertButton = document.getElementById('convert-btn');
  if (convertButton) {
    convertButton.addEventListener('click', () => {
      const input = document.getElementById('decimal-input');
      const result = document.getElementById('conversion-result');
      const value = Number(input.value);

      if (value === 0 && input.value.trim() === '') {
        result.innerHTML = '<p>⚠️ Entrez un nombre valide.</p>';
        return;
      }

      if (Number.isNaN(value) || value < 0 || !Number.isInteger(value)) {
        result.innerHTML = '<p>⚠️ Entrez un entier positif.</p>';
        return;
      }

      result.innerHTML = `
        <p><strong>Décimal :</strong> ${value}</p>
        <p><strong>Binaire :</strong> ${value.toString(2)}</p>
        <p><strong>Hexadécimal :</strong> ${value.toString(16).toUpperCase()}</p>
      `;
    });
  }

  let currentCard = 0;
  const cardsContainer = document.getElementById('cards-container');

  function displayCard() {
    if (!cardsContainer) return;

    const card = flashcardsData[currentCard];
    cardsContainer.innerHTML = `<div class="flashcard" id="flip-card">${card.front}</div>`;

    const flipCard = document.getElementById('flip-card');
    if (flipCard) {
      flipCard.addEventListener('click', () => {
        const isFront = flipCard.textContent === card.front;
        flipCard.textContent = isFront ? card.back : card.front;
      });
    }
  }

  const nextCardButton = document.getElementById('next-card');
  if (nextCardButton) {
    nextCardButton.addEventListener('click', () => {
      currentCard = (currentCard + 1) % flashcardsData.length;
      displayCard();
    });
  }

  let array = [];
  const barsContainer = document.getElementById('bars-container');

  function generateArray() {
    if (!barsContainer) return;

    array = [];
    barsContainer.innerHTML = '';

    for (let i = 0; i < 15; i += 1) {
      const value = Math.floor(Math.random() * 140) + 30;
      array.push(value);

      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${value}px`;
      barsContainer.appendChild(bar);
    }
  }

  async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');

    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array.length - i - 1; j += 1) {
        bars[j].classList.add('comparing');
        bars[j + 1].classList.add('comparing');

        await new Promise((resolve) => setTimeout(resolve, 120));

        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          bars[j].style.height = `${array[j]}px`;
          bars[j + 1].style.height = `${array[j + 1]}px`;
        }

        bars[j].classList.remove('comparing');
        bars[j + 1].classList.remove('comparing');
      }

      bars[array.length - i - 1].classList.add('sorted');
    }
  }

  const resetButton = document.getElementById('reset-btn');
  const sortButton = document.getElementById('sort-btn');

  if (resetButton) {
    resetButton.addEventListener('click', generateArray);
  }

  if (sortButton) {
    sortButton.addEventListener('click', () => {
      const bars = document.querySelectorAll('.bar');
      bars.forEach((bar) => bar.classList.remove('sorted', 'comparing'));
      bubbleSort();
    });
  }

  displayQuestion();
  displayCard();
  generateArray();
});
