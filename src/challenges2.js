// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    let techsCresc = techs.sort();
    for (let index = 0; index < techsCresc.length; index += 1) {
      let tech = techsCresc[index];
      techsCresc[index] = { tech, name };
    }
    return techsCresc;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let string = array.join('');
  let number = {
    ddd: string.slice(0, 2),
    part1: string.slice(2, 7),
    part2: string.slice(7),
  };
  for (let index = 0; index < array.length; index += 1) {
    let num = new RegExp(array[index], 'g');
    let numRepeat = string.match(num);
    if (numRepeat.length >= 3 || array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${number.ddd}) ${number.part1}-${number.part2}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function check(a, b, c) {
    return a < b + c && a > Math.abs(b - c);
  }

  return (
    check(lineA, lineB, lineC) && check(lineB, lineC, lineA) && check(lineC, lineA, lineB));
}

// Desafio 13
function hydrate(string) {
  let numberList = string.split(' ');
  let cupsOfWater = 0;

  for (let index = 0; index < numberList.length; index += 1) {
    let element = Number(numberList[index]);
    if (element > 0) {
      cupsOfWater += element;
    }
  }
  if (cupsOfWater > 1) {
    return `${cupsOfWater} copos de água`;
  }
  return `${cupsOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
