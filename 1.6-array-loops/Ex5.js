console.log('1.6.5: for-of con break')

let arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8]; 
console.log('Array Original:', arrNumeros);

console.log('Imprimiendo números:');

for (const num of arrNumeros) {

    console.log(num);
    
    if (num === 5) {
        console.log('...¡Número 5 encontrado! Deteniendo el bucle...');
        break; 
    }
}

