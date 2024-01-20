const UPPER_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const LOWER_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBER_CHARACTERS = '0123456789'.split('');
const SPECIAL_CHARACTERS = "~`!@#$%^&*()_-+={[}]|:;<>,.?/".split('');

const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const passwordLengthInput = document.getElementById('password-length');
const numberToggler = document.getElementById('number-toggle');
const specialCharToggler = document.getElementById('special-char-toggle');
const generatorBtn = document.getElementById('generator-btn');
const settingsPopupWindow = document.getElementById('settings-popup');

generatorBtn.addEventListener('click', renderPasswords);
passwordLengthInput.addEventListener('keydown', e => e.preventDefault()); // Preventing user to type the length by the keyboard to avoid invalid lengths for the password
document.getElementById('setting-button').addEventListener('click', toggleSettingsWindow);
document.getElementById('close-btn').addEventListener('click', toggleSettingsWindow);

function toggleSettingsWindow() {
    settingsPopupWindow.classList.toggle('hidden');
}

function getAllowedCharacters() {
    let allowedCharacters = [...UPPER_CHARACTERS, ...LOWER_CHARACTERS];
    
    if (numberToggler.checked) 
        allowedCharacters.push(...NUMBER_CHARACTERS);
    if (specialCharToggler.checked)
        allowedCharacters.push(...SPECIAL_CHARACTERS);

    return allowedCharacters;
}

function generateRandomPassword() {
    const characters = getAllowedCharacters();
    const passwordLength = Number(passwordLengthInput.value);
    return Array.from({ length: passwordLength }, () => getRandomElement(characters))
                .join('');
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function copyPassword(option) {
    let copyText = document.getElementById('password' + option);
    navigator.clipboard.writeText(copyText.textContent);
    showNotificationMessage('Password Copied Successfully');
}

function showNotificationMessage(message) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Make the notification visible by modifying the style
    setTimeout(() => {
        notification.style.top = '15px';
        notification.style.opacity = '1'; // Fade in
    }, 0);
    
    // Hide the notification after 2 seconds and then remove it from the DOM
    setTimeout(() => {
        notification.style.top = '-100px';
        notification.style.opacity = '0'; // Fade out
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}

function renderPasswords() {
    password1Element.textContent = generateRandomPassword();
    password2Element.textContent = generateRandomPassword();
}

renderPasswords();