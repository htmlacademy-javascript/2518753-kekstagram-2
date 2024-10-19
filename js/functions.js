// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и
//  максимальную длину и возвращает true, если строка меньше или равна указанной длине,
//  и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
//  Примеры использования функции:


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const isPalindrome = (line) => {
=======
const isPalindrome = (line = '') => {
>>>>>>> 7eab7f9 (выполняет задание 3)
  line = line.replaceAll(' ', '').toLowerCase();
  let reversedLine = '';
  for (let i = line.length - 1; i >= 0; i--) {
    reversedLine += line[i];
  }
  return line === reversedLine;
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99b0d9e (исправляет 2ую задачу)
=======
<<<<<<< HEAD
>>>>>>> 7eab7f9 (выполняет задание 3)

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};
// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

const extractDigitsToNumber = (inputString) => {
  const digits = inputString.match(/\d+/g);
=======
// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

function extractDigitsToNumber (inputString) {
  const digits = inputString.math(/\d+/g);
>>>>>>> 7ecf576 (выполняет задание 3)
  if (digits) {
    return parseInt(digits.join(''),10);
  } else {
    return NaN;
  }
<<<<<<< HEAD
};
=======
}
<<<<<<< HEAD
=======
>>>>>>> bb4d79b (исправляет 2ую задачу)
<<<<<<< HEAD
>>>>>>> 99b0d9e (исправляет 2ую задачу)
=======
=======
>>>>>>> 7ecf576 (выполняет задание 3)
>>>>>>> 7eab7f9 (выполняет задание 3)
=======
>>>>>>> 528ec13 (вносит изменения)
