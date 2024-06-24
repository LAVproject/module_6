// Размер поля для игры «Крестики-нолики»
const fieldSize = 3;

// Перебираем ряды
for (let row = 0; row < fieldSize; row++) {
    // Строка, которую будем выводить
    let line = '';

    // Перебираем столбцы
    for (let col = 0; col < fieldSize; col++) {
        // Определяем, какой символ ставить: 'x' или 'o'
        const symbol = (row + col) % 2 === 0 ? 'x' : 'o';
        // Добавляем символ в строку
        line += symbol + ' ';
    }

    // Выводим строку в консоль
    console.log(line);
}