// Получаем число от пользователя
const number = +prompt("Введите любое число:");

// Создаем пустой массив
const array = [];

// Заполняем массив числами от 0 до введенного числа
for (let i = 0; i <= number; i++) {
    array.push(i);
}

// Выводим массив в консоль
console.log(array);