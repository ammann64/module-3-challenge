// Assignment code here
var passwordLength = 8;
var lowercase = true; var uppercase = true; var numeric = true; var special= true;
var characterTypes = [lowercase, uppercase, numeric, special];
var characterTypeNames = ["lowercase", "uppercase", "numeric", "special"];
var validInput = false;
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "1234567890";
var specialChars = "!@#$%^&*()_+-=`.,?/";
var characterListTypes = [lowerChars, upperChars, numericChars, specialChars];

function generatePassword() {
  var passwordOutput = "";
  var allowedChars = "";
  /*Prompt the user for the password length between 8 and 128. If none is specified the program should generate a random length.*/
  if (confirm("Specify the password length?")) {
    while (!validInput)
    {
      
      passwordLength = prompt("Input a whole number between 8 and 128: ");
      if (passwordLength % 1 != 0)
      {
        alert("Please enter whole number");
      }
      else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a length of at least 8 and no more than 128!");
      }
      else if (passwordLength >= 8 && passwordLength <= 128) {
        validInput = true;
      }
    }
  }
  else {
    passwordLength = Math.floor((Math.random() * 128) + 8);
    validInput = true;
  }
  console.log(passwordLength);

  /*Set the validation boolean back to false just in case.*/
  validInput =  false;

  /*Ask the user what types of characters they would like to include, and store each in a boolean variable in an array. The prompt will use a matching array of strings to display the 
  prompt the user for confirmation for the corresponding boolean variable.*/
  for (var i = 0; i < characterTypes.length; i++)
  {
    var typeSelected = false;
    var currentType = characterTypeNames[i];
    characterTypes[i] = confirm("Would you like to include " + currentType + " characters?");
    if (characterTypes[i])
    {
      allowedChars +=  characterListTypes[i];
      typeSelected = true;
    }
  }
  /*If no type is selected all types will be allowed. */
  if (!typeSelected)
  {
    allowedChars = lowerChars + upperChars + numeric + specialChars;
    alert("No types selected! Allowing all types.")
  }
  /*Outputs some info to the log for debugging and testing purposes */
  console.log(characterTypes);
  console.log("All of the allowed characters are " + allowedChars);
  console.log("Length of the allowed characters string is " + allowedChars.length);

  /*Iterates up until the password length adding a random character from the allowed characters to the designated output. */
  for (var a = 0; a < passwordLength; a++)
  {
    randomCharacterIndex = Math.floor(Math.random() * allowedChars.length);
    passwordOutput += allowedChars[randomCharacterIndex];
  }
  
  console.log("The length of the password is " + passwordOutput.length);
  return passwordOutput;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
