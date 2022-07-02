function schoolRegister(arrOfStrings) {
    let obj = {};
    let arrOfObj = [];
    let broi = 0;
    for (let el of arrOfStrings) {
        let splittedEl = el.split(/[:,]/g);
        let studentName = splittedEl[1].trim();
        let studentGrade = Number(splittedEl[3]);
        let studentAvScore = Number(splittedEl[5]);
        obj = {
            name: studentName,
            grade: studentGrade,
            score: studentAvScore,
        }
        arrOfObj.push(obj);
    }

    let sortedArr = arrOfObj.sort((a, b) => (a.grade - b.grade));

    for (let el of sortedArr) {
        if (el.score > 3) {
            el.grade += 1;
        } else {
            el.grade = 0;
        }
    }
    let filteredArr = sortedArr.filter(el => el.grade > 0);
    let sumScore = 0;
    let arrOfScores = [];
    let students = [];
    let gradesClasses = [];

    for (let i = 0; i < filteredArr.length; i++) {
        sumScore = 0;
        arrOfScores = [];
        students = [];
        for (let j = i; j < filteredArr.length; j++) {
            if (filteredArr[i].grade == filteredArr[j].grade) {
                sumScore += filteredArr[j].score;
                arrOfScores.push(sumScore);
                students.push(filteredArr[j].name);
            } else {
                i = j - 1;
                break;
            }
        }
        
        gradesClasses.push(filteredArr[i].grade);
        for (let i = 0; i < gradesClasses.length; i++) {
            if (gradesClasses[i] == gradesClasses[i + 1]) {
                gradesClasses.pop();
            }
        }
        if (broi < gradesClasses.length) {
            console.log(`${filteredArr[i].grade} Grade`);
            console.log(`List of students: ${students.join(', ')}`);
            console.log(`Average annual score from last year: ${(arrOfScores[arrOfScores.length - 1] / students.length).toFixed(2)}`);
            console.log();
            broi++;
        }
    }
}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    
);