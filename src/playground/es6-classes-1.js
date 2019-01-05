
// Car
// make
// model
// vin

class Person {
     // if u dont have name u can use || to set up a default
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.` 
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undefined'){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        //! change the boolean valor
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`; 
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        if(this.homeLocation){
            return `Hi. I am ${this.name}. I'm visting from ${this.homeLocation}`;
        }else{
            return `Hi. I am ${this.name}.`;
        }
    }
}

//traveler -> person
// add support for homeLocation

const me = new Traveler('Cerci Lucas', 18, 'Inferno');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());