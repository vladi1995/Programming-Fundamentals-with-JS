function bookShelf(arrOfInputs) {
    let shelves = {};
    let arrOfGenres = [];

    for (let el of arrOfInputs) {
        if (el.includes('->')) {
            let splitted = el.split(' -> ');
            let [shelfId, genre] = splitted;
            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = {
                    genre,
                    books: {},
                    bookCount: 0,
                }
                arrOfGenres.push(genre);
                arrOfGenres.push(shelfId)
            }
        } else {
            let splitted = el.split(/[:,]/g);
            let [title, author, genre] = splitted;
            author = author.trim();
            genre = genre.trim();

            if (arrOfGenres.includes(genre)) {
                let genreIdIndex = (arrOfGenres.indexOf(genre)+1).toString();
                let genreId = arrOfGenres[genreIdIndex];
                shelves[genreId].books[title] = author;
            }
        }
    }
    let countOfBooks = 0;
    let entries = Object.entries(shelves);
    for (let [key, value] of entries) {
        countOfBooks = 0;
        Object.values(value.books).forEach(el=>{
            countOfBooks++;
        });
        shelves[key].bookCount = countOfBooks;
    }

    let objEntries = Object.entries(shelves).sort((a,b)=>b[1].bookCount-a[1].bookCount);
    for (let [key, value] of objEntries) {
        console.log(`${key} ${value.genre}: ${value.bookCount}`);
        Object.entries(value.books).sort((a,b)=>a[0].localeCompare(b[0])).forEach(el=>{
            console.log(`--> ${el[0]}: ${el[1]}`);
        });
    }
    console.log(shelves);
}

bookShelf(
['1 -> history', 
'1 -> action', 
'Death in Time: Criss Bell, mystery', 
'2 -> mystery', 
'3 -> sci-fi', 
'Child of Silver: Bruce Rich, mystery', 
'Hurting Secrets: Dustin Bolt, action', 
'Future of Dawn: Aiden Rose, sci-fi', 
'Lions and Rats: Gabe Roads, history', 
'2 -> romance', 
'Effect of the Void: Shay B, romance', 
'Losing Dreams: Gail Starr, sci-fi', 
'Name of Earth: Jo Bell, sci-fi', 
'Pilots of Stone: Brook Jay, history'
]);
