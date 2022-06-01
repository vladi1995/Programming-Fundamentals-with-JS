function blackFlag(input) {
    let [dayOfPlunder, dailyPlunder, expectedPlunder] = [Number(input[0]), Number(input[1]), Number(input[2])];
    let resultPlunder = 0;
    let day = 1;

    function addPlunder(dailyPlunder) {
        return dailyPlunder*0.5;
    }

    function reducePlunder(resultPlunder) {
        return resultPlunder*=0.7;
    }

    while (day <= dayOfPlunder) {
        resultPlunder += dailyPlunder;
        if (day%3 == 0) {
            resultPlunder += addPlunder(dailyPlunder);
        }
        if (day%5 == 0) {
            resultPlunder = reducePlunder(resultPlunder);
        }
        day++;
    }
    (resultPlunder >= expectedPlunder) ? console.log(`Ahoy! ${resultPlunder.toFixed(2)} plunder gained.`) : console.log(`Collected only ${((resultPlunder/expectedPlunder)*100).toFixed(2)}% of the plunder.`);
}

blackFlag((["10",
"20",
"380"])
);