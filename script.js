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

//sets prompt to accept valid number length to continue with function
function generatePassword() {
 var charLength = prompt ("How many characters would you like your password to contain?");
 if (isNaN(charLength) || Number(charLength)<8 || Number(charLength)>128){
  return alert ("Please insert valid Numeric characters!!! \nChoose a length of at least 8 characters and no more than 128 character.")
 } 
// multiple variables set with their assigned characters
var specialChars = '!@#$%^&*()=+-[]{};:,./?'
var nums = '0123456789' 
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//variables to confirm selected characters
var isSpecialChar = confirm ("Click OK to confrim $pecial characters");
var isNumericChar = confirm ("Click OK to confrim #numeric characters");
var isLowerChar = confirm ("Click OK to confrim lowercase characters");
var isUpperChar = confirm ("Click OK to confrim UPPERCASE characters");

//sets function to add selected characters into var characters
if (isSpecialChar || isNumericChar || isLowerChar || isUpperChar){
  var characters = ''
  if (isSpecialChar){
    characters+=specialChars
  }
  if (isNumericChar){
    characters+=nums
  }
  if (isLowerChar){
    characters+=lowercaseChars
  }
  if (isUpperChar){
    characters+=uppercaseChars
  }
  var result =''
  let counter = 0;
    while (counter < Number(charLength)) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    return result;
} 
//if no character group is selected, alert indicates to select at least one.
  else {
  alert ("Select at least one character type!")
  return ''
}
} 