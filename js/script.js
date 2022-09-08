const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let lastWatchedFilm = '',
        ratingOfLastWatchedFilm = '';

    while (lastWatchedFilm == '' || lastWatchedFilm == null || lastWatchedFilm.length > 50) {
        lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
    }

    while (ratingOfLastWatchedFilm == '' || ratingOfLastWatchedFilm == null || ratingOfLastWatchedFilm.length > 50) {
        ratingOfLastWatchedFilm = prompt('На сколько оцените его?', '');
    }

    personalMovieDB.movies[lastWatchedFilm] = ratingOfLastWatchedFilm;
}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);