console.log('1.4.4: Rest en destructuring de arrays')

const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log('Array Original:', elementos)

const [primero, segundo, ...resto] = elementos;

console.log('Prueba:')

console.log('primero:', primero)
console.log('segundo:', segundo)
console.log('resto:', resto)