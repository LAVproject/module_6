// Исходный массив
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

// Уникальный массив
const uniqArr = [...new Set(arr)];

// Вывод результата в консоль
console.log(uniqArr)