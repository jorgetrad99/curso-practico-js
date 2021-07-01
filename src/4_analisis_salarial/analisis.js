//Helpers / Utils: No son parte de las reglas del negocio, pero son necesarias

const listArraySalarios = (region) => {
  return region.map(function (personita) {
    return personita.salary;
  });
};

const listSalariosSorted = (region) => {
  const listArraySalariosReg = listArraySalarios(region);
  return listArraySalariosReg.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
  });
};

const salariosColStored = listSalariosSorted(colombia);

const esPar = (numerito) => {
  return numerito % 2 === 0;
};

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

function medianaSalarios(listaSorted) {
  const mitad = parseInt(listaSorted.length / 2);

  if (esPar(listaSorted.length)) {
    const personitaMitad1 = listaSorted[mitad - 1];
    const personitaMitad2 = listaSorted[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

    return mediana;
  } else {
    const personitaMitad = listaSorted[mitad];
    return personitaMitad;
  }
}

const medianaGeneralCol = medianaSalarios(listSalariosSorted(colombia));
console.log(
  `La mediana general de los colombianos es de: ${medianaGeneralCol}`
);

//Mediana del top 10% porciento
const spliceStart = (salariosColStored.length * 90) / 100;
const spliceCount = salariosColStored.length - spliceStart;

const salariosColTop10 = salariosColStored.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(`La mediana del Top 10% de colombianos es de: ${medianaTop10Col}`);
