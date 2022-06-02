function elevator(numOfPeople, capacity) {
    let result = 0;
    result = Math.ceil(Number(numOfPeople) / Number(capacity));
    console.log(Number(result));
}

elevator(15,3);