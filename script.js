var qanda = [
	{	
        question: "JavaScript is supported by:",
        choices: [
            {text: "All major browsers", correct:true},
            {text: "Only Google Chrome", correct:false},
            {text: "Only Internet Explorer", correct:false},
            {text: "Safari, Firefox and Chrome, but not I.E.", correct:false},
        ]
    },
  
	{	
        question: "Which function will not raise a popup in the browser window?:",
        choices: [
            {text: "prompt()", correct:false},
            {text: "alert()", correct:false},
            {text: "report()", correct:true},
            {text: "confirm()", correct:false}
        ]
     },

  	{	
  	    question: "In JavaScript, 'NaN' means:",
		choices: [
    	    {text: "Not available now", correct:false},
            {text: "Nothing available next", correct:false},
			{text: "Not a number", correct:true}
        ]
    },
	{	
  	    question: "What is the correct attribute for referencing an external script like <script ____='foo.js'>?",
		choices: [
    	    {text: "src", correct:true},
            {text: "doc", correct:false},
            {text: "href", correct:false},
			{text: "target", correct:false}
        ]
    }
];
//set the default time to 59 seconds
//on click begin, start the timer
//on clicking an answer, if its wrong, subtract 10 seconds from timer
var counter = 0;
var correctAnswerNumber = -1;
var timeCounter = 59;
var penaltyWhenWrong = 10; //minus 10 pts
$("#penalty-temp").html("Wrong answer:  - " + penaltyWhenWrong + " seconds.");

$("#start-the-quiz").click(function(){
    $(this).hide();
	$("#initial-instructions").hide();
	setTime(timeCounter);
});
	
function setTime(x){
	x = timeCounter;
	x = setInterval(function(){
	
	$("#tick-tock-box").text(timeCounter);
      
	if(timeCounter === 0){
		generateResultScreen();
	}
	timeCounter -= 1;
	}, 1000);
}

$("#list-of-answers").on('click', '.answer-button', function(e) {
    e.stopImmediatePropagation();
    
    if (correctAnswerNumber == $(this).attr("data-qnum")){
        $("#right-or-wrong").html("<div class='alert alert-success'>Correct answer!</div>");
    }
    else{
        $("#right-or-wrong").html("<div class='alert alert-danger'>Wrong answer!</div>");
		timeCounter = timeCounter - penaltyWhenWrong;
		displayPenalty();
    }
	
    if (counter != qanda.length){
        questionsAndAnswers();
		
    }else{;
        generateResultScreen();
    }
});

function displayPenalty (){
	var penaltyBox = $("#penalty-temp");
	penaltyBox.show();
	penaltyBox.fadeOut(3000);
}

function questionsAndAnswers(){
    $("#list-of-answers").html("");
    var currentQuestionTitle = qanda[counter].question;
    var listOfAnswers = qanda[counter].choices;
    var answerContainer = $("#list-of-answers");

    $("#question-title").text(currentQuestionTitle);

    for(var i = 0; i < listOfAnswers.length; i++){
        var thisAnswerText = listOfAnswers[i].text;
        var isThisCorrect = qanda[counter].choices[i].correct;
        if(isThisCorrect === true){
            correctAnswerNumber = i;
        }

        answerContainer.append("<button class='answer-button btn btn-primary' data-qnum='" + i + "'>" + thisAnswerText + "</button>");
    }
    
    counter = counter + 1;
}

function generateResultScreen(){
    $("#tick-tock-box").hide();
    $("#heres-the-choices").hide();
	var quizResults = "<div class='alert alert-warning'>Time has expired. You finished the quiz with a score of " + timeCounter + ".</div>";
	$("#quiz-body").append(quizResults);
	
    var initials = prompt("Enter your initials");
    var score = timeCounter;
    var allScores = JSON.parse(addNewScore(initials, score));

    printScores(allScores);
	
    var endButtons = "<button class='btn btn-primary' onclick='location.reload();'>Try quiz again</button>";
	
    endButtons = endButtons + "<button class='btn btn-primary' onclick='clearScores()'>Clear scores</button>";
    $("#quiz-body").append("<p id='try-again'>" + endButtons + "</p>");
}

function printScores(x){
	var allScores = x;
	var scoreTable = "<table class='table' id='table-of-scores'><thead><tr><td>Initials</td><td>Score</td></tr></thead>";

    for(var i = 0; i < allScores.length; i++){
        var tableRow = "<tr><td>" + allScores[i].initials + "</td><td>" + allScores[i].score + "</td></tr>";
        var scoreTable = scoreTable + tableRow;
    }
    scoreTable = scoreTable + "</table>";
    $("#quiz-body").append(scoreTable);
}

function addNewScore (initials, score) {
    var players = JSON.parse(localStorage.getItem('playerScores')) || [];
    players.push({initials: initials, score: score});
    localStorage.setItem('playerScores', JSON.stringify(players));
    return localStorage.getItem('playerScores');
}

function clearScores(){
    localStorage.clear();
	$("#table-of-scores").html("");
}
