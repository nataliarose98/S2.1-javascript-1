console.log('Level 2')
console.log('1.3.3 : callback con setTimeout ')

function esperarISaludar(nombre, callback){
    console.log(`La función recibe el nombre ${nombre}`)
    console.log('espera dos segundos..')

    setTimeout(()=>{
        callback(nombre)
    }, 2000);
}

function saludar(nombre){
    console.log(`Hola ${nombre}! Bienvenida`)
}

console.log('Prueba:')
esperarISaludar('Natalia', saludar)