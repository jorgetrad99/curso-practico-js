const lista = [1, 2, 3, 1, 2, 3, 7, 4, 2, 2, 2, 1];

const listaCount = {};

lista.map((elemento) => {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});

const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => {
  return elementoA[1] - elementoB[1];
});

console.log(listaArray);

const moda = listaArray[listaArray.length - 1];

//Utilizando Funciones
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 2, 2, 2, 5, 5, 5, 5, 5, 9];

//2: 14
//5: 8

function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

console.log(mode(NUMBERS)); //5
