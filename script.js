let userInput = prompt("Введіть тризначне число:");

if (userInput === null || !/^-?\d{3}$/.test(userInput.trim())) {
    console.log("Помилка: Введіть тризначне число.");
} else {
    userInput = userInput.trim();
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