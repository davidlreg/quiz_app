let currentQuestion = 0;

function init() {
  loadPages();
  showCurrentQuestion();
  showCurrentAnswerOptions();
}

function loadPages() {
  let totalPagesRef = document.getElementById("totalPagesAmount");

  totalPagesRef.innerHTML = "";
  totalPagesRef.innerHTML = questions.length;
}

function showCurrentQuestion() {
  let currentQuestionTitleRef = document.getElementById("titleQuestion");
  let question = questions[currentQuestion].question;

  currentQuestionTitleRef.innerHTML = "";
  currentQuestionTitleRef.innerHTML = question;
}

function showCurrentAnswerOptions() {
  let question = questions[currentQuestion];

  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let userAnswerChoice = selection.slice(-1);
  let correctAnswer = questions[currentQuestion].right_answer;

  if (userAnswerChoice == correctAnswer) {
    console.log("Right answer!");
  } else {
    console.log("Wrong answer!");
  }
}
