function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = "";
    let reversePassword = "";
    let count = 0;

    for (let i = 1; i < input.length; i++) {
        password = input[index];
        reversePassword = password.split("").reverse().join("");
        count++;
        if (count === 4) {
            if (username === reversePassword) {
                console.log(`User ${username} logged in.`);
                break;
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        } else {
        if (username === reversePassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        }
        index++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);