function santasSecretHelper(arrOfInputs) {
    let key = Number(arrOfInputs.shift());
    let command = arrOfInputs.shift();
    let pattern = /@(?<kidName>[A-Za-z]+)[^@\-!:>]{1,}!(?<goodBad>[N|G])!/;

    while (command != 'end') {
        let resultWord = command.split('').map(x=>{
           return String.fromCharCode(x.charCodeAt(0) - key);
        })
        let newWord = resultWord.join('');
        let match = pattern.exec(newWord);
        if (match != null) {
            if (match.groups.goodBad == 'G') {
                console.log(match.groups.kidName);
            }
        }
        command = arrOfInputs.shift();
    }
}

santasSecretHelper(['3',
'N}eideidmk$(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']


);