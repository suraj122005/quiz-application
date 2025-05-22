const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    options: ["<script src='script.js'>", "<script href='script.js'>", "<script ref='script.js'>"],
    answer: "<script src='script.js'>"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS"],
    answer: "CSS"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, q.answer);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    feedbackEl.textContent = "❌ Wrong! Correct Answer: " + correct;
  }
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

loadQuestion();
