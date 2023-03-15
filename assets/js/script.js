/**
 * Declaring constants for DOM elements
 * and possible choices.
 */
const container = document.getElementById('container');
const topArea = document.getElementById('top-area');
const bottomArea = document.getElementById('bottom-area');
const changingButton = document.getElementsByClassName('changing-button');

// function to empty content of container when "start quiz" is ckicked
function startQuiz() {
    topArea.innerHTML = '';
    bottomArea.innerHTML = '';
    changingButton.innerHTML = '';

    const question = '<h3>This is the first statement...</h3>';
    const options = '<p>First option</p> <br> <p>Second option</p> <br> <p>Third option</p>';
    const button = '<p>Score: </p>';

    container.innerHTML += question;
    container.innerHTML += options;
    changingButton.innerHTML += button;
    
}

function checkCorrectAnswer() {

}

function incrementScore() {

}

function nextQuestion() {

}