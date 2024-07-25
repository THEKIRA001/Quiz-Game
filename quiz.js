const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  options: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { correctAnswer, options, question } = questionObj;
let score = 0;

const questionBox = document.getElementById('question');
const optionsBox = document.getElementById('options');
const scoreBox = document.getElementById('score');

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

    scoreBox.textContent = `Score: ${score}`;

    questionBox.textContent = 'Quiz Completed';
    optionsBox.textContent = '';
  })

  optionsBox.appendChild(temp);
})

function shuffleArray(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
} 