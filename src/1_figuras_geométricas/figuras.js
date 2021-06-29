//Código del Cuadrado
const perimetroCuadrado = (lado) => lado * 4; //Arrow Function
const areaCuadrado = (lado) => lado ** 2; //Otra forma de elevar un número a un exponente, en este caso 2 (al cuadrado)

//Código del Triángulo
const alturaTriangulo = (lado, base) => {
  const angulo = Math.acos(base / 2 / lado); //Obtiene el ángulo formado en radianes
  return lado * Math.sin(angulo); //Devuelve la altura
};
const perimetroTriangulo = (lado, base) => lado * 2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//Código de los Círculos
const radioCirculo = 8;
const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => radio ** 2 * PI;

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = areaCuadrado(value);
  alert(perimetro);
}
