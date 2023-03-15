/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const container = document.getElementById('container');
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const scoreArea = document.getElementById('score-area');
const playAgain = document.getElementById('play-again');

 /* 
 * hide quiz and result area when window is loaded and 
 * display the score-area
 */
 window.onload = function startPage() {
    quiz.style.display = 'none';
    result.style.display = 'none';
    scoreArea.style.display = 'none';
    playAgain.style.display = 'none';
}

/*
 * function to show quiz area and hide start and result area 
 * when "start quiz" is ckicked
 */
function startQuiz() {
    quiz.style.display = 'contents';
    scoreArea.style.display = 'contents';
    start.style.display = 'none';
    result.style.display = 'none';
    startButton.style.display = 'none';
}

function checkCorrectAnswer() {

}

function incrementScore() {

}

function nextQuestion() {

}