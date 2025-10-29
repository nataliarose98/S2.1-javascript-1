console.log('Level 1')
console.log('1.4.1: Spread en arrays')

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

console.log('Array 1:', array1)
console.log('Array 2:', array2)

const array3 = [...array1, ...array2]

console.log('Array 3 combinado:', array3)