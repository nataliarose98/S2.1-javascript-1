console.log('Encontrar máximo (a, b, c)')

function encontrarMaximo( a, b, c){
    const max = a > b 
        ? (a > c ? a : c) 
        :(b > c ? b : c);

    return max;
}

console.log('Pruebas:')

console.log(encontrarMaximo(5,7,8))
console.log(encontrarMaximo(6,6,8))
console.log(encontrarMaximo(0,17,-78))