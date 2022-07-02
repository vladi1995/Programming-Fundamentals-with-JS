function cats(arrOfCats) {
    class cat {
        constructor (nameOfCat, age) {
            this.name = nameOfCat;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let el of arrOfCats) {
        let splitted = el.split(' ');

        let catName = splitted[0];
        let age = Number(splitted[1]);
 
        let newCat = new cat(catName, age);
        newCat.meow();
    }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);