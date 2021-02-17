// Функцию, которая возвращает случайное целое число из переданного диапазона включительно.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInteger = function (min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);

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

// Создание массива из 25 сгенерированных объектов
// const setPhotos = [];
//
// //Структура каждого объекта - описание фотографии
// const createPhoto = {
//   id:  '', // число — идентификатор описания.  Это число от 1 до 25. Идентификаторы не должны повторяться.
//   url: '', //строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
//   description: '', // строка — описание фотографии.
//   likes: '', // число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
//   comments: [{Комментарий1}, {Комментарий2}, {Комментарий3}], //список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение
// }

const NAMES = [ //Набор имён для комментаторов
  'Иван',
  'Мария',
  'Виктор',
  'Юлия',
  'Лолита',
  'Анатолий',
  'Артем',
];

const MESSAGES = [ //Для формирования текста комментария
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const SET_PHOTOS_COUNT = 25;
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Описание объекта с комментарием
const createComment = () => {
  return {
    id: getRandomInteger(1, 25), // случайное число. Идентификаторы не должны повторяться.
    avatar: getRandomInteger(1, 6), // случайное число от 1 до 6
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const setPhotos = new Array(SET_PHOTOS_COUNT).fill(null).map(() => createComment());

setPhotos

