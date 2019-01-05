
// Car
// make
// model
// vin

class Person {
     // if u dont have name u can use || to set up a default
    constructor(name = 'Anonymous', age = '0'){
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.` 
    }
}

const me = new Person('Cerci Lucas', '20');
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());