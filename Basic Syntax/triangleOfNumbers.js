function triangleOfNumbers(num) {
    let print = "";
    for (let rows = 1; rows <= num; rows++) {
        print = "";
        for (let cols = 1; cols <= rows; cols++) {
            print += rows + " ";
        }
        console.log(print);
    }
}

triangleOfNumbers(6);