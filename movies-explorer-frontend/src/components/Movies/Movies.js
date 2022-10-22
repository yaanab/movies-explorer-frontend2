import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies({ isFilmSaved, handleSaveFilm }) {
  return (
    <div className="movies__content">
      {/* <SearchForm /> */}
      <MoviesCard
        isFilmSaved={isFilmSaved}
      />

      <MoviesCardList />


    </div>
  );
}

export default Movies;