class Person {
    #gruppe

    constructor(navn) { 
        this.navn = navn; 
        this.#gruppe = null;
    }

    get gruppe() {
        return this.#gruppe;
    }

    set gruppe(nyGruppe) {
        if (this.#gruppe === nyGruppe) {
            return;
        }

        const gammelGruppe = this.#gruppe;
        this.#gruppe = nyGruppe;

        if (gammelGruppe !== null) {
            gammelGruppe.removePerson(this);
        }

        if (nyGruppe !== null) {
            nyGruppe.addPerson(this);
        }
    }

    toString() {
        return this.navn;
    }


}


class Gruppe {
    #personer
    
    constructor(id, titel) {
        this.id = id;
        this.titel = titel;
        this.#personer = [];
    }

    get personer() {
        return [... this.#personer];
    }

    addPerson(person) {
        
        if (!this.#personer.includes(person)) {
            this.#personer.push(person);
            person.gruppe = this;
            
        }
    }

    removePerson(person) {

        const index = this.#personer.indexOf(person);

        if (index !== -1) {
            this.#personer.splice(index, 1);
            person.gruppe = null;
        }
        
    }

    toString() {
        return this.titel;
    }

}


let gruppe1 = new Gruppe(1, "Gruppe A");

let gruppe2 = new Gruppe(2, "Gruppe B");

let gruppe3 = new Gruppe(3, "Gruppe C");

let rasmus = new Person("Rasmus");

gruppe1.addPerson(rasmus);

console.log(rasmus.gruppe.titel);


console.log(gruppe1.personer)

