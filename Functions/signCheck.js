function signCheck(num1, num2, num3) {
    //1 - ternary operator
    //console.log((num1*num2*num3) > 0 ? "Positive" : "Negative");

    //arrow functions
    /*
    let product1 = x => (num1*num2*num3);

    if (product1(num1,num2,num3) > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
    */
   
    //without multiply
    let firstNumSign = Math.sign(num1);
    let secondNumSign = Math.sign(num2);
    let thirdNumSign = Math.sign(num3);

    let product = "";
    switch (firstNumSign) {
        case 1:
            switch (secondNumSign) {
                case 1:
                    switch (thirdNumSign) {
                        case 1:
                            product = "Positive";
                            break;
                        case -1:
                            product = "Negative";
                            break;
                    }
                    break;
                case -1:
                    switch (thirdNumSign) {
                        case 1:
                            product = "Negative";
                            break;
                        case -1:
                            product = "Positive";
                            break;
                    }
                    break;
            }
            break;

            case -1:
                switch (secondNumSign) {
                    case 1:
                        switch (thirdNumSign) {
                            case 1:
                                product = "Negative";
                                break;
                            case -1:
                                product = "Positive";
                                break;
                        }
                        break;
                    case -1:
                        switch (thirdNumSign) {
                            case 1:
                                product = "Positive";
                                break;
                            case -1:
                                product = "Negative";
                                break;
                        }
                        break;
                }
                break;
    }
    return product;
}

console.log(signCheck(-6, -12, 15));