// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {
  // prompt for the length of the password
  let passwordLength = prompt("How many characters you would like in your password? \nMust be between 8 - 128 characters.");
  
  let userPassLength = parseInt(passwordLength);
  console.log(userPassLength);

// choose a length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert ("Error. You have broken me!");
      return;
  }
}

// function randomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function randomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function randomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function randomSymbol() {
//   const symbols = '!@#$%^&*_-+=';
//   return symbols [Math.floor(Math.random() * symbols.length)];
// }
// console.log (randomSymbol());


// generateBtn.addEventListener("click", () => {

// })

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
