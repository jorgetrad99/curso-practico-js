const fruits = [ 'Apple', 'Banana', 'Strawberry', 'Orange', 'Avocado' ];

const student = {
    name: 'Jorge',
    lastname: 'Trad',
    platzi_user_name: 'jorge_trad',
    age: 21,
    email: 'jorgeT@example.com',
    adult: true,
    saved_money: 1500,
    debt: 400
}

const printFirstElement = (array) => {
    console.log(`El primer elemento del array es: 
${array[0]}`);
}

const printEveryElement = (array) => {
    console.log("Estos son todos los elementos del array:")
    array.forEach(element => {
        console.log(element);
    });
}

const printAttributeValues = (object) => {
    let array = Object.values(object);
    console.log("Estos son todos los elementos del Objeto convertido en array:")
    array.forEach(element => {
        console.log(element);
    });
}

printFirstElement(fruits);
console.log("\n");
printEveryElement(fruits);
console.log("\n");
printAttributeValues(student);
