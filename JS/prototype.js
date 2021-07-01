// function Student(){
//     this.name = "John";
//     this.gender = 'M';
// }

// Student.prototype.age = 15;

// var st1 = new Student();
// st1.age = 15;
// console.log(st1.age, st1.name, st1.gender)

// var st2 = new Student();
// st2.age = 20;
// console.log(st2.age, st2.name, st2.gender)

// Inherit

let dragon = {
    name:'Tanya',
    fire:true,
    fight(){
        return 9;
    },
    sing(){
        if(this.fire)
            return `I am ${this.name}, the breather of fire`
    }
}

let lizard = {
    name:'Kiki',
    fight(){
        return 1;
    }
}


//borrow the sing function for the lizard object
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

lizard.__proto__ = dragon;
console.log(lizard.sing())
console.log(lizard.name)
console.log(lizard.fire)
console.log(lizard.fight())

console.log(dragon.isPrototypeOf(lizard))
console.log(lizard.isPrototypeOf(dragon))
