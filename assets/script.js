// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copytoclipboard");

//Arrays
var passwordArray = [];
var LC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var NU = ["1","2","3","4","5","6","7","8","9","0"];
var SC = ["!","@","#","$","%","^","&","*","(",")","{","}","|",":","?","<",">","/","=",";","+","-","~"];


//Randomise: The following functions randomise the arrays created above

function getLC()
{
 return LC[Math.floor(Math.random()* LC.length)];
}

function getUC()
{
return UC[Math.floor(Math.random()* UC.length)];
}

function getNU()
{
return NU[Math.floor(Math.random()* NU.length)];
}

function getSC()
{
return SC[Math.floor(Math.random()* SC.length)];
}

//Generate Password Function

function generatePassword()
{
  //Present user with prompt for password length
  //If user enters anything other than the number, it will still take user
  //through the steps but return "undefined" as password.
   var passwordLength = Number(prompt("The password must be between 8 to 128 characters. How many characters would you like?"));
   
   if (passwordLength < 8 || passwordLength > 128)
   {
    alert ("Try again. Password length MUST be between 8 and 128 characters");
    var passwordLength = (prompt("Try again. The password MUST be between 8 to 128 characters. How many characters would you like?"));
   }
  
  //  commented out bcos this 
  // if (passwordLength != Number)
  //  {
  //   alert ("Try again. Password length MUST be between 8 and 128 characters");
  //   var passwordLength = (prompt("Try again. The password MUST be between 8 to 128 characters. How many characters would you like?"));
  //  }

  //Parameters to Include - The user decides the criteria to include
   var useLowerCase = confirm("Click OK to include lowercase letters");
   var useUpperCase = confirm("Click OK to include uppercase letters");
   var useNumbers = confirm("Click OK to include numbers");
   var useSpecial = confirm("Click OK to include special characters");

  // Invalid input prompts the user for input again: User must select at least 1 out of the 4
  while (useLowerCase == false && useUpperCase == false && useNumbers == false && useSpecial == false)
  {
  alert("Please select at least one of the 4 options to include");
  }

//Random functions are called for the criteria selected and this is stored in the passwordArray.

  if (useLowerCase == true)
  {
  passwordArray.push(getLC());
  }
  if (useUpperCase == true)
  {
  passwordArray.push(getUC());
  }
  if (useNumbers == true)
  {
  passwordArray.push(getNU());
  }
  if (useSpecial == true)
  {
  passwordArray.push(getSC());
  }


// Loop runs for the length of the password

var randomPassword = "";
for (var m = 0; m < passwordLength; m++)
  {
    randomPassword = randomPassword + passwordArray[Math.floor(Math.random()* passwordArray.length)];
    var passwordNew = randomPassword.split(',').join("");
  }
    return passwordNew;

}

// Function: Write password to the #password input
function writePassword() 
  {
  var password = generatePassword(); //calls this function and stores it in the password variable
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

// Copy password to clipboard

function copyPassword()
{
  var copyText = document.querySelector("#password");
  copyText.value = password;
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  copyText.remove();
  alert ("Copied the password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to clipboard button

copyBtn.addEventListener("click",copyPassword);