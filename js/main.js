// Результат: целое число из диапазона "от...до"
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if((min<=max) && (min,max>=0)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return('Неверный диапазон чисел');
  }
}

getRandomIntInclusive(1,20);


function getRandomFloat(min, max,) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if((min<=max) && (min,max>=0)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return('Неверный диапазон чисел');
  }
}
getRandomFloat.toFixed((11, 101).toFixed(2));

