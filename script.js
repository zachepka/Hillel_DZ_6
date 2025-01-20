const userInput = prompt("Введіть тризначне число:");

if (userInput === null) {
    console.log("Помилка: Ви відмовилися від введення значення!");
} else {
    const trimmedInput = userInput.trim();

    if (!/^-?\d+$/.test(trimmedInput) || trimmedInput.length < 3 || trimmedInput.length > 4 || (trimmedInput.length === 4 && trimmedInput[0] !== '-') || /^\s+$/.test(trimmedInput)) {
        console.log("Помилка: Введіть тризначне число");
    } else {
        const digits = trimmedInput.replace('-', '').split('');
        const allSame = digits.every(digit => digit === digits[0]);
        const anySame = new Set(digits).size !== digits.length;

        if (allSame) {
            console.log("У числа всі цифри однакові");
        } else if (anySame) {
            console.log("Число має дві однакові цифри");
        } else {
            console.log("У числа немає однакових цифр");
        }
    }
}