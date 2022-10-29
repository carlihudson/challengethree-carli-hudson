// "Generate Password" button
var generateBtn = document.querySelector("#generate");

// Event listener for when user presses generateBtn to call generatePassword function, which initiates criteria prompts
generateBtn.addEventListener("click", writePassword);


// //prompts for user criteria selection
var upperSelect   = confirm("Would you like to include uppercase letters?");
var lowerSelect   = confirm("Would you like to include lowercase letters?");
var numbersSelect = confirm("Would you like to include numbers?");
var specialSelect = confirm("Would you like to include special characters?")


// Strings with the criteria users select from
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890"
var special = "@#$%^&*()";

// string that will be created with content generator can choose from, based on users' choices
var userAnswers = []

//Function for users' password length
var generatePassword = function() {

  // User chooses length of password
  var passwordLength = prompt("How many characters would you like your password to be? Please select a character amount between 8 and 128");
    if(Number(passwordLength < 7 && passwordLength > 129)){
      alert('Length must be between 8 and 128 charatcters.');
      prompt("How many characters would you like your password to be? Please select a character amount between 8 and 128");
  }

// Functions for users to set the characters they want to include in their password
  var userChoices = function() {
    prompt upperSelect
    if(upperSelect){
    userAnswers.push(uppercase)
  }
  
  if(lowerSelect){
    userAnswers.push(lowercase)
  }

  if(numbersSelect){
    userAnswers.push(numbers)
  }

  if(specialSelect){
    userAnswers.push(special)
  }

  console.log(userAnswers);

  // Prompt that shows if user chooses 0 criteria
  if(userAnswers.length === 0){
    alert('You must select at least one character type. Please try again.')
    return;
  }

}
}

// Password generating function
// let passwordChosen =''; 
//   for(var i = 0; passwordLength.valueOf; i++) {
//     var userChoicesIndex = Math.floor(Math.random() * userChoices.length);
//     var selection = userAnswers[userChoicesIndex];
//     password += selection[Math.floor(Math.random() * selection.length)];
// }
// console.log(passwordChosen)
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}