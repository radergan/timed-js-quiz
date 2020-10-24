


$("#advance-the-quiz").on("click", function(){
   event.preventDefault();
   $(this).hide();
   beginCountDown(60);
})
  

  for (var i = 0; i < questionAnswerPairs.length;i++){
    var thisOne = questionAnswerPairs[i][1];
    $("#counterproof").html(message);
  }

function beginCountDown(x){
  var secondsleft = x;
  var quizTimer = setInterval(function(){
    //console.log(secondsleft)
    $("#tick-tock-box").html(secondsleft);
    
    if(secondsleft === 0){
        clearInterval(quizTimer);
    }
    secondsleft -= 1;
  }, 1000);
};