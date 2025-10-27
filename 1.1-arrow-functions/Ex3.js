console.log('1.3: uso de this');
class Person{
    constructor(name){
        this.name=name;
    }

    greet = ()=>{
        console.log(`Hola ${this.name}`)
    }
}

const userOne = new Person('Natalia');
userOne.greet();

const userTwo = new Person('Pepito');
userTwo.greet();
