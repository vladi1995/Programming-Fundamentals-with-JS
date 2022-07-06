/*
function comments(arrOfInputs) {
    let objOfArticles = {};
    let listOfUsers = [];
    let splitted = [];

    for (let el of arrOfInputs) {
        if (el.includes('user') && el.split(' ').length == 2) {
            splitted = el.split(' ');
            splitted.shift();
            let userName = splitted.join(' ');
            listOfUsers.push(userName);
        } else if (el.includes('article')) {
            splitted = el.split(' ');
            splitted.shift();
            let articleName = splitted.join(' ');
            objOfArticles[articleName] = {
                user: {},
                counter: 0,
            };
        } else {
            splitted = el.split(' posts on ');
            let userName = splitted.shift().trim();
            let newSplit = splitted.join(' ').split(/[:,]/g);
            let [articleName, title, comment] = newSplit;
            counter = 0;

            if (objOfArticles.hasOwnProperty(articleName)) {
                if (listOfUsers.includes(userName)) {
                if (userName == 'user') {
                    objOfArticles[articleName].user[userName] = {
                        title: title.trim(),
                        comment: comment.trim(),
                    }
                }
                if (!objOfArticles[articleName].hasOwnProperty(userName)) {

                    objOfArticles[articleName].user[userName] = {
                        title: title.trim(),
                        comment: comment.trim(),
                    }
                } 
                objOfArticles[articleName].counter += 1;
            }
        }
        }
    }
    let entries = Object.entries(objOfArticles).sort((a, b) => (b[1].counter - a[1].counter)).forEach(el => {
        console.log(`Comments on ${el[0]}`);
        Object.values(el[1]).forEach(eachEl => {
            Object.entries(eachEl).sort((a, b) => a[0].localeCompare(b[0])).forEach(eachUser => {
                console.log(`--- From user ${eachUser[0]}: ${eachUser[1].title} - ${eachUser[1].comment}`);
            });
        })
    });
    console.log(objOfArticles);
}
*/
function comments(arrOfInputs) {
    let users = [];
    let articles = [];
    let comments = {};

    for (let el of arrOfInputs) {
        if (el.startsWith('user ')) {
            let user = el.split(' ')[1];
            users.push(user);
        } else if (el.startsWith('article ')) {
            let article = el.split(' ')[1];
            articles.push(article);
        } else {
            let splitted = el.split(' posts on ');
            let userName = splitted.shift().trim();
            let newSplit = splitted.join(' ').split(/[:,]/g);
            let [articleName, title, comment] = newSplit;
            
            if (users.includes(userName) && articles.includes(articleName)) {
                if (!comments.hasOwnProperty(articleName)) {
                    comments[articleName] = [];
                }
                comments[articleName].push({userName, title, comment});
            }
        }
    }
    let entries = Object.entries(comments).sort((a,b)=>b[1].length-a[1].length).forEach(el=>{
        console.log(`Comments on ${el[0]}`);
        let comm = comments[el[0]].sort((a,b)=>a.userName.localeCompare(b.userName));
        for (let el3 of comm) {
            console.log(`--- From user ${el3.userName}: ${el3.title.trim()} - ${el3.comment.trim()}`);
        }
    });
}
comments(['user aUser123', 
'someUser posts on someArticle: NoTitle, stupidComment', 
'article Books', 
'article Movies', 
'article Shopping', 
'user someUser', 
'user uSeR4', 
'user lastUser', 
'uSeR4 posts on Books: I like books, I do really like them', 
'uSeR4 posts on Books: I like books, I do really like them12', 
'uSeR4 posts on Books: I like books, I do really like them123', 
'uSeR4 posts on Movies: I also like movies, I really do', 
'someUser posts on Shopping: title, I go shopping every day', 
'someUser posts on Movies: Like, I also like movies very much'
]);