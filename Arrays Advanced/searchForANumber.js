function search(arr1, arr2) {
    let takenElements = arr2[0];
    let deletedElements = arr2[1];
    let searchedElement = arr2[2];

    let newArr1 = arr1.slice(0,takenElements);
    newArr1.splice(0,deletedElements);
    
    let found = newArr1.filter(el=>el==searchedElement);

    console.log(`Number ${searchedElement} occurs ${found.length} times.`);
}

search([7,1,5,8,2,7], [3,1,5]);