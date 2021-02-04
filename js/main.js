// Функцию, которая возвращает случайное целое число из переданного диапазона включительно.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInteger(1, 10);

//Функция для проверки максимальной длины строки.

const getStringLength = function (checkedString, maxLineString) {
  if (checkedString.length <= maxLineString) {
    return true
  } else {
    return false
  }
};

getStringLength(123, 140);
