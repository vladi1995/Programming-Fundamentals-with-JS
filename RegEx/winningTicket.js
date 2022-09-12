function winningTicket(str) {
    let arrOfTickets = str.split(/[,|\s]+/g);
    let pattern = /([@#$^])\1+/g;
    let patternRight = /([@#$^])\1+/g;
    let countLeft = 0;
    let countRight = 0;
    let symbLeft = '';
    let symbRight = '';

    for (let el of arrOfTickets) {
        if (el.length != 20) {
            console.log("invalid ticket");
        } else {
            let splittedEl = el.split('');
            let leftHalf = splittedEl.slice(0, 10).join('');
            let rightHalf = splittedEl.slice(-10).join('');

            let matchPatternLeft = pattern.exec(leftHalf);
            let matchPatternRight = patternRight.exec(rightHalf);

            countLeft = 0;
            countRight = 0;
            
            while (matchPatternLeft != null) {
                if (matchPatternLeft[0].length >= 6) {
                  if (matchPatternLeft[0].length == 10) {
                    countLeft = 10;
                  } else {
                    countLeft = matchPatternLeft[0].length;
                  }
                  symbLeft = matchPatternLeft[0][0];
                } 
                matchPatternLeft = pattern.exec(leftHalf);
            }
            
            while (matchPatternRight != null) {
                if (matchPatternRight[0].length >= 6) {
                  if (matchPatternRight[0].length == 10) {
                    countRight = 10;
                  } else {
                    countRight = matchPatternRight[0].length;
                  }
                  symbRight = matchPatternRight[0][0];
                } 
                matchPatternRight = patternRight.exec(rightHalf);
            }
            if (countLeft >= 6 && countRight >= 6 && symbLeft === symbRight) {
                if (countLeft == countRight) {
                if (countLeft == 10) {
                    console.log(`ticket "${el}" - 10${symbLeft} Jackpot!`);
                } else {
                    console.log(`ticket "${el}" - ${countLeft}${symbLeft}`);
                }
            } else {
                let minEl = Math.min(countLeft, countRight);
                console.log(`ticket "${el}" - ${minEl}${symbLeft}`);
            }
            } else {
                console.log(`ticket "${el}" - no match`);
            }
        }
    }
}

winningTicket("$$$$$$$$$$@@@@$$$$$$");