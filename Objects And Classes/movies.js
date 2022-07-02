function movies(arrOfMovies) {
    let resultObject = {};
    let resultArr = [];

    for (let el of arrOfMovies) {
        let splittedArr = el.split(' ');

        if (splittedArr[0] == 'addMovie') {
            splittedArr.shift();
            let nameOfMovie = splittedArr.join(' ');
            resultObject = {
                name: nameOfMovie,
            }
            resultArr.push(resultObject);
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);