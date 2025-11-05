console.log('1.7.3: Promise with reject ')

function verificarSaludo(input) {
    return new Promise((resolve, reject) => {
        
        console.log(`Iniciando promesa con input: "${input}"`);
        
        
        setTimeout(() => {
            if (input === 'Hola') {
                
                console.log('...Input correcto. Promesa resuelta.');
                resolve('¡Éxito! El saludo es correcto.');
            } else {
                
                console.log('...Input incorrecto. Promesa rechazada.');
               
                reject(new Error('¡Error! El input no fue "Hola".'));
            }
        }, 2000); 
    });
}

console.log('pruebas del ejercicio 1.7.3:')

console.log('Probando el caso de Éxito ("Hola") ---');
verificarSaludo('Hola')
    .then((mensaje) => {
        
        console.log('Resultado (then):', mensaje);
    })
    .catch((error) => {
        
        console.error('Resultado (catch):', error.message);
    });


console.log(' Probando el caso de Fracaso ("Adiós") ---');
verificarSaludo('Adiós')
    .then((mensaje) => {
        console.log('Resultado (then):', mensaje);
    })
    .catch((error) => {
        console.error('Resultado (catch):', error.message);
    });

console.log('(Esperando 2 segundos a que se resuelvan ambas promesas...)')