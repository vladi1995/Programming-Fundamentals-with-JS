function pyramid (base, increment) {
    let steps = Math.ceil(base/2);
    let numOfFloors = Math.floor(steps*increment);
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (let i = 1; i <= steps; i++) {
        if (i === steps) {
            gold += base*base*increment;
        } else {
        if (i%5 === 0) {
            lapis += (base*4 - 4)*increment;
            stone += ((base-2)*(base-2))*increment;
        } else {
            marble += (base*4 - 4)*increment;
            stone += ((base-2)*(base-2))*increment;
        }
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${numOfFloors}`);
}

pyramid (23,0.5);