const lista1 = [10000, 300, 200, 500, 40000000];
const lista2 = [550, 100, 1300, 50, 700, 720];

const mitadLista = (lista) => {
  return parseInt(lista.length / 2);
};

const ordenarLista = (lista) => {
  let numbers = lista;
  console.log(`Esta es la lista original => [${numbers}]`);
  numbers.sort((a, b) => a - b);
  console.log(`Esta es la lista ya ordenada => [${numbers}]`);
};

const esPar = (numerosLista) => {
  return numerosLista % 2 === 0 ? true : false;
};

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
};

const calcularMediana = (lista) => {
  let mediana;
  ordenarLista(lista);
  if (esPar(lista.length)) {
    console.log("La lista contiene un número par de elementos");
    const elemento1 = lista[mitadLista(lista) - 1];
    const elemento2 = lista[mitadLista(lista)];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    console.log("La lista contiene un número impar de elementos");
    mediana = lista[mitadLista(lista)];
  }
  console.log(`La mediana de tu lista es: ${mediana}`);
};

console.group("Lista1");
calcularMediana(lista1);
console.groupEnd();
console.group("Lista2");
calcularMediana(lista2);
console.groupEnd();
