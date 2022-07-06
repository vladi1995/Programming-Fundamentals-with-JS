function phoneBook(arrOfString) {
    let result = {};
    for (let el of arrOfString) {
        let [name, phone] = el.split(' ');
        result[name] = phone;
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)