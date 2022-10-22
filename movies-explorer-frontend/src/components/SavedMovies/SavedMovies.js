import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ cards, isFilmSaved }) {
  return (
    <div className="saved-movies__content">
      <SearchForm />
      <MoviesCardList
        cards={cards}
        isFilmSaved={isFilmSaved}
      />
    </div>
  );
}

export default SavedMovies;