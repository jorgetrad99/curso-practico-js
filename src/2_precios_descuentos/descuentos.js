//Descuentos
const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioDescontado = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescontado) / 100;
  return precioConDescuento;
};

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El precio con Descuento es $${precioConDescuento}`;
};

//Cupones
const cuponesDisponibles = [
  ["A523", 25],
  ["B213", 30],
  ["C673", 10],
  ["D328", 50],
];

const mostrarListaCupones = () => {
  cuponesDisponibles.forEach((cupon) => {
    console.log(
      `Este es el cupón ${cupon[0]} y el descuento es de ${cupon[1]}%`
    );
  });
};

console.group("Lista de Cupones Disponibles");
mostrarListaCupones();
console.groupEnd();

const compraProducto1 = {
  precioOriginal: 750,
  cupon: "A352",
};

const compraProducto2 = {
  precioOriginal: 532,
  cupon: "B213",
};

const mostrarCompra = (compra) => {
  console.log(
    `Esta compra será originalmente por un total de $${compra.precioOriginal}, pero cuenta con el cupón ${compra.cupon}... ¿Será válido?`
  );
};

console.group("Compras");
mostrarCompra(compraProducto1);
mostrarCompra(compraProducto2);
console.groupEnd();

const esCuponValido = (compra) => {
  const cupon_encontrado = cuponesDisponibles.find((cupon) => {
    return cupon[0] === compra.cupon;
  });
  return cupon_encontrado != null ? true : false;
};

const findDiscount = (compra) => {
  if (esCuponValido(compra)) {
    const cupon_encontrado = cuponesDisponibles.find((cupon) => {
      return cupon[0] === compra.cupon;
    });
    return cupon_encontrado[1];
  } else {
    return null;
  }
};

const calcularPrecioConCupon = (compra) => {
  esCuponValido(compra)
    ? console.log(
        `El precio con Descuento pasa de ser $${
          compra.precioOriginal
        } a ser $${calcularPrecioConDescuento(
          compra.precioOriginal,
          findDiscount(compra)
        )} con un descuento de ${findDiscount(compra)}`
      )
    : console.log(
        `El cupón no es válido, no se aplicarán descuentos... El precio final es de $${compra.precioOriginal}`
      );
};

console.group("Validación de Compras");
calcularPrecioConCupon(compraProducto1);
calcularPrecioConCupon(compraProducto2);
console.groupEnd();
