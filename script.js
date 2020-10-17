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
nums: ["1", "2", "3","4", "5", "6", "7", "8", "9", "0"],
specChar: ["!", "@", "#", "$", "&", "^", "%", "*", "/"],
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

 }

 function generatePassword() {
   // THEN I am presented with a series of prompts for password criteria
  var passLength = prompt("Please enter password length between 8 and 128:", "enter passLength");
  var upperCase = confirm("Would you like to include Uppper Case Letters?");
  var lowerCase = confirm("Would you like to include Lower Case Letters?");
  var numbers = confirm("Would you like to include Numbers?");
  var specialCharacters = confirm ("Would you like  to include Special Charcters");
  var genPass = "";

  // create  for loop set 
  for (var i = 0; i < passLength; i++){ 
      // because there are 4 options we are randomizing from 1 to 4 of the user selctions
      var options = Math.floor(Math.random() * 4)
      // fpr the selection of upper case we are randomizing the choice
      if (options == 0) 
        genPass += passComponents.upCase[Math.floor(Math.random() * passComponents.upCase.length-1)];
      // fpr the selection of lower case we are randomizing the choice
      if (options == 1) 
        genPass += passComponents.upCase[Math.floor(Math.random() * passComponents.upCase.length-1)].toLowerCase();
      // for the selection of numbers we are randomizing the choice
      if (options == 2)
        genPass += passComponents.nums[Math.floor(Math.random() * passComponents.nums.length-1)];
      // for the selection of special characters we are randomizing the choice
      if (options == 3)
        genPass += passComponents.specChar[Math.floor(Math.random() * passComponents.specChar.length-1)];

   
    }
    



    


}




 

// // Add event listener to generate button  // WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   var tag = document.createElement(tagName);
//   tag.textContent = "This was made via prompts. It's a " + tagName;
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");
// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
//     document.body.appendChild(secondTag);
//   }
// }


// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   var tag = document.createElement(tagName);
//   tag.textContent = "This was made via prompts. It's a " + tagName;
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");
// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
//     document.body.appendChild(secondTag);
//   }
// }