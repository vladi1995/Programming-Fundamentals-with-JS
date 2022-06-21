function distinctArray(arr) {
    let duplicateNumbers = arr.filter((element, index)=>arr.indexOf(element) == index);
    console.log(duplicateNumbers.join(' '));
} 

distinctArray([7,8,9,7,2,3,4,1,2,2,2]);