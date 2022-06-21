function manipulation(arrOfStrings) {
    let manipulatedArray = arrOfStrings.splice(0,1).join(' ');
    let manipulatedArrayDiff = manipulatedArray.split(' ');  

    function add(element) {
        manipulatedArrayDiff.push(element);
    }

    function remove (element) {
        manipulatedArrayDiff = manipulatedArrayDiff.filter(i => i != element);
    }

    function removeAt (element) {
        manipulatedArrayDiff.splice(element, 1);
    }

    function insert (element1, element2) {
        manipulatedArrayDiff.splice(element1, 0, element2);
    }

    for (element of arrOfStrings) {
        let newArr = element.split(' ');
        if (newArr[0] == "Add") {
            add(newArr[1]);
        } else if (newArr[0] == "Remove") {    
            remove(newArr[1]);
        } else if (newArr[0] == "RemoveAt") {
            removeAt(newArr[1]);
        } else if (newArr[0] == "Insert") {
            insert(newArr[2], newArr[1]);
        }
    }
    console.log(manipulatedArrayDiff.join(' '));
}

manipulation(['4 19 2 53 6 43', 
     'Add 3',
     'Remove 2',
     'RemoveAt 1',
     'Insert 8 3']);

manipulation(['6 12 2 65 6 42', 
     'Add 8',
     'Remove 12',
     'RemoveAt 3',
     'Insert 6 2']);