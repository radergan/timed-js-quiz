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
        question: "JavaScript is:",
        choices: [
            {text: "Single-threaded", correct:true},
            {text: "Multi-threaded", correct:false},
            {text: "Neither single nor multi-threaded", correct:false}
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
var correctAnswer = 0;

function generateSomeStuff(){
    
    $("#list-of-answers").html("");
    var currentQuestionTitle = qanda[counter].question;
    var listOfAnswers = qanda[counter].choices;
    var answerContainer = $("#list-of-answers");
    var correctAnswerNumber;

    $("#question-title").text(currentQuestionTitle);

    for(var i = 0; i < listOfAnswers.length; i++){
        var thisAnswerText = listOfAnswers[i].text;
        var isThisCorrect = qanda[counter].choices[i].correct;
        if(isThisCorrect){
            correctAnswerNumber = i;
        }

        answerContainer.append("<button class='answer-button' data-qnum='" + i + "'>" + thisAnswerText + "</button>");
    }
    
    correctAnswer = correctAnswerNumber;
    counter = counter + 1;
}


$("#list-of-answers").on('click', '.answer-button', function(e) {
    e.stopImmediatePropagation();
    
    if (counter != qanda.length){
        generateSomeStuff();
    }
    if (correctAnswer == $(this).attr("data-qnum")){
        console.log('yes');
    }
    else{
        console.log('no')
    }

});

/*
function generateResultScreen(){
    alert('time up!');
}

function beginCountDown(x){
    var secondsLeft = x;
    var quizTimer = setInterval(function(){

    $("#tick-tock-box").text(secondsLeft);
      
    if(secondsLeft === 0){
        clearInterval(quizTimer);
        generateResultScreen();
    }
    secondsLeft -= 1;
    console.log(secondsLeft);
    }, 100);
};
*/