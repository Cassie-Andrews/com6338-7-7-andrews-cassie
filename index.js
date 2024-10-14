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

// creating initial variables
var currentQuestionIndex = 0; // start at index 0
var score = 0; // start at score 0
var timer; // make timer
var totalQuestions = questionsArr.length; // total number questions to calc score
var quizDiv = document.getElementById('quiz');

// ON PAGE LOAD
window.onload = function() {
  // check for previous score
    // check localStorage
    var PREVIOUS_SCORE = localStorage.getItem('previous-score');
    // define quiz area for display


    // IF previous score found
    if (PREVIOUS_SCORE) {
      // create previous score display
      var previousScoreDisplay = document.createElement('p');
      previousScoreDisplay.textContent = previousScore;
      // display previous score in quiz div
      quizDiv.textContent = previousScoreDisplay;

      // create start button
      var startButton = document.createElement("button");
      startButton.id = "start-quiz";
      startButton.innerText = "Start Quiz!";
      // display start button in quiz div
      quizDiv.appendChild(startButton);
      
    } else {
      // create start button
      var startButton = document.createElement("button");
      startButton.id = "start-quiz";
      startButton.innerText = "Start Quiz!";
      // display start button in quiz div
      quizDiv.appendChild(startButton);

      // event listener for start quiz button click
      document.getElementById('start-quiz').addEventListener('click', startQuiz);
        // clicking the start button runs the startQuiz function  
    }
}


// START QUIZ
function startQuiz() {
  // start at first question (index 0)
  currentQuestionIndex = 0;
  // start score at 0
  score = 0;
  // clear quiz div display or previous score and start button
  quizDiv.innerText = '';
  // call function displayQuestion
  displayQuestion();
}

// DISPLAY QUESTION
function displayQuestion() {
  // IF current index < total question
  if (currentQuestionIndex < totalQuestions) {
    console.log("displayQuestion");
    // retrieve all info for the current question
    var currentQuestionData = questionsArr[currentQuestionIndex];    
    // display the question
    var questionEl = document.createElement("p");
    questionEl.id = "current-question";
    questionEl.textContent = currentQuestionData.question;
    quizDiv.appendChild(questionEl);

    // display the options (in an options div?)
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options-div";
    quizDiv.appendChild(optionsDiv);

    // display the timer
    var timerEl = document.createElement("p");
    timerEl.id = "timer-display";
    timerEl.textContent = 30;
    quizDiv.appendChild(timerEl);

    // CREATE BUTTON FOR EACH OPTION
    // use content from question options
    currentQuestionData.options.forEach(option => {
      // create button elements
      var optionButton = document.createElement("button");
      optionButton.id = "option-button";
      // display question options in button's innerText
      optionButton.innerText = option;
      // append option buttons to optionsDiv in the quizDiv display area
      optionsDiv.appendChild(optionButton);
      // TO DO ==> add event listener for option buttons
      // TO DO ==> optionButton.addEventListener('click', 'x');
    });
    // call startTimer function
    startTimer();
  } else {
    // call endQuiz function
    endQuiz();
  }
}

// START TIMER
function startTimer() {
  // use setInterval to countdown from 30 sec for each question
  // countdown one second at a time
  // stop the countdown when it reaches 0
  // when timer reaches 0
    // no messaging or feedback displayed to the user
    // cycle to next question by +1 to question index
  // display countdown at bottom of the quizDiv
}


// CHECK FOR CORRECT ANSWER
function checkAnswer() {
  // retrieve correct answer for the given question

  // IF CORRECT (button user clicked === correct answer)
    // +1 to score
    // reset timer
    // go to next question
      // +1 to question index 
      // call displayQuestion function
  // ELSE (incorrect)
    // reset timer
    // go to next question
      // +1 to question index
      // call displayQuestion function
}

// END QUIZ
function endQuiz() {
  // calculate final score 
    // divide correct answers by total questions
    // round to the nearest whole numebr
  // save final score under the key previous-score to localStorage
  // restart the game (by reloading the page ?)
}


// LAST QUESTION
// After the last question is answered or time runs out the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). 
// This number should be rounded to the nearest whole number.


// PERSIST SCORE DATA BETWEEN GAMES
// the application should use the JavaScript localStorage API to store the user's most recent score under the key "previous-score" after each game and retrieve the score on page load. 
// This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.














/*
// AFTER STARTING THE QUIZ
function startQuiz() {
    console.log("start quiz");
    // make constant to target the quiz container div in provided HTML
    const  quizDiv = document.getElementById("quiz");

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
            quizDiv.appendChild(currentQuestion);

            // display the questionObject.options as buttons
           
            });

            // display a timer that counts down from 30 one second at a time
            // use setInterval and clearInterval methods to create the timer
            // create an element to display the timer
            var timerDisplay = document.createElement("p")
            timerDisplay.textContent = "30"; // start at 30
            quizDiv.appendChild(timerDisplay); // append to quiz container
            
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

*/

