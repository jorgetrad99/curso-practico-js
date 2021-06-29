//Código del Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del Cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El área del Cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden:" +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del Triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//Código del Triángulo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm2");

//Área
const areaCirculo = radioCirculo ** 2 * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();
