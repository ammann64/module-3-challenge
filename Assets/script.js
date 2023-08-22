// Assignment code here
var passwordLength = 8;
var lowercase = true; var uppercase = true; var numeric = true; var specialChars = true;
var characterTypes = [lowercase, uppercase, numeric, specialChars];
var characterTypeNames = ["lowercase", "uppercase", "numeric", "special"];
var validInput = false;

function generatePassword() {
  var passwordOutput = "";
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
  validInput =  false;
 
  for (var i = 0; i < characterTypes.length; i++)
  {
    var currentType = characterTypeNames[i];
    characterTypes[i] = confirm("Would you like to include " + currentType + " characters?");
    var currentType = characterTypeNames[i];
    console.log(characterTypes);
  }


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
