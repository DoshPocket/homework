var generateBtn = document.querySelector("#generate");

// Enter password to the #password input field
function writePassword() {
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
  // set variables for all char types and user's choices of which chars to include in final pass
  let userPassChars = [];
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
  let lowerChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
  let numberChar = "0123456789" .split ("");
  let symbolChar = "*&^%$#@!?><{}" .split("");
  
  // confirms user's inclusion of lower case chars
  let userLowerChar = confirm("Would you like lowercase letters in your password?");
      if(userLowerChar === true) {
          for (let i = 0; i < lowerChar.length; i++) {
              userPassChars.push(lowerChar[i]);
          }
      }
  // confirms user's inclusion of upper case chars
  let userUpperChar = confirm("Would you like uppercase letters in your password?");
      if (userUpperChar === true) {
          for (let i = 0; i < upperChar.length; i++) {
              userPassChars.push(upperChar[i]);
          }
      }
  // confirms user's inclusion of number chars
  let userNumberChar = confirm("Would you like numbers in your password?");
      if (userNumberChar === true) {
          for (let i = 0; i < numberChar.length; i++) {
              userPassChars.push(numberChar[i]);
          }
      }
  // confirms user's inclusion of special chars    
  let userSymbolChar = confirm("Would you like special characters in your password?");
      if (userSymbolChar === true) {
          for (let i = 0; i < symbolChar.length; i++) {
              userPassChars.push(symbolChar[i]);
          }
      }
      if (userLowerChar === false, userUpperChar === false, userNumberChar === false, userSymbolChar === false) {
        alert ("Error. You have broken me!");
        return;   
      }
// generate the random password based on user criteria
let randomPassword = "";
for (let i = 0; i < userPassLength; i++) {
    userPassChars[
        Math.floor(Math.random() * userPassChars.length)];
    randomPassword +=
       userPassChars[
           Math.floor(Math.random() * userPassChars.length)
       ];
   }
return randomPassword;
}
// prompts begin and password generated upon generate button click
generateBtn.addEventListener("click", writePassword);
