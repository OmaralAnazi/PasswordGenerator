const PASSWORD_LEN = 16
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
                    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
                    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3",
                     "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
                     "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1Element = document.getElementById('password1')
let password2Element = document.getElementById('password2')

function renderPasswords() {
    password1Element.textContent = generateRandomPassword()
    password2Element.textContent = generateRandomPassword()
}

function generateRandomPassword() {
    let password = ""
    for(let i=0; i < PASSWORD_LEN; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        let randomCharacter = characters[randomIndex]
        password += randomCharacter
    }
    return password
}

function copyPassword(option) {
    let copyText = document.getElementById("password"+option);
    navigator.clipboard.writeText(copyText.textContent);
    alert("The password is copied: " + copyText.textContent);
}
