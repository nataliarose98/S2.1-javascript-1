console.log('1.3.4: Callbacks con arrays ')

function procesarElementos(array, callback){
    console.log(`Procesando el array : [${array.join(', ')}]`)
    for(let i = 0; i < array.length; i++){
        const elemento = array[i]
        callback(elemento)
    }
}

const nombres = [ 'Nerea','Raul', 'Johan', 'Carlos', 'Natalia']
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function nombresEnMayusculas(nombre){
    console.log(nombre.toUpperCase())
}

console.log('Prueba:nombres en mayúculas')
procesarElementos(nombres, nombresEnMayusculas)