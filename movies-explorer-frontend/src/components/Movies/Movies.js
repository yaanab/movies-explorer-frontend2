import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../PreLoader/Preloader";

function Movies({ cards, isLoading, isFilmSaved }) {
  return (
    <div className="movies__content">
      <SearchForm />
      {!isLoading &&
        <MoviesCardList
          cards={cards}
          isFilmSaved={isFilmSaved}
        />
      }
      {isLoading &&
        <Preloader />
      }
    </div>
  );
}

export default Movies;