const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let totalScore = quesJSON.length;
let currentQuestion = 0;

const questionBox = document.getElementById('question');
const optionsBox = document.getElementById('options');
const scoreBox = document.getElementById('score');

function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  questionBox.innerText = question;

  shuffleArray(options).forEach((opt) => {
    const temp = document.createElement('button');
    temp.innerText = opt;

    temp.addEventListener('click', () => {
      if (opt === correctAnswer) {
        score++;
      }
      else {
        score = score - 0.25;
      }
      nextQuestion();
    })

    optionsBox.appendChild(temp);
  })
}

function nextQuestion() {
  currentQuestion++;
  optionsBox.textContent = '';
  scoreBox.textContent = `Score: ${score} / ${totalScore}`;
  if (currentQuestion === quesJSON.length) {
    questionBox.textContent = 'Quiz Completed';
    next.remove();
  }
  else {
    showQuestion();
  }
}


function shuffleArray(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}

const next = document.getElementById('next');
next.addEventListener('click',nextQuestion);

showQuestion();