function makeADict(jsonArr) {
    let arrOfObj = [];
    let obj = {};
    for (let el of jsonArr) {
        let parsedEl = JSON.parse(el);
        for (let [key, value] of Object.entries(parsedEl)) {
            let term = key;
            let description = value;
            obj[term] = description;
        }
    }

    for (let [key, value] of Object.entries(obj)) {
        arrOfObj.push({key, value});
    }
    
    let sortedArr = arrOfObj.sort((a,b)=>(a.key).localeCompare(b.key));
    sortedArr.forEach(el=>{
        console.log(`Term: ${el.key} => Definition: ${el.value}`);
    })
}

makeADict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    


);