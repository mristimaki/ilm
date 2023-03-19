/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const scoreArea = document.getElementById('score-area');
const textQuestion = document.getElementById('header');
const textOptions = document.getElementById('option-que')
const currentScore = document.getElementById('current-score');
const totalScore = document.getElementById('total-score');
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
        answer: '365 times.',
        options: [
            '1000 times.',
            '365 times.',
            '500 times.'
        ]
    },       
    {
        question: 'The word "Shahr" (month) is mentioned in the Quran..',
        answer: '12 times.',
        options: [ 
            '33 times.',
            '99 times.',
            '12 times.',
        ]
    },
    {
        question: 'The correct stages of development of the embryo was first mentioned..',
        answer: 'In the Quran over 1400 years ago.',
        options: [ 
            'By Hans Adolf Eduard Driesch 1890.',
            'In the Quran over 1400 years ago.',
            'By Frances Maitland Balfour 1880.',
        ],
    },
    {
        question: 'Allah mentions men and women in the Quran..',
        answer: 'Exactly equal.',
        options: [
            'Men more than women.',
            'Women more than men.',
            'Exactly equal.'
        ],
    },
    {
        question: 'The expansion theory was first mentioned..',
        answer: 'In the Quran over 1400 years ago (surah,verse 51:47).',
        options: [
            'By Edwin Hubble 1929.',
            'By Georges Lemaître 1920.',
            'In the Quran over 1400 years ago (surah,verse 51:47).'
        ],
    },
    {
        question: 'The word "Islam" means..',
        answer: 'One who willfully submits (to God).',
        options: [
            'One who willfully submits (to God).',
            'To strive.',
            'Followers of Prophet Muhammad (ﷺ).'
        ],
    },
    {
        question: 'The word "Jihad" means..',
        answer: 'To "struggle" or to "strive".',
        options: [
            'Holy war.',
            'To "struggle" or to "strive".',
            'Martyrdom.'
        ],
    },
    {
        question: 'Prophets is mentioned (by name) in the Quran..',
        answer: '25.',
        options: [
            '25.',
            '313.',
            '597.'
        ],
    },
    {
        question: 'The angel who will blow the horn to signal the Day of Judgement is..',
        answer: 'Izrafeel.',
        options: [
            'Izrafeel.',
            'Mikaeel.',
            'Jibreel.'
        ],
    },
    {
        question: 'A muslim should love (after Allah and His Messenger ﷺ )..',
        answer: 'His mother three times over, before his father.',
        options: [
            'His mother three times over, before his father.',
            'His father three times over, before his mother.',
            'His father and mother equally.'
        ],
    }];

let currentQuestion = 0;
let score = 0;

function startGame() {
    displayQuestions();
}

function displayQuestions() {
    
    textQuestion.innerHTML = myQuestions[currentQuestion].question;


}


/**
 * go to next question 
 */
function next(){
    if(currentQuestion<9) {
        currentQuestion++;
        displayQuestions();
    }
}