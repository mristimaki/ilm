/*
 * Declaring constants for DOM elements
 * and possible choices.
 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startButton = document.getElementById('start-button');
const scoreArea = document.getElementById('score-area');
const textQuestion = document.getElementById('question-que');
const textOptions = document.getElementsByClassName('choice-que');
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
};

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
        options: [
            {option: '1000 times', answer: false},
            {option: '365 times', answer: true},
            {option: '500 times', answer: false}
        ],
    },       
    {
        question: 'The word "Shahr" (month) is mentioned in the Quran..',
        options: [ 
            {option: '33 times', answer: false},
            {option: '99 times', answer: false},
            {option: '12 times', answer: true}
        ],
    },
    {
        question: 'The correct stages of development of the embryo was first mentioned..',
        options: [ 
            {option: 'By Hans Adolf Eduard Driesch 1890', answer: false},
            {option: 'In the Quran over 1400 years ago (surah: verses 23:12-14)', answer: true},
            {option: 'By Frances Maitland Balfour 1880', answer: false}
        ],
    },
    {
        question: 'Allah mentions men and women in the Quran..',
        options: [
            {option: 'Men more than women', answer: false},
            {option: 'Women more than men', answer: false},
            {option: 'Exactly equal', answer: true}
        ],
    },
    {
        question: 'The expansion theory was first mentioned..',
        options: [
            {option: 'By Edwin Hubble 1929', answer: false},
            {option: 'By Georges Lemaître 1920', answer: false},
            {option: 'In the Quran over 1400 years ago (surah:verse 51:47)', answer: true}
        ],
    },
    {
        question: 'The word "Islam" means..',
        options: [
            {option: 'One who willfully submits (to God)', answer: true},
            {option: 'To strive', answer: false},
            {option: 'Followers of Prophet Muhammad (ﷺ)', answer: false}
        ],
    },
    {
        question: 'The word "Jihad" means..',
        options: [
            {option: 'Holy war', answer: false},
            {option: 'To "struggle" or to "strive"', answer: true},
            {option: 'Martyrdom', answer: false}
        ],
    },
    {
        question: 'Prophets is mentioned (by name) in the Quran..',
        options: [
            {option: '25', answer: true},
            {option: '3', answer: false},
            {option: '9', answer: false}
        ],
    },
    {
        question: 'The angel who will blow the horn to signal the Day of Judgement is..',
        options: [
            {option: 'Izrafeel', answer: true},
            {option: 'Mikaeel', answer: false},
            {option: 'Jibreel', answer: false}
        ],
    },
    {
        question: 'A muslim should love (after Allah and His Messenger ﷺ )..',
        options: [
            {option: 'His mother three times over, before his father', answer: true},
            {option: 'His father three times over, before his mother', answer: false},
            {option: 'His father and mother equally', answer: false}
        ],
    }];

let currentQuestion = 0;
let score = 0;

/**
let answers = [];
for (let i = 0; i < myQuestions.length; i++) {
    options.push({answered: false, correct: null, answer: null});
}
*/

function startGame() {

    displayQuestions();

}

function displayQuestions() {

    //display question from array
    textQuestion.innerHTML = myQuestions[currentQuestion].question;
    //display options from array
    for (let i = 0; i < textOptions.length; i++) {
        var btn = textOptions[i];
        btn.innerHTML = myQuestions[currentQuestion].options[i].option;
        checkAnswer();
    }

    console.log(displayQuestions);

}

/**
 * function to check if user has clicked the true/false option
 */

const choices = document.querySelectorAll('.choice-que');
choices.forEach(choice => choice.addEventListener('click', checkAnswer));

function checkAnswer() {
    console.log(checkAnswer);

    let correctAnswer = myQuestions[0].options.find(element => element.answer === true);
    console.log(correctAnswer);

        if (correctAnswer.option === this.innerText){
        score++;
        incrementScore();
        disableOptions();
        } else {
        
        }
        
    
}


/**
 * myQuestions[0].options.find(element => element.answer === true);
 */


/**
 * function to disable options when one is clicked
 */
function disableOptions() {

    for (let i = 0; i < textOptions.length; i++){
        textOptions[i].disabled = true;
    }
    
}

/**
 * function to enable options
 */
function enableOptions(){

    for (let i = 0; i < textOptions.length; i++) {
        textOptions[i].disabled = false;
    }

}

/**
 * increment current score 
 */
function incrementScore() {

    document.getElementById('current-score').innerText = score;

}

/**
 * go to next question 
 */
function next() {

    if(currentQuestion<9) {
        currentQuestion++;
        enableOptions();
        displayQuestions();
    }

}
