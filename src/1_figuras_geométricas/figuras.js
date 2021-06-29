//Código del Cuadrado
const perimetroCuadrado = (lado) => lado * 4; //Arrow Function
const areaCuadrado = (lado) => lado ** 2; //Otra forma de elevar un número a un exponente, en este caso 2 (al cuadrado)

//Código del Triángulo
const round = (num) => {
  return Math.round(num * 100) / 100; //Redondeando a 2 decimales
};

const alturaTriangulo = (lado, base) => {
  medidasTriangulo = {
    lado: lado,
    base: base,
    angulo: Math.acos(base / 2 / lado),
    altura: lado * Math.sin(Math.acos(base / 2 / lado)), //Devuelve la altura partiendo del ángulo formado en radianes
  };
  console.log(`Se ha creado un Triángulo con las siguientes medidas:
        lados: ${medidasTriangulo.lado}cm
        base: ${medidasTriangulo.base}cm
        ángulo: ${round(medidasTriangulo.angulo)}rad
        altura: ${round(medidasTriangulo.altura)}cm`);
  return medidasTriangulo;
};

const isIsosceles = (triangulo) => {
  return round(triangulo.altura ** 2) ===
    round(triangulo.lado ** 2 - (triangulo.base / 2) ** 2) //Partiendo del teorema de pitágoras
    ? true
    : false;
};

console.log(
  isIsosceles(alturaTriangulo(6, 4))
    ? "Soy Isosceles :D"
    : "No soy un Triángulo Isosceles :("
);

const perimetroTriangulo = (lado1, lado2, base) => lado * 2 + base;
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
