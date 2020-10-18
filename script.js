// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// establish/define the characters for each possible option
var passComponents = {
upCase: ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],   
lowCase: ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
nums: ["1", "2", "3","4", "5", "6", "7", "8", "9", "0"],
specChar: ["!", "@", "#", "$", "&", "^", "%", "*", "/"],
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");  
  var password = generatePassword(); 
  
  
  passwordText.value = password;
}
// this function validates that the user Input, and the charOptions are what was selected 
function validateOptions(genPass, charOptions, userInput) {
     if(userInput){
       for (var i = 0; i < charOptions.length; i++) {
      if (genPass.indexOf(charOptions[i]) > -1)
        return true
       }
     return false;
    }
    // if the user did not pick an optiom we the string is valid and we are asking for the return of true
 return true;
}
// this function generates the password based on the set variables and runs a do while loop to continue the random selection
 function generatePassword() {
   // THEN I am presented with a series of prompts for password criteria
  var passLength = parseInt(prompt("Please enter password length between 8 and 128:"));
  // validation the user inputs a number that falls between 8 and 128
  if(!Number.isInteger(passLength)) {
    alert("Please input a number between 8 and 128");
    return "";
  }
  if(passLength < 7 || passLength > 129) {
    alert("Please input a number between 8 and 128");
    return "";
  }
  
  var upperCase = confirm("Would you like to include Uppper Case Letters?");
  var lowerCase = confirm("Would you like to include Lower Case Letters?");
  var numbers = confirm("Would you like to include Numbers?");
  var specialCharacters = confirm ("Would you like  to include Special Charcters");

  var validation = true;

  do{
    var genPass = "";
    var potentials = "";
    // create  for loop set 
    for (var i = 0; i < passLength; i++){ 
      while (potentials == ""){
        // because there are 4 options we are randomizing from 1 to 4 of the user selctions
        var options = Math.floor(Math.random() * 4)
        console.log (options)
        // fpr the selection of upper case we are randomizing the choice
        if (options == 0 && upperCase) 
          potentials = passComponents.upCase[Math.floor(Math.random() * passComponents.upCase.length)];
        // fpr the selection of lower case we are randomizing the choice
        if (options == 1 && lowerCase) 
          potentials = passComponents.lowCase[Math.floor(Math.random() * passComponents.lowCase.length)];
        // for the selection of numbers we are randomizing the choice
        if (options == 2 && numbers)
          potentials = passComponents.nums[Math.floor(Math.random() * passComponents.nums.length)];
        // for the selection of special characters we are randomizing the choice
        if (options == 3 && specialCharacters) 
          potentials = passComponents.specChar[Math.floor(Math.random() * passComponents.specChar.length)];
      }
      genPass += potentials;
      potentials = ""; 
    }
          
  }
  // here we run the validation and only want the loop to continue when the return is false
  while(!validateOptions(genPass, passComponents.upCase, upperCase) && !validateOptions(genPass,passComponents.lowCase,lowerCase) && !validateOptions(genPass, passComponents.num, numbers) && !validateOptions(genPass, passComponents.specChar, specialCharacters))

  return genPass;
    
  }

// // Add event listener to generate button  // WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword); 


