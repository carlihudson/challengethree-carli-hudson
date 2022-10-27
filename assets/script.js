// Assignment Code
var generateBtn = document.querySelector("#generate");

// Object with arrays computer can take from 
// var object = {
//   length: 
//   uppercase: ["ABCDEFGHIJKLMNOPQURSTUVWXYZ"];
//   lowercase: ["abcdefghijklmnopqrstuvwxy"]
//   numbers: 1234567890
//   special: 

// }

// Arrays with the criteria
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = 1234567890
var special = "";

function criteria() {
  window.prompt("Please select a character amount between 8 and 128");
  //some function that they select the character amount
  window.confirm("Would you like uppercase letters?");
  window.confirm("Would you like lowercase letters?");
  window.confirm("Would you like numbers?");
  window.confirm("Would you like special characters?");
}


var createPassword = function() {
  // Initial question of wanting to generate a password
  var start = window.confirm("Would you like to generate a password?");
  
  if(start){
    return(criteria);
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
