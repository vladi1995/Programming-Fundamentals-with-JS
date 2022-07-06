function schoolGrades(arrOfStudents) {
    let result = new Map();

    for (let el of arrOfStudents) {
        let splitted = el.split(' ');
        let nameOfStudent = splitted.shift();
        let mappedSplitted = splitted.map(Number);
        
        if (result.has(nameOfStudent)) {
            let currentSum = result.get(nameOfStudent);
            for (let elOfSum of currentSum) {
                mappedSplitted.push(elOfSum);
            }
        } 

        result.set(nameOfStudent, mappedSplitted);  
    }

    let arrOfMap = Array.from(result).sort((a,b) => a[0].localeCompare(b[0]));
    let sum = 0;

    for (let el of arrOfMap) {
        let name = el.shift();
        let grades = el.shift();
        sum = grades.reduce((prev, newSum)=>prev+newSum,0);
        console.log(`${name}: ${(sum/(grades.length)).toFixed(2)}`);
    }
}


schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);