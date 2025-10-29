console.log('Level 3')
console.log('1.3.5: Función processString')

function processString(string, callback){
    console.log(`Procesando la cadena: ${string}`)

    const stringEnMayusculas = string.toUpperCase()

    callback(stringEnMayusculas)
}

console.log('Prueba:')

function imprimirTexto(text){
    console.log(`Imprimir texto en mayúsculas: ${text}`)
}

processString('Pienso, luego existo', imprimirTexto)