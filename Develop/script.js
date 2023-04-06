// Assignment code here



function generatePassword(){
  let passwordLength = prompt("How long is the password? (between 8 and 128)");
  if (passwordLength < 8 || passwordLength > 128 ){
      return alert("choose a number between 8 and 128");
  } 

  if (passwordLength >= 8 && passwordLength <= 128){
    var uppercaseChars = confirm("uppercase characters?");
    var lowercaseChars = confirm("lowercase characters?");
    var numberChars = confirm("number characters?");
    var specialChars = confirm("special characters?");
  }

  if (uppercaseChars != true && lowercaseChars != true && numberChars != true && specialChars != true){
    return alert("must select at least one character type");
  }

var characters = "";
if (uppercaseChars){
  characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (lowercaseChars){
  characters += "abcdefghijklmnopqrstuvwxyz";
}

if (numberChars){
  characters += "0123456789";
}

if (specialChars){
  characters += "!@#$%^&*()_+";
}

let password = ""
for (let i =0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  password += characters.charAt(randomIndex);
}

return "your password is " + password;



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
