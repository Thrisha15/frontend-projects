// Sample quiz data
const quizData = [
  {
    question: "What is the capital of AP?",
    options: ["Amaravathi", "Vizag", "Kurnool", "Chittoor"],
    answer: "Amaravathi",
  },
  {
    question: "Who wrote 'Ignited Minds'?",
    options: ["Nehru", "Gandhiji", "Abdul Kalam", "J.R.R. Tolkien"],
    answer: "Abdul Kalam",
  },
  {
    question: "Which planet is known as the pink city?",
    options: ["Mumbai", "Jaipur", "Kerala", "Goa"],
    answer: "Jaipur",
  },
];

// Variables to track quiz progress
let currentQuestion = 0;
let score = 0;

// Elements
const questionElement = document.getElementById("question");
const optionForm = document.getElementById("option-form");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

// Function to load question and options
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  // Clear previous options
  optionForm.innerHTML = "";

  // Add new options
  currentQuizData.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}<br>`;
    optionForm.appendChild(label);
  });

  // Enable/disable previous and next buttons based on current question
  prevButton.disabled = currentQuestion == 0;
  nextButton.textContent =
    currentQuestion == quizData.length - 1 ? "Submit" : "Next";
}

// Function to check selected answer
function checkAnswer() {
  const selectedOption = optionForm.querySelector(
    'input[name="option"]:checked'
  );
  if (!selectedOption) {
    alert("Please select an option");
    return;
  }

  const answerIndex = parseInt(selectedOption.value);
  const currentQuizData = quizData[currentQuestion];
  if (currentQuizData.options[answerIndex] == currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to show result
function showResult() {
  questionElement.style.display = "none";
  optionForm.style.display = "none";
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
  resultElement.style.display = "block";
}

// Load first question
loadQuestion();

// Event listeners for previous and next buttons
prevButton.addEventListener("click", () => {
  currentQuestion--;
  loadQuestion();
});

nextButton.addEventListener("click", checkAnswer);
