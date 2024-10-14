// INSTRUCTIONS
// For this assignment, you'll be creating a multiple choice quiz game using JavaScript, similar to the game from Module 2. 
// However, this time you will be using JavaScript to manipulate the HTML instead of using alert, confirm, and prompt. 
// the user will only have 30 seconds to answer each question.

// Note that for this assignment all you are given for markup is <div id="quiz"></div>. That means that all the elements for the quiz must be created with JavaScript.

// In the index.js file, you must also create a variable named questionsArr similar to the previous quiz assignment. This variable will contain all of the quiz data that the app will use.
    // Like the previous quiz game, this variable must follow a specific format. 

    // It must be an array of objects, with each object having question and answer properties, as well as a options property that is another array full of the possible choices for each question. 
    
    // Your questionsArr variable should contain at least FIVE question objects. Additionally, each set of possible choices in options should have at least two choices.

    // Create the content of the questions and answers around whatever theme or topic you wish.

var questionsArr = [
    {
      question: '1. Who created JavaScript?',
      answer: 'Brendan Eich',
      options: [
        'Linus Torvalds',
        'Brendan Eich',
        'Dan Abramov',
        'Douglas Crockford',
      ]
    },
    {
      question: '2. Who created JavaScript?',
      answer: 'Brendan Eich',
      options: [
        'Linus Torvalds',
        'Brendan Eich',
        'Dan Abramov',
        'Douglas Crockford',
      ]
    },
    {
        question: '3. Who created JavaScript?',
        answer: 'Brendan Eich',
        options: [
          'Linus Torvalds',
          'Brendan Eich',
          'Dan Abramov',
          'Douglas Crockford',
        ]
    },
    {
        question: '4. Who created JavaScript?',
        answer: 'Brendan Eich',
        options: [
          'Linus Torvalds',
          'Brendan Eich',
          'Dan Abramov',
          'Douglas Crockford',
        ]
    },
    {
        question: '5. Who created JavaScript?',
        answer: 'Brendan Eich',
        options: [
          'Linus Torvalds',
          'Brendan Eich',
          'Dan Abramov',
          'Douglas Crockford',
        ]
    }
];

// creating variables
var currentQuestionIndex = 0;
var score = 0;
var timer;
var totalQuestions = questionsArr.length;



// ON PAGE LOAD
window.onload = function() {
    const quizContainer = document.getElementById("quiz");
    // make element to display previous score
    var previousScoreDisplay = document.createElement('p');
    // retrieve previous score from localStorage
    var PREVIOUS_SCORE = 'previousScore';
    var previousScore = localStorage.getItem('PREVIOUS_SCORE');

    // IF = PREV SCORE IS STORED
    if (previousScore) {
      // 1. display previous score
      // set previousScoreDisplay to previous score
      previousScoreDisplay.textContent = previousScore
      // append prevousScoreDisplay to quiz container
      quizContainer.textContent = previousScoreDisplay;

    // 2. create a "start quiz" button w/ id attribute of "start-quiz"
    var startButton = document.createElement("button");
    startButton.id = "start-quiz";
    startButton.innerText = "Start Quiz!";
    // 3. display button
    quizContainer.appendChild(startButton);
    

    } else {
    // ELSE = 1ST TIME PLAYING
    // 1. create a "start quiz" button w/ id attribute of "start-quiz"
    var startButton = document.createElement("button");
    startButton.id = "start-quiz";
    startButton.innerText = "Start Quiz!";
    // 2. display button
    quizContainer.appendChild(startButton);

    }



    // click button to start the quiz
    startButton.onclick = startQuiz;
}

// AFTER STARTING THE QUIZ
function startQuiz() {
    console.log("start quiz");
    // make constant to target the quiz container div in provided HTML
    const quizContainer = document.getElementById("quiz");

    // start at question 1 (index 0) with a score of 0


    function loadQuestion() {
        // if there are more questions left
        if (currentIndex < questionsArr.length) { 
            // select the next question object in questionsArr
            var questionObject = questionsArr[currentIndex];
            // create element to display the question
            var currentQuestion = document.createElement("p");
            // display the question
            currentQuestion.innerText = questionObject.question;
            quizContainer.appendChild(currentQuestion);

            // display the questionObject.options as buttons
            questionObject.options.forEach(option => {
                var optionButton = document.createElement("button");
                optionButton.innerText = option;
                quizContainer.appendChild(optionButton);
            });

            // display a timer that counts down from 30 one second at a time
            // use setInterval and clearInterval methods to create the timer
            // create an element to display the timer
            var timerDisplay = document.createElement("p")
            timerDisplay.textContent = "30"; // start at 30
            quizContainer.appendChild(timerDisplay); // append to quiz container
            
            var timeRemaining = 30; // create variable for timeRemaining
            var intervalId = setInterval(function() {  // use interval for timer
                timerDisplay.textContent = Number(timerDisplay.textContent) - 1
                if (timerDisplay.textContent === '0') {
                    clearInterval(intervalId) // stop counting at 0
                }
            }, 1000) // count by 1 second
        }
    }

    loadQuestion();

}

// Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. 
// There should be no messaging or feedback displayed to the user after making a selection or running out of time(figure 4).


// LAST QUESTION
// After the last question is answered or time runs out the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). 
// This number should be rounded to the nearest whole number.


// PERSIST SCORE DATA BETWEEN GAMES
// the application should use the JavaScript localStorage API to store the user's most recent score under the key "previous-score" after each game and retrieve the score on page load. 
// This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.
