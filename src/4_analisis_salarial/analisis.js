const listArraySalarios = (region) => {
  return region.map(function (personita) {
    return personita.salary;
  });
};

const listSalariosSorted = (listaSalarios) => {
  return listaSalarios.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
  });
};

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

function medianaSalarios(lista) {
  const sortedList = listSalariosSorted(listArraySalarios(lista));
  const mitad = parseInt(sortedList.length / 2);

  if (esPar(sortedList.length)) {
    const personitaMitad1 = sortedList[mitad - 1];
    const personitaMitad2 = sortedList[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

    return mediana;
  } else {
    const personitaMitad = sortedList[mitad];
    return personitaMitad;
  }
}

console.log(`${medianaSalarios(colombia)}`);
