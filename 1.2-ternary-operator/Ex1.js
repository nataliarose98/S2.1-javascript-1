console.log('Ternary Operator')
console.log('level 1')

const puedeConducir = (edad) => edad >= 18 ? 'Puedes Conducir' : 'No Puedes Conducir';

console.log(puedeConducir(16));
console.log(puedeConducir(18));
console.log(puedeConducir(30));
console.log(puedeConducir(11));