function loadingBar(percentOfLoading) {
    function resultLoadingBar (percent) {
        const percentSign = "%";
        const dotSign = ".";
        let resultFirstRow = 
        percent !== 100 ?
        `${percent}% [${percentSign.repeat(percent/10)}${dotSign.repeat((100-percent)/10)}]`
        : `${percent}% Complete!`
        let secondRow = percent !== 100 ? 'Still loading...' : `[${percentSign.repeat(percent/10)}]`;
        
        console.log(resultFirstRow);
        console.log(secondRow);
    }

    resultLoadingBar(percentOfLoading);
}

loadingBar(30);