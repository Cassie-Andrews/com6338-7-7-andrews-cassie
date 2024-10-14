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


// ON PAGE LOAD
window.onload = function() {
    const quizContainer = document.getElementById("quiz");

    // create a "start quiz" button
    var startButton = document.createElement("button");
    // The button MUST have an id attribute of "start-quiz"
    startButton.id = "start-quiz";
    startButton.innerText = "Start Quiz!";
    // display a "start quiz" button
    quizContainer.appendChild(startButton);
    
    // ! If the user has taken the quiz before, the app should display the previous score, use localStorage.getItem



    // click button to start the quiz
    startButton.onclick = startQuiz;


// AFTER STARTING THE QUIZ
function startQuiz() {
    console.log("start quiz");
    const quizContainer = document.getElementById("quiz");

    // start at question 1
    let currentIndex = 0;
    let score = 0;

    function loadQuestion() {
        // if there are more questions left
        if (currentIndex < questionsArr.length) { 
            // select the next question object in questionsArr
            var questionObject = questionsArr[currentIndex];
            // create element to display the question
            var currentQuestion = document.createElement("p");
            // display the question
            currentQuesiton.innerText = questionObject.question;
            quizContainer.appendChild(currentQuesiton);

            // display the questionObject.options as buttons
            questionObject.options.forEach(option => {
                var optionButton = document.createElement("button");
                optionButton.innerText = "this is an option";
            });

            // display a timer that counts down from 30 one second at a time
            // use setInterval and clearInterval methods to create the timer
        }
    }
}
}




// Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. 
// There should be no messaging or feedback displayed to the user after making a selection or running out of time(figure 4).


// LAST QUESTION
// After the last question is answered or time runs out the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). 
// This number should be rounded to the nearest whole number.


// PERSIST SCORE DATA BETWEEN GAMES
// the application should use the JavaScript localStorage API to store the user's most recent score under the key "previous-score" after each game and retrieve the score on page load. 
// This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.
