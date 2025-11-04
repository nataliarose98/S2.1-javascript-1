console.log('Level 1')
console.log('1.6.1: ForEach')

arrayNombres = ['Anna', 'Bernat', 'Clara', 'Luis', 'Juan']
console.log('Array de Nombres', arrayNombres)

console.log('Imprimiendo con forEach()')
arrayNombres.forEach(nombre => {
    console.log(nombre)
})

console.log('1.6.2:For of')

console.log('Imprimiendo con for of')

for(const nombre of arrayNombres){
    console.log(nombre)
}