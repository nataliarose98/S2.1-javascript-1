console.log('level 2');
console.log('1.4: printNumbers');

function printNumbers(numbers){
    const printNumber = (num) => {
        console.log(`Number:${num}`);
    }

    for (let i= 0; i < numbers.length; i++){
        printNumber(numbers[i])
    }
}

const arrayNumbers= [1,2,3,4,5,6,7,8,9]
console.log(arrayNumbers)
printNumbers(arrayNumbers)