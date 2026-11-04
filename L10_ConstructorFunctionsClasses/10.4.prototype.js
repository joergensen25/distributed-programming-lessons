class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    canRun() {

    }
    
}


class Human {
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

Human.prototype.canEarn = function() {
    console.log(this.name + " kan købe.")
}





Animal.prototype.canRun = function() {
    console.log(this.name + " kan løbe.");
}

let animal1 = new Animal("Ulv", 8);

let human1 = new Human("Rasmus", 26, 100000);



console.log(animal1.name);
animal1.canRun();

console.log(human1.name);
human1.canEarn();








