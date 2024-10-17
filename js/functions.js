// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и
//  максимальную длину и возвращает true, если строка меньше или равна указанной длине,
//  и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
//  Примеры использования функции:

const checkingStringLength = (line = '', maximumLength = 1) => line.length <= maximumLength;
// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево

const isPalindrome = (line) => {
  line = line.replaceAll(' ','').toLowerCase();
  let reversedLine = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedLine += string[i];
    return string === reversedLine;
  }
};
