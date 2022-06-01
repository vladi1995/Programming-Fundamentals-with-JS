function vacation (groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (typeOfGroup === "Students") {
                price = 8.45;
            } else if (typeOfGroup === "Business") {
                price = 10.90;
            } else if (typeOfGroup === "Regular") {
                price = 15;
            }
        break;

        case "Saturday":
            if (typeOfGroup === "Students") {
                price = 9.80;
            } else if (typeOfGroup === "Business") {
                price = 15.60;
            } else if (typeOfGroup === "Regular") {
                price = 20;
            }
        break;

        case "Sunday":
            if (typeOfGroup === "Students") {
                price = 10.46;
            } else if (typeOfGroup === "Business") {
                price = 16;
            } else if (typeOfGroup === "Regular") {
                price = 22.50;
            }
        break;
    }

    let totalPrice = groupOfPeople*price;

    if (groupOfPeople >= 30 && typeOfGroup === "Students") {
        totalPrice*=0.85;
    } else if (groupOfPeople >= 100 && typeOfGroup === "Business") {
        totalPrice = (groupOfPeople-10)*price;
    } else if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfGroup === "Regular") {
        totalPrice*=0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}   

vacation (30,"Students","Sunday");
vacation (40,"Regular","Saturday");
vacation (100,"Business","Saturday");