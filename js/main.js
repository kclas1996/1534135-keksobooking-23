// Результат: целое число из диапазона "от...до"
 function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if((min<=max) && (min,max>=0) && (min % 1 === 0) && (max % 1 === 0)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new Error('В качестве аргументов используются только целые числа');
  }
}

//console.log(getRandomIntInclusive(0,10));


function getRandomFloat(min, max, n) {
  if((min<=max) && (min,max>=0)) {
    return (min + (Math.random() * (max - min))).toFixed(n);
  } else {
    return('Неверный диапазон чисел');
  }
}
console.log(getRandomFloat(1.2353474848, 2.4787559, 3));
 
/*
В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
offer, объект — содержит информацию об объявлении. Состоит из полей:

title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

price, число — стоимость. Случайное целое положительное число.

type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

rooms, число — количество комнат. Случайное целое положительное число.

guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

 */


 const AUTHOR = {
  avatar = 'img/avatars/user/{randomUserNum.png}';
  },


 const OFFER = {
  title: 'Продажа квартиры',
  address: '{{location.lat}}, {{location.lng}}',
  price:getRandomIntInclusive(min,max),
  type:palace,flat,house,bulgalow,hotel,
  rooms:getRandomIntInclusive(min,max),
  guests:getRandomIntInclusive(min,max),
  checkin:12:00,13:00,14:00,
  checkout:12:00,13:00,14:00,
  features:wifi, dishwasher, parking, washer, elevator, conditioner,
  description:"Двухкомнатная квартира 50Км, с евроремонтом",
  photos:randomPhotosIndex,
  },

let location = {
  lat: getRandomFloat(35.65000,35.70000),
  lng: getRandomFloat(139.70000,139.80000),
  },
}


const randomUserNum = _.random(0,10);


const getRandomArrayElement = (elements) => {
    return elements[_.random(0, elements.length - 1)];
  };

 //создание объекта
 const createObject = () => {
     return {
author:getRandomArrayElement(AUTHOR),
offer:getRandomArrayElement(OFFER),
     };
    };
 

//создание 10 объектов
const SIMILAR_OBJECTS_COUNT = 10;
const similarOffers = new Array(SIMILAR_OBJECTS_COUNT).fill(null).map(() => createObject());