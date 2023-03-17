/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const container = document.getElementById('container');
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const box = document.getElementById('box');
const scoreArea = document.getElementById('score-area');
const choiceQue = document.getElementsByClassName('abc');
const nextButton = document.getElementById('next-button');
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


/**
 * questions and answers
 */
let myQuestions = [{
    question: "This is the first statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 2
},  
    {
        question: "This is the second statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 3
},        
    {
        question: "This is the third statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 1
},
    {
        question: "This is the fourth statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 2
},
    {
        question: "This is the fifth statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 3
},
    {
        question: "This is the sixth statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 2
},
    {
        question: "This is the seventh statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 1
},
    {
        question: "This is the eight statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 2
},
    {
        question: "This is the nineth statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 3
},
    {
        question: "This is the tenth statement..",
    option1: "This is the first option.",
    option2: "This is the second option.",
    option3: "This is the third option.",
    answer: 1
    }]

/**
 * function to play the game and show questions and answers
 */
