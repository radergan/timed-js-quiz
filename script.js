

  
  
var counter = 0;



$(".answer-choice").on("click", function(){
});

  
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

$("#advance-the-quiz").on("click", function(){
  event.preventDefault();
  //$(this).hide();
  beginCountDown(60);
})