// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



var randomNumber = 0;
function numberBetween0and9() {

  return Math.floor(Math.random() * 10);

}

console.log(numberBetween0and9());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
