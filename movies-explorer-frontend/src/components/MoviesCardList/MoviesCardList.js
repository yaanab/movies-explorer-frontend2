import MoviesCard from "../MoviesCard/MoviesCard";
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

function MoviesCardList(isFilmSaved) {
  return (
    <section className="movies">
      {cards.map((card) => (
        <MoviesCard key={card.movieId} card={card} isFilmSaved={isFilmSaved} />
      ))}
    </section>
    
  );
}

export default MoviesCardList;