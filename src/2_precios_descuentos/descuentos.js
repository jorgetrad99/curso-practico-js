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
