// Assignment Code
var generateBtn = document.querySelector("#generate");
// const resultEl = document.getElementById("#password");

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol() {
  const symbols = '!@#$%^&*_-+=';
  return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log (randomSymbol());


generateBtn.addEventListener("click", () => {

})

// function generatePassword(passwordLength, initialPassword) {
//   let password = "";
//   for (let i = 0; i < passwordLength, i++);
//   password += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length)
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
