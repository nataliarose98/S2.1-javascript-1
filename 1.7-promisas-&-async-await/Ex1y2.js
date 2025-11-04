console.log('Level 1')
console.log('1.7.1: Creating a Promise')

const miPromesa = new Promise((resolve, reject) => {
    console.log(' La promesa ha empezado.');
    
    setTimeout(() => {
       
        const resultado = 'Hola, mundo';
        console.log(' Promesa resuelta. Resolviendo con:', resultado);
        
        resolve(resultado); 
        
    }, 2000);
})

console.log('1.7.2:Using a Promise')

miPromesa.then((valor) => {

    console.log('.then() ejecutado. El resultado es:', valor);
})

console.log('   (Esperando 2 segundos a que la promesa se resuelva...)');