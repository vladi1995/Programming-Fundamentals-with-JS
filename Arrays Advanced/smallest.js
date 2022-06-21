function smallest(arr) {
    function sorting(arr2) {
        return arr2.sort((a,b)=>a-b);
    }
    let newArr = sorting(arr).slice(0,2).join(' ');
    return newArr;
}

console.log(smallest([3,0,10,4,7,3]));