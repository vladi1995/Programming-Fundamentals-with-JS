function matchPhoneNumber(arr) {
    let pattern = /(?:\s|^)\+359([ |-])2\1\d{3}\1\d{4}\b/g;
    let matchedPhones = [];
    let matchedPhone = pattern.exec(arr);
  
    while (matchedPhone !== null) {
        matchedPhones.push(matchedPhone[0].trim());
        matchedPhone = pattern.exec(arr);
    }

    console.log(matchedPhones.join(', '));
}

matchPhoneNumber("+359 2 222 2222, +359-2-222-2222");