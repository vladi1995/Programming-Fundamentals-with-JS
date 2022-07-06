function meetings(arrOfStrings) {
    let result = {};
    for (let el of arrOfStrings) {
        let [day, name] = el.split(' ');
        if (!result.hasOwnProperty(day)) {
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)