console.log('Level 3')
console.log('1.7.6: Promise all');

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('...Promesa 1 (2s).');
        resolve('Resultado de la promesa 1 (2s)');
    }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('...Promesa 2 (3s).');
        resolve('Resultado de la promesa 2 (3s)');
    }, 3000);
});




console.log('Llamando a Promise.all (esperar 3 segundos)...');

const arrayDePromesas = [promesa1, promesa2];

Promise.all(arrayDePromesas)
    .then((resultados) => {
        console.log('Promise.all completado! (Ambas terminaron).');
        console.log('Resultados (array):', resultados);
        
        console.log('Resultado 1:', resultados[0]); 
        console.log('Resultado 2:', resultados[1]); 
    })
    .catch((error) => {
        // si alguna de las promesas falla
        console.error('Una de las promesas falló:', error.message);
    });