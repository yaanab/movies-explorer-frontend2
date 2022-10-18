import Header from '../Header/Header';

function Movies({ isNavPopupOpen, onNavMenuClick, onNavPopupClose }) {
  return (
    <>
      <Header
        isNavPopupOpen={isNavPopupOpen}
        onNavMenuClick={onNavMenuClick}
        onNavPopupClose={onNavPopupClose}
      />
    </>
  )
}

export default Movies;