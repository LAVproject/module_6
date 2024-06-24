// Функция проверяет слово на палиндром
function checkPalindrome(word) {
    // Палиндром
    if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
        console.log(`Слово ${word} является палиндромом`)
    }
    // Не палиндром
    else {
        console.log(`Слово ${word} не является палиндромом`)
    }
}

// Пример №1
checkPalindrome('Довод')

// Пример №2
checkPalindrome('Сантимент')