function getRandomInt(max) {
  //get a random number between 0 and [max]
  return Math.floor(Math.random() * Math.floor(max));
}
 
function generatePassword(){
  var includeSpecials = confirm("Click OK if you want SPECIAL CHARACTERS in your password.");
  var includeNumbers = confirm("Click OK if you want NUMERICAL VALUES in your password [0-9]");
  var includeUppers = confirm("Click OK if you want UPPERCASE values in your password.");
  var lengthPrompt = prompt("Length of password? Integer between 8 and 128.");
  var parsedLength = parseInt(lengthPrompt); //attempt to parse the input as an integer
  
  while (isNaN(parsedLength) || parsedLength > 128 || parsedLength < 8){
    //while not numerical value, or outside the range, 
    //keep prompting the user for correction
    var promptAgain = prompt("Invalid number. Choose a whole number between 8 and 128.");
    parsedLength = parseInt(promptAgain);
  }

  var charLists = [
    "abcdefghijklmnopqrstuvwxyz"
  ]
  //start out with an array containing one starting string: lowercase alpha chars. add additional strings to the
  //array based on types of complexity the user wants

  if(includeSpecials)
  	charLists.push("!@#$%^&*=+") //intentional ommission of some less common specials
  if(includeNumbers)
  	charLists.push("0123456789") 
  if(includeUppers)
  	charLists.push(charLists[0].toUpperCase())
  
  var numberOfLists = charLists.length; //number of strings pushed to the array
  var finalPass = ''; 
  var j = 0; //used for iterating over number of lists

  for (var i = 0; i < parsedLength; i++){
    if (j == numberOfLists){
      j = 0; //if we reach the last list, go to the first
    }
    var thisList = charLists[j];
    var thisChar = thisList.charAt(getRandomInt(thisList.length)); //get a random char from the current list
    finalPass += thisChar;
    j++; //next list
  }
  return finalPass;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
