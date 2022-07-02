function employees(arrOfString) {
    let newArr = [];
    class person {
        constructor (name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (let el of arrOfString) {
        let personNameLength = el.length;
        let newPerson = new person(el, personNameLength);
        newArr.push(newPerson);
    }

    newArr.forEach(el => {
        console.log(`Name: ${el.name} -- Personal Number: ${el.personalNumber}`);
    })
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );