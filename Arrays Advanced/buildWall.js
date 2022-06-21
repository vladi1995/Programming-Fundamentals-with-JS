function buildWall(arrOfStrings) {
    let arrOfNum = arrOfStrings.map(Number);
    let yardsOfConcrete = 0;
    let arrOfYards = [];
    let arrOfYardsAll = [];
    let maxLength = 0;

    for (let element of arrOfNum) {
        yardsOfConcrete = 0;
        arrOfYards = [];
        while (element < 30) {
            yardsOfConcrete=195;
            element+=1;
            arrOfYards.push(yardsOfConcrete);
        }
        
        if (arrOfYards.length > maxLength) {
            maxLength = arrOfYards.length;
        }

        arrOfYardsAll.push(arrOfYards);

        //console.log(arrOfYards);
    }
    for (element of arrOfYardsAll) {
        for (let i = element.length; i < maxLength; i++) {
            element.push(0);
        }
    }

    let sum = 0;
    let arrOfSums = [];
    
    for (let i = 0; i < maxLength; i++) {
        sum = 0;
        for (let j = 0; j < arrOfYardsAll.length; j++) {
            sum+=arrOfYardsAll[j][i];
        }
        arrOfSums.push(sum);
    }
    console.log(arrOfSums.join(', '));

    let overAllSum = 0;
    for (element of arrOfSums) {
        overAllSum += element;
    }
    console.log(`${overAllSum*1900} pesos`);
}

buildWall([17]);