function addressBook(arrOfStrings) {
    let result = {};
    arrOfStrings.forEach(el => {
        let [name, address] = el.split(':');
        result[name] = address;
    });
    let entries = Object.entries(result);
    let sortedArr = entries.sort((a,b)=>a[0].localeCompare(b[0]));
    
    for (let el of sortedArr) {
        console.log(el.join(' -> '));
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);