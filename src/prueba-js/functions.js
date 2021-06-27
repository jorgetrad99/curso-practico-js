const name = 'Jorge';
const lastname = 'Trad';
const nickname = 'jorge_trad';

const completeName = (name, lastname) => {
    return `${name} ${lastname}`;
}

console.log("Mi nombre es " + completeName(name, lastname) + ", pero prefiero que me digas " + nickname + ".");