let userInput = prompt("Введіть тризначне число:").trim();

if (!/^-?\d+$/.test(userInput) || userInput.length < 3 || userInput.length > 4 || (userInput.length === 4 && userInput[0] !== '-')) {
    console.log("Помилка: Введіть тризначне число.");
} else {
    const digits = userInput.replace('-', '').split('');
    const allSame = digits.every(digit => digit === digits[0]);
    const anySame = new Set(digits).size !== digits.length;

    if (allSame) {
        console.log("У числа всі цифри однакові.");
    } else if (anySame) {
        console.log("Число має дві однакові цифри.");
    } else {
        console.log("У числа немає однакових цифр.");
    }
}