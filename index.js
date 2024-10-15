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
      question: '1. What is the name of the villain in the movie "The Nightmare Before Christmas"?',
      answer: 'Oogie Boogie',
      options: [
        'The Grinch',
        'Oogie Boogie',
        'Michael Myers',
        'Voldemort',
      ]
    },
    {
      question: '2. How many bones are in the average human skeleton?',
      answer: '206',
      options: [
        '206',
        '198',
        '218',
        '7',
      ]
    },
    {
        question: '3. How did early New Englanders protect their homes from evil spirits?',
        answer: 'By hiding shoes in their walls',
        options: [
          'By wearing pointy hats',
          'By hanging seasonal wreaths',
          'By locking their doors',
          'By hiding shoes in their walls',
        ]
    },
    {
        question: "4. Which movie tops Rotten Tomatoes' list of the Scariest Horror Movies Ever?",
        answer: 'The Exorcist',
        options: [
          'The Poltergeist',
          'Halloween',
          'The Exorcist',
          'The Conjuring',
        ]
    },
    {
        question: '5. Who wrote "The Legend of Sleepy Hollow"?',
        answer: 'Washington Irving',
        options: [
          'Stephen King',
          'Washington Irving',
          'Mary Shelley',
          'Jamie Lee Curtis',
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
  // check for previous score in localStorage
    var previousScore = localStorage.getItem('previous-score');
    // IF previous score found
    if (previousScore) {
      // create previous score display
      var previousScoreDisplay = document.createElement('p');
      previousScoreDisplay.textContent = "Previous Score: " + previousScore + "%";
      // display previous score in quiz div
      quizDiv.appendChild(previousScoreDisplay);
    }

    // create start button
    var startButton = document.createElement("button");
    startButton.id = "start-quiz";
    startButton.innerText = "Start Quiz!";
    // display start button in quiz div
    quizDiv.appendChild(startButton);

    // event listener for start quiz button click
    startButton.addEventListener('click', startQuiz);
    // clicking the start button runs the startQuiz function  
}

// START QUIZ
function startQuiz() { 
  currentQuestionIndex = 0; // start at first question (index 0)
  score = 0; // start score at 0
  quizDiv.innerText = ''; // clear quiz div display
  displayQuestion(); // call function displayQuestion
}

// DISPLAY QUESTION
function displayQuestion() {
  if (currentQuestionIndex < totalQuestions) { // IF current index < total question
    quizDiv.innerText = ''; // clear quiz div display
    // retrieve all info for the current question
    var currentQuestionData = questionsArr[currentQuestionIndex]; 
    var questionEl = document.createElement("p"); // create question element
    questionEl.textContent = currentQuestionData.question; // display the question
    quizDiv.appendChild(questionEl);

    // display the options (in an options div?)
    var optionsDiv = document.createElement("div");
    quizDiv.appendChild(optionsDiv);

    // CREATE BUTTON FOR EACH OPTION
    // use content from question options
    currentQuestionData.options.forEach(option => {
      // create button elements
      const optionButton = document.createElement("button"); // display question options in button's innerText
      optionButton.innerText = option; 
      // add event listener for option buttons
      optionButton.addEventListener('click', () => checkAnswer(option));
      optionsDiv.appendChild(optionButton); 
      // append option buttons to optionsDiv in the quizDiv display area
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
  var timeRemaining = 30; // set timer duration
  var timerEl = document.createElement("p"); // display the timer
  timerEl.textContent = timeRemaining; 
  quizDiv.appendChild(timerEl); // display countdown at bottom of the quizDiv

  timer = setInterval(function() { 
    timerEl.textContent = Number(timerEl.textContent) - 1
    if (timerEl.textContent === '0') { // when the timer reaches 0...
        clearInterval(timer); // stop the countdown
        currentQuestionIndex++; // cycle to next question by +1 to question index
        displayQuestion();
        // no messaging or feedback displayed to the user
    }
  }, 1000) // countdown one second at a time
}

// CHECK FOR CORRECT ANSWER
function checkAnswer(selectedOption) {
  // retrieve correct answer for the given question
  var correctAnswer = questionsArr[currentQuestionIndex].answer;
  
  if (selectedOption === correctAnswer) { // IF CORRECT (button user clicked === correct answer)
    score++; // +1 to score
  } 
  clearInterval(timer); // reset timer
  currentQuestionIndex++; // +1 to question index 
  displayQuestion(); // go to next question

  console.log(score);
  console.log(typeof score);
}

// END QUIZ
function endQuiz() {
  // calculate final score
  // divide correct answers by total questions & round to the nearest whole number
  var finalScore = ((score / totalQuestions) * 100);
  // save final score under the key previous-score to localStorage
  localStorage.setItem('previous-score', finalScore);

  // restart the game (by reloading the page ?)
  location.reload();
}


// LAST QUESTION
// After the last question is answered or time runs out the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). 
// This number should be rounded to the nearest whole number.


// PERSIST SCORE DATA BETWEEN GAMES
// the application should use the JavaScript localStorage API to store the user's most recent score under the key "previous-score" after each game and retrieve the score on page load. 
// This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.



