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

const printFullName = (student) => {
    console.log(`Nombre Completo: ${student.name} ${student.lastname}`);
}

const printRealMoney = (student) => {
    console.log(`Dinero Real (Dinero Ahorrado - Deuda): $${student.saved_money - student.debt}`);
}

printFullName(student);
printRealMoney(student);