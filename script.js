// this is recognizing the generate button on the html page
var generateBtn = document.querySelector("#generate");

// this is an event listener to see if the button gets clicked. If it does it executes the write password function
generateBtn.addEventListener("click", writePassword);

//this writes the password to the #password output
function writePassword() {

  //defines the variable password which will be our final product
  var password;

  //this declares the object of criteria that the user inputs. 
  var passCriteria = {
    length: 0,
    lower: true,
    upper: true,
    numeric: true,
    special: true,
  }

  //the const variables are our arrays that determine what chacaters can be used in each array
  const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?", "`", "~"]

  // this array is a combination of the above arrays depending on what the user selects
  var finalArray = [];

  // this array is randomly selected charactes from the above array
  var passwordArray = [];

  //this function allows the user to input a length of the password they want and does not allow values outside of the range.
  function inputLength() {
    inputLength = prompt("How long would you like your password to be? Between 8 and 128 characters");
    while (!(inputLength > 7 && inputLength < 129)) {
      inputLength = prompt("Incorrect length, please try again");
    }
    passCriteria.length = inputLength;
    return;
  }

  //this function asks the user if they want to use lower case letters.
  function isLower() {
    passCriteria.lower = confirm("Do you want to have lower case letters?")
    return;
  }

  //this function asks the user if they want to use upper case letters.
  function isUpper() {
    passCriteria.upper = confirm("Do you want to have upper case letters?");
    return;
  }

  //this function asks the user if they want to use numbers in their password.
  function isNumeric() {
    passCriteria.numeric = confirm("Do you want to have numeric values?");
    return;
  }

  //this function asks the user if they want to use special characters or not.
  function isSpecial() {
    passCriteria.special = confirm("Do you want to have special characters?");
    return;
  }

  //this function checks to make sure that the user had some sort of character input
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

  //this function combines arrays based on what types of characters the user wanted
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

  //this declares the variable endNumber so that we can determine how long our final array is
  var endNumber = 0;
  function findEndNumber() {
    endNumber = finalArray.length;
    return endNumber;
  }

  //this function comes up with a random number between 0 and however long our final array is
  function numberBetween0andMax(endNumber) {
    return Math.floor(Math.random() * (endNumber));
  }

  //this function uses the random number to pick a random character in the final array as many times as the user selected for their password length
  function findCharacter() {
    for (let i = 0; i < passCriteria.length; i++) {
      const element = finalArray[(numberBetween0andMax(endNumber))];
      passwordArray.push(element);
    }
  }

  //this block calls all of the functions in order
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

  //this takes the array and turns it into a string which becomes the password
  var password = passwordArray.join("")

  //this is creating the final alert displaying the password


  var finalAlert = "Your new password is: " + password;

  //this is an alert that shows the user what the password is
  alert(finalAlert)

  //this outputs the password to the text area in the html
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

