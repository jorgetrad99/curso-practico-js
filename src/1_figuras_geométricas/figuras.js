//Código del Cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4; //Arrow Function
const areaCuadrado = (lado) => lado ** 2; //Otra forma de elevar un número a un exponente, en este caso 2 (al cuadrado)

console.log(`Los lados del cuadrado miden 6cm`);
console.log(`Calculando el perímetro del cuadrado: ${perimetroCuadrado(6)}cm`);
console.log(`Calculando el área del cuadrado: ${areaCuadrado(6)}cm^2`);

console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

const alturaTriangulo = (lado, base) => {
  const angulo = Math.acos(base / 2 / lado); //Obtiene el ángulo formado en radianes
  return lado * Math.sin(angulo); //Devuelve la altura
};
const perimetroTriangulo = (lado, base) => lado * 2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(`Los lados del triángulo miden 6cm, 6cm y 4cm de base`);
console.log(`Calculando la altura del Triángulo: ${alturaTriangulo(6, 4)}cm`);
console.log(
  `Calculando el perímetro del Triángulo: ${perimetroTriangulo(6, 4)}cm`
);
console.log(
  `Calculando el área del Triángulo: ${areaTriangulo(
    6,
    alturaTriangulo(6, 4)
  )}cm`
);

console.groupEnd();

//Código de los Círculos
console.group("Círculos");

const radioCirculo = 8;
const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => radio ** 2 * PI;

console.log(`El radio del Círculo es de ${radioCirculo}cm`);
console.log(
  `Calculando el diámetro del Círculo: ${diametroCirculo(radioCirculo)}cm`
);
console.log(
  `Calculando el perímetro del Círculo: ${perimetroCirculo(radioCirculo)}cm`
);
console.log(`Calculando el área del Círculo: ${areaCirculo(radioCirculo)}cm^2`);

console.groupEnd();
