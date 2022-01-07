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

const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?", "`", "~"]
var finalArray = [];
var passwordArray = [];
// make arrays out of everything, and then concanonate them based on what the user wants, then random number genorate between the max and min, find the index of that, and spit it out.


function inputLength() {
  inputLength = prompt("Length of password?");

  while (!(inputLength > 7 && inputLength < 129)) {
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
  if (isSpecial === "n" || isSpecial === "N") {
    passCriteria.special = false;
  }
  else {
    passCriteria.special = true;
  }
  return;
}

function isValid() {
  while (passCriteria.lower === false && passCriteria.upper === false && passCriteria.numeric === false && passCriteria.special === false) {
    prompt("Invalid, you must have some sort of characters, hit enter and try again")
    inputLength()
    isLower()
    isUpper()
    isNumeric()
    isSpecial()

  }


}


function buildArray() {
  if (passCriteria.lower === true) {
    finalArray = finalArray.concat(lowerArray);
  }
  if (passCriteria.upper === true) {
    finalArray = finalArray.concat(upperArray);
  }
  if (passCriteria.numeric === true) {
    finalArray = finalArray.concat(numberArray);
  }
  if (passCriteria.special === true) {
    finalArray = finalArray.concat(specialArray);
  }
}

var endNumber = 0;
function findEndNumber() {
  endNumber = finalArray.length;
  return endNumber;
}



function numberBetween0andMax(endNumber) {

  return Math.floor(Math.random() * (endNumber));

}






inputLength()
isLower()
isUpper()
isNumeric()
isSpecial()
isValid()
buildArray()
findEndNumber()
numberBetween0andMax(endNumber)
findCharacter()

function findCharacter() {
  for (let i = 0; i < passCriteria.length; i++) {
    const element = finalArray[(numberBetween0andMax(endNumber))];
    passwordArray.push(element);
  }
}

var finalPassword = passwordArray.join("")



console.log(passCriteria.length);
console.log(passCriteria.lower);
console.log(passCriteria.upper)
console.log(passCriteria.numeric)
console.log(passCriteria.special)
console.log(finalArray)
console.log(finalArray.length)
console.log(endNumber)
console.log(numberBetween0andMax(endNumber))
console.log(passwordArray)
console.log(finalPassword)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





