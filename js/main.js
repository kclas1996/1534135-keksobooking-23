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

//console.log(getRandomIntInclusive(1,2));


function getRandomFloat(min, max, n) {
  if((min<=max) && (min,max>=0)) {
    return (min + (Math.random() * (max - min))).toFixed(n);
  } else {
    return('Неверный диапазон чисел');
  }
}
console.log(getRandomFloat(1.2353474848, 2.4787559, 3));
 

