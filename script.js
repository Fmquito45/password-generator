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
 var charLength = prompt ("How many characters would you like your password to contain?");
 if (isNaN(charLength) || Number(charLength)<8 || Number(charLength)>128){
  alert ("Please insert valid Numeric characters!!! \nChoose a length of at least 8 characters and no more than 128 character.")
 }

var specicalChars = '!@#$%^&*()=+-[]{};:,./?'
var nums = '0123456789' 
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


var isSpecialChar = confirm ("Click OK to confrim $pecial characters");
var isNumericChar = confirm ("Click OK to confrim #numeric characters");
var isLowerChar = confirm ("Click OK to confrim lowercase characters");
var isUpperChar = confirm ("Click OK to confrim UPPERCASE characters");

if ()
} 