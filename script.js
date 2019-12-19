// var userName = document.getElementById("username")
// var userScore = document.getElementById("userscore")
// var timeRemaining = document.getElementById("timeremaining")

var startBtn = document.getElementById("start")
var questionQ = document.getElementById("question")
var buttons = document.getElementById("answer-btns")
var nextBtn = document.getElementById("next")
var correctAnswer = 0
var myQuestions = [
    {
        question: "Which country is the most populous black nation?",
        choices: ["Ethiopia", "South Africa", "Egypt", "Nigeria"],
        Answer: "Nigeria"
    },
    {
        question:"Which River is the longest River in Africa?",
        choices: ["Benue", "Nile", "Congo", "Niger"],
        Answer: "Nile"
    },
    {
        question:"How many countries are in Africa?",
        choices: ["54", "36", "22", "20"],
        Answer: "54"
    },
    {
        question:"Which city is the most populated city in Africa?",
        choices: ["Cairo", "Lagos", "Dodoma", "Adis Ababa"],
        Answer: "Lagos"
    },
    {
        question:"Which African Country was never colonized?",
        choices: ["Nigeria", "Ethiopia", "Tanzania", "Congo"],
        Answer: "Ethiopia"
    }
]
function startGame (){
    document.getElementById("start").style.display = "none"
    buildQuiz()
}
startBtn.addEventListener("click", startGame)

// questionQ.textcontent(myQuestions[0].question[0])
// console.log(myQuestions.question)

function buildQuiz(){
    var questionDiv = document.createElement("div");
    questionDiv.textContent = (myQuestions[0].question);
    questionQ.appendChild(questionDiv);
    var choices1 = ["Ethiopia", "South Africa", "Egypt", "Nigeria"];
    var answer1 = choices1[3]
    console.log(answer1)
    for (var i = 0; i < choices1.length; i++){
        // console.log(myQuestions[i]);
        var optionsBtn = document.createElement("button");
        optionsBtn.textContent = (choices1[i])         
        optionsBtn.setAttribute("data-correct", choices1[3])
        optionsBtn.onclick = choices1[3]
        buttons.appendChild(optionsBtn);  
        console.log(choices1[3])
    }
    
    // optionsBtn.addEventListener("click", optionsBtn)
    // console.log("click")
}



function showResult(){}












// for (var i = 0; i < 4; i++){
//     console.log(myQuestions[i]);
//     var optionsBtn = document.createElement("button");
//     optionsBtn.textContent = (myQuestions[0].choices[i])
//     buttons.appendChild(optionsBtn);
// }


 //we want to dynamically create buttons and every time append it to the page
//  var choices = ['1','2','3','4'];
//  var $body = document.querySelector('body');
//  for (var i = 0; i< choices.length; i++) {
//      var $btn = document.createElement('button'); // make a button element
//      $btn.textContent = choices[i];
//      $btn.setAttribute('data-correct', choices[i]);
//      $btn.onclick = paul;
//      $body.appendChild($btn)
//      console.log($btn)
//  }


// userName = ""
// name = prompt("Please enter your name")
// name.push(userName)





