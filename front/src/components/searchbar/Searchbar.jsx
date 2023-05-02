import { useDispatch } from "react-redux";
import { allProductsName } from "../../redux/actions";
import style from "./Search.module.css";




const BuscarPorNombre = (props) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
   props.setCurrentPage(1)
    e.preventDefault();
    const name = e.target.name.value.toLowerCase(); 
    dispatch(allProductsName(name));
    e.target.name.value = "";
    if (!name.match(/^[A-Za-z]+(\s+[A-Za-z]+)*$/)) {
      alert("Por favor ingrese solo letras");
    }
  };

  return (
    <div className={style.searchresults}>
    
  
       <form onSubmit={handleSearch}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" />
        <button className={style.input} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default BuscarPorNombre;
