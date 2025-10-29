console.log('1.3.2: Calculadora')

function calculadora(num1, num2, callback){
    console.log(`la calculadora recibe: ${num1} y ${num2} y el resultado es:`)
    return callback(num1, num2)
}

const sumar = (a, b) =>{
    return a + b
}
console.log('con la función de "suma":')
console.log(calculadora(10,5,sumar))
console.log(calculadora(100,234,sumar))
console.log(calculadora(10788,456,sumar))
