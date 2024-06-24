// Исходный объект
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

// Новый объект
const arrValues = [];

// Перебираем ключи объекта
for (const key in obj) {
    // Проверяем, является ли значение массивом
    // Массив
    if (Array.isArray(obj[key])) {
        // Добавляем все элементы массива в arrValues
        arrValues.push(...obj[key]);
    }
    // Не массив
    else {
        // Добавляем значение в arrValues
        arrValues.push(obj[key]);
    }
}

// Выводим результат в консоль
console.log(arrValues);
