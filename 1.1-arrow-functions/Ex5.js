console.log('level 3')
console.log('1.5: setTimeout')

const showMessage = () =>{
    console.log('3 seconds have passed')
}

setTimeout(showMessage, 3000)

console.log('This message appears immediately.')