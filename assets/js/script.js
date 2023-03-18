/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const questionQue = document.getElementById('question');
const choiceQue = document.querySelectorAll('choices');
const scoreArea = document.getElementById('score-area');
const currentScore = document.getElementById('current-score');
const totalScore = document.getElementById('total-score');
const playAgain = document.getElementById('play-again');

let currentQuestion = 0;
let score = 0;
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
 * functions to hide divs when playing the game
 */
document.getElementById('start-button').addEventListener('click', () => {
    quiz.style.display = 'contents';
    scoreArea.style.display = 'contents';
    start.style.display = 'none';
    startButton.style.display = 'none';
    result.style.display = 'none';

    startGame();
});

/**
 * questions and answers
 */
let myQuestions = [
    {
        question: 'The word "Al-Yaom" (day) is mentioned in the Quran..',
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
        question: 'The correct stages of development of the embryo was first mentioned..',
        answers: [ 
            {option: 'By Hans Adolf Eduard Driesch 1890.', answer: false},
            {option: 'In the Quran over 1400 years ago.', answer: true},
            {option: 'By Frances Maitland Balfour 1880.', answer:false},
        ],
    },
    {
        question: 'Allah mentions men and women in the Quran..',
        answers: [
            {option: 'Men more than women.', answer: false},
            {option: 'Women more than men.', answer: false},
            {option: 'Exactly equal.', answer:true},
        ],
    },
    {
        question: 'The expansion theory was first mentioned..',
        answers: [
            {option: 'By Edwin Hubble 1929.', answer: false},
            {option: 'By Georges Lemaître 1920.', answer: false},
            {option: 'In the Quran over 1400 years ago (surah,verse 51:47).', answer:true},
        ],
    },
    {
        question: 'The word "Islam" means..',
        answers: [
            {option: 'One who willfully submits (to God).', answer: true},
            {option: 'To strive.', answer: false},
            {option: 'Followers of Prophet Muhammad (ﷺ).', answer:false},
        ],
    },
    {
        question: 'The word "Jihad" means..',
        answers: [
            {option: 'Holy war.', answer: false},
            {option: 'To "struggle" or to "strive".', answer: true},
            {option: 'Martyrdom.', answer:false},
        ],
    },
    {
        question: 'Prophets is mentioned (by name) in the Quran..',
        answers: [
            {option: '25.', answer: true},
            {option: '313.', answer: false},
            {option: '597.', answer:false},
        ],
    },
    {
        question: 'The angel who will blow the horn to signal the Day of Judgement is..',
        answers: [
            {option: 'Izrafeel.', answer: true},
            {option: 'Mikaeel.', answer: false},
            {option: 'Jibreel.', answer:false},
        ],
    },
    {
        question: 'A muslim should love (after Allah and His Messenger ﷺ )..',
        answers: [
            {option: 'His mother three times over before his father.', answer: true},
            {option: 'His father three times over before his mother.', answer: false},
            {option: 'His father and mother equally.', answer:false},
        ],
    }];

/**
 * function for next-button
 */
document.getElementById('next-button').addEventListener('click', () => {
    counter++;
    display.innerText = myQuestions[counter];
});

/**
 * function to start the game and get the Q&A from array
 */
let answers = [];
for (let i = 0; i < myQuestions.length; i++) {
    answers.push({answered: false, correct: null, answer: null});
}

function startGame() {
    currentQuestion = 0;
    score = 0;

    playGame();
}

function playGame() {
    questionQue.innerHTML = myQuestions[currentQuestion].question;

    for (let i = 0; i < choiceQue.length; i++) {
        const choiceButton = choiceQue[i];
        choiceButton.lastElementChild.innerHTML = myQuestions[currentQuestion].answers[i].option;
    }
}

