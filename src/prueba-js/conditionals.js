const suscriptions = [
  {
    suscriptionType: "Free",
    message: "Solo puedes tomar los cursos gratis",
  },
  {
    suscriptionType: "Basic",
    message: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  },
  {
    suscriptionType: "Expert",
    message: "Puedes tomar casi todos los cursos de Platzi durante un año",
  },
  {
    suscriptionType: "Expert+",
    message:
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  },
];

const mySuscription = "Expert+";

const indexOfSuscription = suscriptions.findIndex(
  (suscription) => suscription.suscriptionType === mySuscription
);

indexOfSuscription > -1 //Operador Ternario
  ? console.log(suscriptions[indexOfSuscription].message)
  : console.error("La suscripción a buscar es inválida, no se pudo encontrar");
