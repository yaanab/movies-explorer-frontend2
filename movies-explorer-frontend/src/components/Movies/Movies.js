import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";


function Movies({ isFilmSaved, handleSaveFilm }) {
  return (
    <div className="movies__content">
      {/* <SearchForm /> */}
      <MoviesCard
        isFilmSaved={isFilmSaved}
      />


    </div>
  );
}

export default Movies;