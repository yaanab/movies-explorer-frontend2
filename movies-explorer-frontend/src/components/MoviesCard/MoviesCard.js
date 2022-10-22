import saveButton from "../../images/save-btn.png";
import saveButtonActive from "../../images/save-btn-active.png";

function MoviesCard({ card, isFilmSaved }) {

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__descriprion">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{card.duration}</p>
        </div>
        {!isFilmSaved &&
          <button aria-label="Сохранить фильм" type="button" className="movies-card__save-film">
            <img className="movies-card__save-film-img" src={saveButton} alt="Cохранить фильм" />
          </button>
        }
        {isFilmSaved &&
          <button aria-label="Сохранить фильм" type="button" className="movies-card__save-film">
            <img className="movies-card__save-film-img" src={saveButtonActive} alt="Удалить  фильм" />
          </button>
        }
      </div>
      <img className="movies-card__image" src={card.image} alt={card.nameRU} />
    </article>
  );
}

export default MoviesCard;