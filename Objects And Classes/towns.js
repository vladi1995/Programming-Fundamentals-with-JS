function towns(arrOfString) {
    class towns {
        constructor (nameOfTown, lattitide, longitude) {
            this.nameOfTown = nameOfTown;
            this.lattitide = Number(lattitide);
            this.longitude = Number(longitude);
        }

        print() {
            console.log(`{ town: '${this.nameOfTown}', latitude: '${(this.lattitide).toFixed(2)}', longitude: '${(this.longitude).toFixed(2)}' }`);
        }
    }

    for (let el of arrOfString) {
        let splitted = el.split(' | ');
        let newTown = new towns (splitted[0], splitted[1], splitted[2]);
        newTown.print();
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);