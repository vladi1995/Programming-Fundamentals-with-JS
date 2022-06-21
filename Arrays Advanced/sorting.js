function sorting(arrNum) {
    function sortab (arr) {
        let sortedArrayAb = arr.sort((a,b)=>a-b);
        return sortedArrayAb;
    }

    function sortba (arr) {
        let sortedArrayAb = arr.sort((a,b)=>b-a);
        return sortedArrayAb;
    }

    function result(arr) {
        let resultArr = [];
        let slicedba = sortba(arrNum).slice(0,Math.ceil(arr.length/2));
        let slicedab = sortab(arrNum).slice(0,arr.length/2);

        for (let i = 0; i < arr.length/2; i++) {
            resultArr.push(slicedba[i]);
            resultArr.push(slicedab[i]);
        }
        console.log(resultArr.join(' '));
    }
    result(arrNum);
}

sorting([34,2,32,45,690,6,32,7,19,47]);