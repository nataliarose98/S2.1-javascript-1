console.log('1.7.4:Using async/await')
const myPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, mundo (resuelto con await)'); 
    }, 2000); 
});

console.log('1. Promesa del Ejercicio 1 lista.');

console.log('2. Definiendo la función asíncrona...');

async function obtenerResultado() {
    
    console.log('3. (Función Async) Ejecutando...');
    console.log('   ...Pausando con "await" (esperando 2 seg)...');
    
    const resultado = await myPromesa;
    
    console.log('5. (Función Async) Promesa resuelta.');
    console.log('   El resultado es:', resultado);
}

obtenerResultado();

console.log('4. Código síncrono (fuera de la función async).');
console.log('   (Este log aparece ANTES del resultado 5, demostrando la asincronía)');