function furniture(arrOfStrings) {
    let nameOfFurniture = [];
    let priceSum = 0;
    for (let el of arrOfStrings) {
        if(el == "Purchase") {
            break;
        }
        let pattern = />>(?<nameOfFurniture>[A-Z]\w+)<<(?<priceOfFurniture>\d+[.]?\d*)!(?<quantity>\d+)\b/g;
        let elementToMatch = pattern.exec(el);
        if (elementToMatch != null) {
            nameOfFurniture.push(elementToMatch.groups['nameOfFurniture']);
            priceSum+=Number(elementToMatch.groups['priceOfFurniture'])*Number(elementToMatch.groups['quantity']);
        }
    }
    console.log('Bought furniture:');
    if (nameOfFurniture.length != 0) {
        console.log(nameOfFurniture.join('\n'));
    }
    console.log(`Total money spend: ${priceSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);