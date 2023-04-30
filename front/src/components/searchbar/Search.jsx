
import style from "./Search.module.css";

const SearchByName = (props) => {

  const handleSearch = ()=>{

  }


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
