const precioOriginal = 120;
const descuento = 18;

const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioDescontado = 100 - descuento;
  const precioConDescuento =
    (precioOriginal * porcentajePrecioDescontado) / 100;

  return precioConDescuento;
};

/* console.log({
  precioOriginal,
  descuento,
  porcentajePrecioDescontado,
  precioConDescuento,
}); */

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  /* console.log({
    priceValue,
    discountValue,
  }); */

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El precio con Descuento es $${precioConDescuento}`;
};
