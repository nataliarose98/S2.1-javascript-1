console.log('Leven 1')
console.log('1.3.1 : Callback Básico')

function procesar(numero, callback){
    console.log(`La función "procesar" recibe el ${numero}`);

    callback(numero)
}

console.log('prueba:')
function duplicar(num){
    console.log(`el doble de ${num} es ${num * 2}`)
}

console.log('ej: uso con la función "duplicar"')
procesar(3, duplicar);