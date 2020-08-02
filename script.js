var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");

var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
// var addscore = document.getElementById("addscore");
// var submitresult = document.getElementById("submitresult");
var allScores = [];
var viewScore = document.querySelector("#highScoresDiv");
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct"],
        answer : "Both the <head> section and the <body> section are correct"    
    },
    {
        title: "How does a FOR loop start?",
        choices: ["for (i <= 5; i++)","for (i = 0; i <= 5)","for (i = 0; i <= 5; i++)", "for i = 1 to 5"],
        answer : "for (i = 0; i <= 5; i++)"    
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
        answer : "function myFunction()"    
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseover","onclick","onmouseover","onmouseclick"],
        answer : "onclick"    
    },
    {
        title: "How to insert a comment that has more than one line?",
        choices: ["//This comment has more than one line//","/*This comment has more than one line*/","<!--This comment has more than one line-->"],
        answer : "/*This comment has more than one line*/"    
    },
];
btnStart.addEventListener("click", startQuiz);
function startQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions = questions[currentindex]
    
    
        displayQuestion(nextQuestions)
    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set
function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count
         count--;
        }, 1000);

}
function scorePage(a, b) {
    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);
    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}
function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}
function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }
    }else{
        console.log("endgame")
        endgame()
        
    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")
    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);
}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")
 }

viewScore.addEventListener("click", function () {
    location.href = "score.html";
});