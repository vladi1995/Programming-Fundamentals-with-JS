function softUni(arrOfInput) {
    let courses = {};
    arrOfInput.sort((a,b)=>a.length-b.length);
    for (let el of arrOfInput) {
        if (el.includes(':')) {
            let splitted = el.split(': ');
            let [courseName, capacity] = splitted;
            capacity = Number(capacity);
    
            if (courses.hasOwnProperty(courseName)) {
                capacity += Number(courses[courseName].capacity);
            } 
            courses[courseName] = {
                capacity,
                student: {},
                countStudents: 0,
            }
        } else {
            let splittedFirst = el.split(/[\[\]]/g);
            let [userName, creditsCount] = [splittedFirst.shift(), splittedFirst.shift()];
            splittedFirst = splittedFirst.join(' ').trim().split('with email ');
            splittedFirst.shift();
            let splittedSecond = splittedFirst.join(' ').split(' joins ');
            let [email, courseName] = splittedSecond;
            creditsCount = Number(creditsCount);

            if (courses.hasOwnProperty(courseName)) {
                if (courses[courseName].countStudents < courses[courseName].capacity) {
                    courses[courseName].student[userName] = [email, creditsCount];
                    courses[courseName].countStudents += 1;
                }
            }
        }
    }
    let entries = Object.entries(courses).sort((a,b)=>(b[1].countStudents-a[1].countStudents)).forEach(el=>{
        console.log(`${el[0]}: ${el[1].capacity - el[1].countStudents} places left`);
        Object.entries(el[1]).forEach(eachEl=>{
            Object.entries(eachEl[1]).sort((a,b)=>b[1][1]-a[1][1]).forEach(el2=>{
            console.log(`--- ${el2[1][1]}: ${el2[0]}, ${el2[1][0]}`);
            })
        });
    });
}

softUni(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
)