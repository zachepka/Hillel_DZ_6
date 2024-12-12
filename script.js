let userInput = prompt("Введіть тризначне число:").trim();

if (!/^-?\d{3}$/.test(userInput)) {
    console.log("Помилка: Введіть тризначне число.");
} else {
    const digits = userInput.replace('-', '');
    const allSame = digits[0] === digits[1] && digits[1] === digits[2];
    const anySame = new Set(digits).size !== digits.length;
    
    if (allSame) {
        console.log("У числа всі цифри однакові.");
    } else if (anySame) {
        console.log("Число має дві однакові цифри.");
    } else {
        console.log("У числа немає однакових цифр.");
    }
}