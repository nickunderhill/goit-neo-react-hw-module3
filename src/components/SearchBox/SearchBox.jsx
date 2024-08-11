import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <label className={css.searchBoxLabel} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.searchBoxInput}
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
