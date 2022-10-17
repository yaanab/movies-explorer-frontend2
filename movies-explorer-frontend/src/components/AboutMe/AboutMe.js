import photo from '../../images/about-me-photo.JPG';

function AboutMe() {
  return (
    <div id="about-me" className="about-me__content">
      <h2 className="about-me__title">
        Студент
      </h2>
      <article className="about-me__description">
        <div className="about-me__text">
          <div className='about-me__text-block'>
            <h3 className="about-me__name">
              Анастасия
            </h3>
            <p className="about-me__profession">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__experience">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a target="_blank" rel="noreferrer" href="https://github.com/yaanab" className='about-me__git-link'>
            Github
          </a>
        </div>
        <img src={photo} alt="фото" className='about-me__photo' />
      </article>
      <div className='about-me__portfolio'>
        <h3 className='about-me__portfolio-title'>
          Портфолио
        </h3>
        <nav>
          <ul className='about-me__links'>
            <li>
              <a className="about-me__link about-me__link_underlined" target="_blank" rel="noreferrer" href="https://github.com/yaanab/how-to-learn">
                Статичный сайт
              </a>
            </li>
            <li>
              <a className="about-me__link about-me__link_underlined" target="_blank" rel="noreferrer" href="https://yaanab.github.io/russian-travel/index.html">
                Адаптивный сайт
              </a>
            </li>
            <li>
              <a className="about-me__link" target="_blank" rel="noreferrer" href="https://yaana.nomoredomains.sbs">
                Одностраничное приложение
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AboutMe;