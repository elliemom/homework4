# Code-Quiz

This quiz asks the user a series of questions about javascript and times how long it takes to answer them all. 
The user is given 75 seconds to start out with, and each wrong answer results in a 15-second penalty. 
The user's final score is equal to the number of seconds left on the clock after the final question is answered.

To start the quiz, the user clicks the "Start Quiz" button on the landing page.
Once the quiz is started, the user is presented with a question, along with 3-4 possible answers. 
Upon clicking one of the possible answers, the app will tell the user whether their answer was correct or not, deduct 15 seconds from the remaining time if incorrect, then load the next question.

Once the final question is answered, the user's final score is shown, and a prompt is given for the user to enter their initials. 
When the "Submit" button is clicked, the initials and score are saved to local storage, so even after the browser is refreshed the score will be saved. 
The list of saved scores can be seen by clicking the "View High Scores" button.
