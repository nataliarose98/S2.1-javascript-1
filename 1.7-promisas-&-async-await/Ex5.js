console.log('1.7.5:Gestión de errores con async/await');

const promesaQueFalla = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('La promesa ha fallado a propósito.')); 
    }, 2000); 
});

console.log('1. Promesa (que falla) lista.');
console.log('2. Definiendo la función asíncrona modificada...');


async function obtenerResultadoConTryCatch() {
    
    console.log('3. (Función Async) Ejecutando...');
    console.log('   ...Pausando con "await" (2 seg)...');
    
    try {
        const resultado = await promesaQueFalla;
        
        // Si la promesa tuviera éxito, esto se ejecutaría
        console.log('5. (Función Async) Promesa resuelta [TRY].');
        console.log('   El resultado es:', resultado);

    } catch (error) {
        //  promesa rechazada el código salta aquí
        console.error('5. (Función Async) Error capturado [CATCH].');
        console.error('   El error es:', error.message);
    }
}

obtenerResultadoConTryCatch();

console.log('4. Código síncrono (fuera de la función async).');
console.log('   (Esto aparece ANTES del resultado 5)');