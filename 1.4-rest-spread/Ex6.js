console.log('1.4.6:Fusión de objetos')

const objetoDatos = {
    nombre : 'Natalia',
    apellido : 'Rosero',
    id : 1234
}

const objetoInfo = {
    edad : 27,
    nacionalidad : 'Colómbiana'
}

console.log('objeto 1', objetoDatos)
console.log('objeto 2', objetoInfo)

const objetoFusionado = {...objetoDatos, ...objetoInfo}

console.log('objeto 3 fusionado', objetoFusionado)