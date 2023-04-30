import { useDispatch } from "react-redux";
import { allProductsName } from "../../redux/actions";
import style from "./Search.module.css";

const SearchByName = (props) => {
const dispatch = useDispatch();

const handleSearch = (e) => {
  props.setCurrentPage(1)
    e.preventDefault();
    const name = e.target.name.value.toLowerCase(); 
    dispatch(allProductsName(name));
    e.target.name.value = "";
    if (!name.match(/^[A-Za-z]+(\s+[A-Za-z]+)*$/)) {
      alert("Please enter only letters");
    }
    return alert( "Products not found.")
    
  };

  return (
    <div className={style.landingButton}>
      <form onSubmit={handleSearch}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" />
        <button className={style.select} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchByName;
