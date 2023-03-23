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
        question: '1. The word "Al-Yaom" (day) is mentioned in the Quran..',
        options: [
            {option: '1000 times', answer: false},
            {option: '365 times', answer: true},
            {option: '500 times', answer: false}
        ],
    },       
    {
        question: '2. The word "Shahr" (month) is mentioned in the Quran..',
        options: [ 
            {option: '33 times', answer: false},
            {option: '99 times', answer: false},
            {option: '12 times', answer: true}
        ],
    },
    {
        question: '3. The correct stages of development of the embryo was first mentioned..',
        options: [ 
            {option: 'By Hans Adolf Eduard Driesch 1890', answer: false},
            {option: 'In the Quran over 1400 years ago (surah: verses 23:12-14)', answer: true},
            {option: 'By Frances Maitland Balfour 1880', answer: false}
        ],
    },
    {
        question: '4. Allah mentions men and women in the Quran..',
        options: [
            {option: 'Men more than women', answer: false},
            {option: 'Women more than men', answer: false},
            {option: 'Exactly equal', answer: true}
        ],
    },
    {
        question: '5. The expansion theory was first mentioned..',
        options: [
            {option: 'By Edwin Hubble 1929', answer: false},
            {option: 'By Georges Lemaître 1920', answer: false},
            {option: 'In the Quran over 1400 years ago (surah:verse 51:47)', answer: true}
        ],
    },
    {
        question: '6. The word "Islam" means..',
        options: [
            {option: 'One who willfully submits (to God)', answer: true},
            {option: 'To strive', answer: false},
            {option: 'Followers of Prophet Muhammad (ﷺ)', answer: false}
        ],
    },
    {
        question: '7. The word "Jihad" means..',
        options: [
            {option: 'Holy war', answer: false},
            {option: 'To "struggle" or to "strive"', answer: true},
            {option: 'Martyrdom', answer: false}
        ],
    },
    {
        question: '8. Prophets is mentioned (by name) in the Quran..',
        options: [
            {option: '25', answer: true},
            {option: '3', answer: false},
            {option: '9', answer: false}
        ],
    },
    {
        question: '9. The angel who will blow the horn to signal the Day of Judgement is..',
        options: [
            {option: 'Izrafeel', answer: true},
            {option: 'Mikaeel', answer: false},
            {option: 'Jibreel', answer: false}
        ],
    },
    {
        question: '10. A muslim should love (after Allah and His Messenger ﷺ )..',
        options: [
            {option: 'His mother three times over, before his father', answer: true},
            {option: 'His father three times over, before his mother', answer: false},
            {option: 'His father and mother equally', answer: false}
        ],
    }];

let currentQuestion = 0;
let score = 0;

function startGame() {

    textQuestion.innerHTML = myQuestions[0].question;
    //display options from array
    for (let i = 0; i < textOptions.length; i++) {
        var btn = textOptions[i];
        btn.innerHTML = myQuestions[0].options[i].option;
    }

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

    if (btn.classList.contains('incorrect')) {
        btn.classList.remove('incorrect');
    }

    if (btn.classList.contains('correct')) {
        btn.classList.remove('correct');
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
    
    let correctAnswer = myQuestions[currentQuestion].options.find(element => element.answer === true);
    
        if (correctAnswer.option === this.innerText){  
            this.classList.add('correct');
            console.log("That's correct!");
            score++;
            incrementScore();
            } 
            else {
                this.classList.add('incorrect');
                console.log("Sorry, that was not correct. Try again next time!");
                }
    
    console.log(correctAnswer);

}

/**
 * function to add class when option is clicked (so that the user only can
 * click one option per question)
 */
function disableOptions() {

    document.getElementById('option1').style.pointerEvents = 'none';
    document.getElementById('option2').style.pointerEvents = 'none';
    document.getElementById('option3').style.pointerEvents = 'none';

}

/**
 * function to remove class when next button is clicked
 */
function enableOptions(){

    document.getElementById('option1').style.pointerEvents = 'all';
    document.getElementById('option2').style.pointerEvents = 'all';
    document.getElementById('option3').style.pointerEvents = 'all';

}

/**
 * increment current score 
 */
function incrementScore() {

    document.getElementById('current-score').innerText = score;

}

