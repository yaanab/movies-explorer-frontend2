import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies({ isFilmSaved }) {
  return (
    <div className="movies__content">
      {/* <SearchForm /> */}
      {/* <MoviesCard
        isFilmSaved={isFilmSaved}
      /> */}

      <MoviesCardList />


    </div>
  );
}

export default Movies;