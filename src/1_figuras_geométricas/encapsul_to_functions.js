//Código del Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
const perimetroCuadrado = (lado) => lado * 4; //Arrow Function
const areaCuadrado = (lado) => lado ** 2; //Otra forma de elevar un número a un exponente, en este caso 2 (al cuadrado)

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del Cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El área del Cuadrado es: " + areaCuadrado + "cm2");
console.log(`Los lados del cuadrado miden 6cm`);
console.log(`Calculando el perímetro del cuadrado: ${perimetroCuadrado(6)}cm`);
console.log(`Calculando el área del cuadrado: ${areaCuadrado(6)}cm^2`);

console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = (lado, base) => {
  const angulo = Math.acos(base / 2 / lado); //Obtiene el ángulo formado en radianes
  return lado * Math.sin(angulo); //Devuelve la altura
};
const perimetroTriangulo = (lado, base) => lado * 2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(`Los lados del triángulo miden 6cm, 6cm y 4cm de base`);
console.log(`Calculando la altura del Triángulo: ${alturaTriangulo(6, 4)}cm`);
console.log(
  "Los lados del triángulo miden:" +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"`Calculando el perímetro del Triángulo: ${perimetroTriangulo(6, 4)}cm`
);
console.log(
  `Calculando el área del Triángulo: ${areaTriangulo(
    6,
    alturaTriangulo(6, 4)
  )}cm`
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del Triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//Código del Triángulo
//Código de los Círculos
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const radioCirculo = 8;
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm2");
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => radio ** 2 * PI;

//Área
const areaCirculo = radioCirculo ** 2 * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");
console.log(`El radio del Círculo es de ${radioCirculo}cm`);
console.log(
  `Calculando el diámetro del Círculo: ${diametroCirculo(radioCirculo)}cm`
);
console.log(
  `Calculando el perímetro del Círculo: ${perimetroCirculo(radioCirculo)}cm`
);
console.log(`Calculando el área del Círculo: ${areaCirculo(radioCirculo)}cm^2`);

console.groupEnd();
