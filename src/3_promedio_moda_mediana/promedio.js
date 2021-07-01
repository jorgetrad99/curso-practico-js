const lista1 = [100, 200, 300, 500];

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
};

console.log(calcularMediaAritmetica(lista1));
