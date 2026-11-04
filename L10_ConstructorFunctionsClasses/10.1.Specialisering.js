// opgave10.1.js
class Person {
    constructor(navn) { 
        this.navn = navn; 
    }


    /*equals(p) {
        if (!p || p.constructor !== Person) return false;
        return this.navn === p.navn;
    } */


    equals(p) {
        if (p instanceof Person && this.navn == p.navn) {
            return true
        }
        return false;
    }


    toString() { return this.navn; }
}

class Studerende extends Person {
    constructor(navn, id) { 
        super(navn); 
        this.id = id; 
    }

    /* equals(s) {
        if (!s || s.constructor !== Studerende) return false;

        return this.navn === s.navn;
    } */

    equals(s) {
        if (s instanceof Studerende && this.navn == s.navn && this.id == s.id) {
            return true;
        }
        return false;
    } 



    toString() { 
        return super.toString() + ": " + this.id; 
    };
}



class Kat {
    constructor(navn) { 
        this.navn = navn; 
    }

    toString() { 
        return 'Kat: ' + this.navn; 
    };
}

function compare(p1, p2) {
    if (p1.navn < p2.navn) return -1;

    if (p1.navn > p2.navn) return 1;

    return 0;
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let k1 = new Kat("Sofus");
let k2 = new Kat("Meowth");

let liste = [p1, p2, s1, s2, k1, k2];


console.log("Liste før sortering:")
liste.forEach((element) => console.log(element));


console.log("Liste efter sortering:")
liste.sort(compare);
liste.forEach((element) => console.log(element));

