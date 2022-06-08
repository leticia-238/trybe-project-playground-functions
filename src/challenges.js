// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let firstItem = arrayDeStrings[0];
  let lastIndex = arrayDeStrings.length - 1;
  let lastItem = arrayDeStrings[lastIndex];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    if (num > array[0]) {
      array[0] = num;
      count = 1;
    } else if (num === array[0]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(cat1 - mouse);
  let d2 = Math.abs(cat2 - mouse);
  if (d1 > d2) {
    return 'cat2';
  } else if (d1 < d2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  function checkNum(num) {
    if (num % 15 === 0) {
      return 'fizzBuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  }
  for (let i = 0; i < array.length; i += 1) {
    array[i] = checkNum(array[i]);
  }
  return array;
}

// Desafio 9
function encode(decodeText) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let codeText = decodeText;
  for (let i = 1; i <= 5; i += 1) {
    let code = new RegExp(letters[i - 1], 'g');
    codeText = codeText.replace(code, i);
  }
  return codeText;
}

function decode(codeText) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let decodeText = codeText;
  for (let i = 1; i <= 5; i += 1) {
    let code = new RegExp(i, 'g');
    decodeText = decodeText.replace(code, letters[i - 1]);
  }
  return decodeText;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
