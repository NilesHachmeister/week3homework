// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passCriteria = {
  length: 0,
  lower: true,
  upper: true,
  numeric: true,
  special: true,
}


var inputLength;
function getNumber() {
  inputLength = prompt("Length of password?");
  while (inputLength < 7 || inputLength > 129) {
    inputLength = prompt("Incorrect length, please try again");
  }
  passCriteria.length = inputLength;
  return;
}


function isLower() {
  isLower = prompt("Do you want to have lower case letters? 'Y' for yes, 'N' for no");
  while (isLower != "y" && isLower != "Y" && isLower != "N" && isLower != "n") {
    isLower = prompt("Incorrect response, please try again. Do you want to have lower case letters? 'Y' for yes, 'N' for no ");
  }
  if (isLower === "n" || isLower === "N") {
    passCriteria.lower = false;
  }
  else {
    passCriteria.lower = true;
  }
  return;
}

function isUpper() {
  isUpper = prompt("Do you want to have upper case letters? 'Y' for yes, 'N' for no");
  while (isUpper != "y" && isUpper != "Y" && isUpper != "N" && isUpper != "n") {
    isUpper = prompt("Incorrect response, please try again. Do you want to have upper case letters? 'Y' for yes, 'N' for no ");
  }
  if (isUpper === "n" || isUpper === "N") {
    passCriteria.upper = false;
  }
  else {
    passCriteria.upper = true;
  }
  return;
}

function isNumeric() {
  isNumeric = prompt("Do you want to have numeric values? 'Y' for yes, 'N' for no");
  while (isNumeric != "y" && isNumeric != "Y" && isNumeric != "N" && isNumeric != "n") {
    isNumeric = prompt("Incorrect response, please try again. Do you want to have numeric values? 'Y' for yes, 'N' for no ");
  }
  if (isNumeric === "n" || isNumeric === "N") {
    passCriteria.numeric = false;
  }
  else {
    passCriteria.numeric = true;
  }
  return;
}

function isSpecial() {
  isSpecial = prompt("Do you want to have special characters? 'Y' for yes, 'N' for no");
  while (isSpecial != "y" && isSpecial != "Y" && isSpecial != "N" && isSpecial != "n") {
    isSpecial = prompt("Incorrect response, please try again. Do you want to have special characters? 'Y' for yes, 'N' for no ");
  }
  if (isUpper === "n" || isUpper === "N") {
    passCriteria.special = false;
  }
  else {
    passCriteria.special = true;
  }
  return;
}


getNumber()
isLower()
isUpper()
isNumeric()
isSpecial()

console.log(numberBetween0and9());
console.log(passCriteria.length);
console.log(passCriteria.lower);
console.log(passCriteria.upper)
console.log(passCriteria.numeric)
console.log(passCriteria.special)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var randomNumber = 0;
function numberBetween0and9() {

  return Math.floor(Math.random() * 10);

}


