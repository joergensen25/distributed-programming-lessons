class StringStack {
    #elements
    constructor() {
        this.#elements = [];
    }

    push(streng) {
        if (typeof streng !== 'string') {
            throw Error ('Forkert type.');
        }

        this.#elements.push(streng);

    }

    pop() {
        if (this.#elements.length === 0) {
            throw Error ('Listen er tom.')
        }
        return this.#elements.pop();
    }

}

const liste = new StringStack();

liste.push("Ord1");

liste.push("Ord2");



console.log(liste.pop());


console.log(liste);

liste.forEach((element) => console.log(element));

