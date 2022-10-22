import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search-form__content">
      <div className="search-form__search-area">
        <FilterCheckbox
          label="Короткометражки"
        />
      </div>
    </div>
  );
}

export default SearchForm;