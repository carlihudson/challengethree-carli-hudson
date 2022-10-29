var generateBtn = document.querySelector("#generate");

// Strings with the criteria
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890"
var special = "@#$%^&*()";

let passwordChosen =[]
let userAnswers = []


var generatePassword = function() {
  // User chooses length of password

  let pLength = window.prompt("Please select a character amount between 8 and 128");
  if(Number(pLength > 7 && pLength < 129)){
   userChoices(pLength)
  }else{
    alert('Length must be between 8 and 128.')
  }

  while(!Number.isInteger(pLength)) {
    alert('Please select a whole number.')
  }

}

let userChoices = (pLength) => {
  let upperSelection = window.confirm("Would you like uppercase letters?");
  if(upperSelection){
   userAnswers.push(uppercase)
  }
  let lowerSelection = window.confirm("Would you like lowercase letters?");
  if(lowerSelection){
    userAnswers.push(lowercase)
  }
  let numbersSelection = window.confirm("Would you like numbers?");
  if(numbersSelection){
    userAnswers.push(numbers)
  }
  let specialSelection = window.confirm("Would you like special characters?");
  if(specialSelection ){
    userAnswers.push(special)
  }

  console.log(userAnswers)
  if(userAnswers.length === 0){
    alert('we are having a problem')
    return;
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
