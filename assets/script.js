// "Generate Password" button
var generateBtn = document.querySelector("#generate");

// Event listener for when user presses generateBtn to call generatePassword function, which initiates criteria prompts
generateBtn.addEventListener("click", writePassword);

// Strings with the criteria users select from
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890"
var special = "~`! @#$%^&*()_-+={[}]|;<,>.?/";

// Array that will be created with content computer can randomly choose from, based on users' choices
var userAnswers = []

//Function for users' password length
function generatePassword() {

  // User chooses length of password
  var passwordLength = prompt("How many characters would you like your password to be? Please select a character amount between 8 and 128");
    while(passwordLength < 8 || passwordLength > 128) {
      alert('Length must be between 8 and 128 charatcters.');
      passwordLength = prompt("How many characters would you like your password to be? Please select a character amount between 8 and 128");
    } 

  // Variables for users to set the characters they want to include in their password
  var upperSelect = confirm("Would you like to include uppercase letters?");
    if(upperSelect){
    userAnswers.push(uppercase)
   } 
  
  var lowerSelect = confirm("Would you like to include lowercase letters?");   
    if(lowerSelect){
    userAnswers.push(lowercase)
  }

  var numbersSelect = confirm("Would you like to include numbers?");
    if(numbersSelect){
    userAnswers.push(numbers)
  }

  var specialSelect = confirm("Would you like to include special characters?");
    if(specialSelect){
    userAnswers.push(special)
  }

  console.log(userAnswers);

  // Prompt that shows if user chooses 0 criteria
  if(userAnswers.length === 0){
    alert('You must select at least one character type. Please try again.');
    generatePassword();
  }

// Password generating function
var password =''; 
  for(var i = 0; i <= passwordLength; i++) {
    var userAnswersIndex = Math.floor(Math.random() * userAnswers.length);
    var selection = userAnswers[userAnswersIndex];
    password += selection[Math.floor(Math.random() * selection.length)];
  } 
  console.log(password)
  return password;


}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}
