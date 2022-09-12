function matchDate(arr) {
    let pattern = /\b(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let matchedDate = pattern.exec(arr);
    let matchedDates = [];

    while (matchedDate !== null) {
        let day = matchedDate.groups['day'];
        let month = matchedDate.groups['month'];
        let year = matchedDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        matchedDate = pattern.exec(arr);
    }
}

matchDate("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");