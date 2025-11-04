console.log('Level 3')
console.log('1.6.6: for-of con index')

let noms = ['Anna', 'Bernat', 'Clara'];
console.log('Array Original:', noms);

for (const [index, nom] of noms.entries()) {
    console.log(`Índice: ${index}, Nombre: ${nom}`);
}