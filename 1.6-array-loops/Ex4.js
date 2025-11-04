console.log('Level 2')
console.log('1.6.4: For-in')

let obj = { 
    nombre: 'Ola', 
    edad: 25, 
    ciudad: 'Barcelona' };
console.log('Objeto Original:', obj);

console.log('Imprimiendo con for...in:');

for (const key in obj) {
    
    const valor = obj[key];

    console.log(`Clave: ${key}, Valor: ${valor}`);
}