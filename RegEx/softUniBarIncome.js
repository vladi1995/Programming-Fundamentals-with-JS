function softUniBar(arrOfStrings) {
    let pattern = /%(?<nameOfPerson>[A-Z][a-z]+)%(?!\|\$\%\.).*<(?<product>\w+)>(?!\|\$\%\.).*\|(?<count>\d+)\|(?!\|\$\%\.).*?(?<price>\d+.*\d*)\$/;
    let sum = 0;
    for (let el of arrOfStrings) {
        if (el == 'end of shift') {
            break;
        } else {
           let currResult = pattern.exec(el);
           if (currResult != null) {
                let result = Number(currResult.groups['count'])*Number(currResult.groups['price']);
                console.log(`${currResult.groups['nameOfPerson']}: ${currResult.groups['product']} - ${result.toFixed(2)}`);
                sum+=result;
            }
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`);
}

softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

);