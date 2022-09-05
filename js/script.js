const numberOfFilms = 
    +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastWatchedFilm1 = 
          prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfLastWatchedFilm1 = 
          +prompt('На сколько оцените его?', ''),
      lastWatchedFilm2 = 
          prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfLastWatchedFilm2 = 
          +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedFilm1] = ratingOfLastWatchedFilm1;
personalMovieDB.movies[lastWatchedFilm2] = ratingOfLastWatchedFilm2;

console.log(personalMovieDB);