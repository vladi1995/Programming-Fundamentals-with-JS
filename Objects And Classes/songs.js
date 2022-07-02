function songs(arr) {
    let numOfSongs = Number(arr.shift());
    let typeListLast = arr.pop();

    class song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }

    for (let el of arr) {
        let splitted = el.split('_');

        if (splitted[0] == typeListLast || typeListLast == 'all') {
            let newSong = new song(splitted[0], splitted[1], splitted[2]);
            newSong.print();
        }
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
);