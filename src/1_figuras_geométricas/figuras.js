//Código del Cuadrado
//console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4; //Arrow Function
const areaCuadrado = (lado) => lado ** 2; //Otra forma de elevar un número a un exponente, en este caso 2 (al cuadrado)

//console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

const alturaTriangulo = (lado, base) => {
  const angulo = Math.acos(base / 2 / lado); //Obtiene el ángulo formado en radianes
  return lado * Math.sin(angulo); //Devuelve la altura
};
const perimetroTriangulo = (lado, base) => lado * 2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

//Código de los Círculos
console.group("Círculos");

const radioCirculo = 8;
const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => radio ** 2 * PI;

console.groupEnd();
