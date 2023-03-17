/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const container = document.getElementById('container');
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const questions = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choices'));
const scoreArea = document.getElementById('score-area');
const currentScore = document.getElementById('current-score');
const totalScore = document.getElementById('total-score');
const nextButton = document.getElementById('next-button');
const playAgain = document.getElementById('play-again');

let currentQuestion = {};
let acceptingAnswers = true;
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
let questions = [{
    question: "Which sahaba did Prophet Muhammad (ﷺ) help to become free from being a slave by planting 300+ date palm trees?",
    option1: "Bilal ibn Rabah",
    option2: "Salman al Farisi",
    option3: "Zayd ibn Harisa",
    answer: 2
},  
    {
        question: "Which Angel will blow the horn to signal the Day of Judgement?",
    option1: "Jibreel",
    option2: "Israeel",
    option3: "Izrafeel",
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
 * functions to hide divs when playing the game
 */
document.getElementById('start-button').addEventListener('click', () => {
    quiz.style.display = 'contents';
    scoreArea.style.display = 'contents';
    start.style.display = 'none';
    startButton.style.display = 'none';
    result.style.display = 'none';
});

/*
 * function to start the game
 */
let startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return scoreArea.style.display = 'contents', quiz.style.display = 'none';
    }

/**
 * getting random questions from the array of questions and making sure
 * that we don't get the same question/answer more than one time
 */
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    
/**
 * defining which choices the user should get within the array of questions
 * and 
 */
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        const correctAnswer = choices[currentQuestion.answer -1];
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        } else if (classToApply === 'incorrect') {
            correctAnswer.classList.add('correct');
        }
        selectedChoice.classList.ass(classToApply);
    });
});

/**
 * next question button
 */
document.getElementById('next-button').addEventListener('click', () => {
    choices.forEach(choice => {
        choice.classList.remove('incorrect');
        choice.classList.remove('correct');
    })
    getNewQuestion();
});