import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movieImg1 from "../../images/movie-img-1.png";
import movieImg2 from "../../images/movie-img-2.png";

const cards = [
  {
    'nameRU': '33 слова о дизайне',
    'duration': '1ч 47м',
    'image': movieImg2,
    'movieId': '1265458'
  },
  {
    'nameRU': '33 слова о дизайне',
    'duration': '1ч 47м',
    'image': movieImg1,
    'movieId': '1265488'
  },
  {
    'nameRU': '33 слова о дизайне',
    'duration': '1ч 47м',
    'image': movieImg2,
    'movieId': '1265555'
  },
  {
    'nameRU': '33 слова о дизайне',
    'duration': '1ч 47м',
    'image': movieImg1,
    'movieId': '1233333'
  },
]

function Movies({ isFilmSaved }) {
  return (
    <div className="movies__content">
      <SearchForm />
      <MoviesCardList
        cards={cards}
        isFilmSaved={isFilmSaved}
      />
    </div>
  );
}

export default Movies;