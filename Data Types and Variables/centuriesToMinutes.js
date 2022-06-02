function centuriesToMinutes (num) {
    const daysOneYear = 365.2422;
    let numOfYears = num*100;
    let numOfDays = Math.trunc(numOfYears*daysOneYear);
    let numOfHours = numOfDays*24;
    let numOfMinutes = numOfHours*60;
    console.log(`${num} centuries = ${numOfYears} years = ${numOfDays} days = ${numOfHours} hours = ${numOfMinutes} minutes`);
}

centuriesToMinutes(1);