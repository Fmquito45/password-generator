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


function generatePassword() {
 var charLength = prompt ('How many characters would you like your password to contain?')
 if (isNaN(charLength)){
  alert ("Please insert valid Numeric Number!!!")
 }

} 