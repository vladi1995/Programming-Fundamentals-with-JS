function orders(typeOfOrder, quantity) {
    let price = 0;
    switch (typeOfOrder) {
        case "coffee":
            price = 1.50;
            break;
        case "water":
            price = 1.00;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2.00;
            break;
    }
    let totalPrice = (price*quantity).toFixed(2);
    return totalPrice;
}

console.log(orders("coffee",2));