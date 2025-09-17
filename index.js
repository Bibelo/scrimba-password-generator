const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let generateButton = document.getElementById("generate-button")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function generateRandomChar() {
    let randomChar = characters[Math.floor(Math.random() * characters.length)]
    return randomChar
}

function generatePassword() {
    let tempPassword = ''
    for (let i = 0; i < 15; i++) {
        let letter = generateRandomChar()
        console.log(letter)
        tempPassword += letter
    }
    return tempPassword
}

generatePassword()

generateButton.addEventListener("click", function() {
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
})


