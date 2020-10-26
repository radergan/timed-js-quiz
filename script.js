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
];

var counter = 0;
var correctAnswerNumber = -1;

function generateSomeStuff(){
    
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
            console.log(correctAnswerNumber);
        }

        answerContainer.append("<button class='answer-button btn btn-primary' data-qnum='" + i + "'>" + thisAnswerText + "</button>");
    }
    
    counter = counter + 1;
}


$("#list-of-answers").on('click', '.answer-button', function(e) {
    e.stopImmediatePropagation();
    
    if (correctAnswerNumber == $(this).attr("data-qnum")){
        console.log(correctAnswerNumber);
        console.log("right");
        $("#right-or-wrong").html("<div class='alert alert-success'>Correct answer!</div>");
    }
    else{
        console.log("wrong");
        $("#right-or-wrong").html("<div class='alert alert-danger'>Wrong answer!</div>");
    }

    if (counter != qanda.length){
        generateSomeStuff();
    }

});
/*
function generateResultScreen(){
    alert('time up!');
}
*/
$("#start-the-quiz").click(function(){
    $(this).hide();
    var secondsLeft = 59;
    var quizTimer = setInterval(function(){

    $("#tick-tock-box").text(secondsLeft);
      
    if(secondsLeft === 0){
        clearInterval(quizTimer);
        generateResultScreen();
    }
    secondsLeft -= 1;
    }, 1000);
});