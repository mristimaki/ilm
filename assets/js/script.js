/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const questionQue = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choices'));
const scoreArea = document.getElementById('score-area');
const currentScore = document.getElementById('current-score');
const totalScore = document.getElementById('total-score');
const playAgain = document.getElementById('play-again');

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

 /* 
 * hide quiz and result area when window is loaded and 
 * display the score-area
 */
 window.onload = function startPage() {
    quiz.style.display = 'none';
    result.style.display = 'none';
    scoreArea.style.display = 'none';
    playAgain.style.display = 'none';
;}

/**
 * questions and answers
 */
let myQuestions = [
    {
        question: 'The word "Al-Yahom" (day) is mentioned in the Quran..',
        answers: [
            {option: '1000 times.', answer: false},
            {option: '365 times.', answer: true},
            {option: '500 times.', answer:false},
        ],
    },       
    {
        question: 'The word "Shahr" (month) is mentioned in the Quran..',
        answers: [
            {option: '33 times.', answer: false},
            {option: '99 times.', answer: false},
            {option: '12 times.', answer:true},
        ],
    },
    {
        question: 'The creation of the embryo was first mentioned..',
        answers: [ 
            {option: 'by Hans Adolf Eduard Driesch 1890.', answer: false},
            {option: 'in the Quran over 1400 years ago.', answer: true},
            {option: 'by Frances Maitland Balfour 1880.', answer:false},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: true},
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer:false},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer:true},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: true},
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer:false},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer: true},
            {option: 'This is the first option.', answer:false},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: true},
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer:false},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: true},
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer:false},
        ],
    },
    {
        question: 'This is the third statement..',
        answers: [
            {option: 'This is the first option.', answer: true},
            {option: 'This is the first option.', answer: false},
            {option: 'This is the first option.', answer:false},
        ],
    }];

/**
 * functions to hide divs when playing the game
 */
document.getElementById('start-button').addEventListener('click', () => {
    quiz.style.display = 'contents';
    scoreArea.style.display = 'contents';
    start.style.display = 'none';
    startButton.style.display = 'none';
    result.style.display = 'none';
});


let answer = []

/*
 * function to start the game
 */
function startGame() {

}