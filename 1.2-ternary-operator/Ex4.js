console.log('level 3')
console.log('1.2.4 : OT detro de un bucle')

function parOImpar(numeros){
    
    for(let i = 0; i < numeros.length; i++){
        const num = numeros[i];
        const result = (num % 2 === 0)? 'par' : 'impar';

        console.log (`el número ${num} es ${result}`)
    }
}

console.log('prueba:')
const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
parOImpar(miArray)