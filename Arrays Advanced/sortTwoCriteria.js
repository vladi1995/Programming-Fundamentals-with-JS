function sortTwoCriteria(arr) {
    function sorted(arr) {
        let sortedLengths = arr.sort((a,b)=>a.length-b.length || a.localeCompare(b));
        console.log(sortedLengths.join('\n'));
    }
    sorted(arr);
}
//sortTwoCriteria(['alpha', 'beta', 'gamma']);
sortTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//sortTwoCriteria(['test', 'Deny', 'omen', 'Default']);