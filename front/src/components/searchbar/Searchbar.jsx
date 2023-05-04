/* eslint-disable no-undef */
import { useDispatch } from "react-redux";
import { allProducts, clean } from "../../redux/actions";
import style from "./Search.module.css";

const SearchName = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(allProducts());
    dispatch(clean);

  };

  return (
    <div className={style.searchresults}>
      <form onSubmit={handleSearch}>
        <label htmlFor="name">
        <input type="text" id="name" name="name" />
        <button className={style.input} type="submit">
          Search
        </button>
        </label>
      </form>
    </div>
  );
};

export default SearchName;
