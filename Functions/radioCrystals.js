function radioCrystals(arrNum) {
    function result(arrNum) {
    let targetThickness = Number(arrNum[0]);
    let newArrThickness = [];

    for (let i = 1; i < arrNum.length; i++) {
        newArrThickness.push(Number(arrNum[i]));
    }
    
    for (currentCrystal of newArrThickness) {
        let currPosition = currentCrystal;
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;
        let isLap = 0;

        while (currPosition > targetThickness) {
            if (currPosition / 4 >= targetThickness) {
                currPosition /= 4;
                cut++;
            } else if (currPosition * 0.80 >= targetThickness) {
                if (cut && !isLap) {
                    currPosition = Math.floor(currPosition);
                    isLap = 1;
                } 
                currPosition = currPosition*0.80;
                lap++;
            } else if (currPosition - 20 >= targetThickness) {
                if (cut || lap) {
                    currPosition = Math.floor(currPosition);
                }
                currPosition -= 20;
                grind++;
            } else if (currPosition -2 >= targetThickness) {
                if (cut || lap) {
                    currPosition = Math.floor(currPosition);
                } 
                currPosition -= 2;
                etch++;
            } else if ((currPosition - 2 == targetThickness - 1) && xRay <= 1) {
                if (cut || lap) {
                    currPosition = Math.floor(currPosition);
                } 
                currPosition -= 2;
                etch++;
                currPosition += 1;
                xRay++;
            } else {
                currPosition = Math.floor(currPosition);
            }
        }
        console.log(`Processing chunk ${currentCrystal} microns`);

        if (currPosition == targetThickness - 1) {
            console.log(`X-ray x1`);
        }
        if (cut) {
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`);
        } 
        if (lap) {
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
        }
        if (grind) {
            console.log(`Grind x${grind}`);
            console.log(`Transporting and washing`);
        } 
        if (etch) {
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
        }
        if (xRay) {
            console.log(`X-ray x${xRay}`);
        }
        console.log(`Finished crystal ${targetThickness} microns`);
    }
   }
   result(arrNum);
}

radioCrystals([10,9]);