function matrix (num) {
    function returnMatrix(num) {
        for (let i = 0; i < num; i++) {
            let dataArray = [];
            for (let j = 0; j < num; j++) {
                dataArray.push(num)
            }
            console.log(dataArray.join(' '));
        }
    }
    returnMatrix(num);
}

matrix(7);