function dayOfWeek(n) {
    let arrDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (n < 1 || n > 7) {
        console.log("Invalid day!");
    } else {
        console.log(arrDays[n-1]);
    }
}

dayOfWeek(3);