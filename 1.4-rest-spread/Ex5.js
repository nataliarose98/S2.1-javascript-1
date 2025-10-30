console.log('Level 3')
console.log('1.4.5: spread en funciones')

function describirPersona(nombre, edad, ciudad){
    console.log(`Hola! mi nombre es: ${nombre}`)
    console.log(`tengo ${edad} años`)
    console.log(`y vivo en ${ciudad}`)
}

const arrayDatos= ['Natalia', 27, 'Barcelona']
console.log('Array de datos', arrayDatos)

describirPersona(...arrayDatos)