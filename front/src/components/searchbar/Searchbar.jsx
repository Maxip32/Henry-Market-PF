

import React from "react";
import {useDispatch,useSelector,} from "react-redux";
import {allProductsName} from "../../redux/actions";
import {Link} from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.css"



export default function SearchBar() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    const [productName, setProductName] = React.useState("")
    const [searched, setSearched] = React.useState(false)

    const handleInput = (event) => {
        setProductName(event.target.value)
    }
    const handleClick = (event) => {
        event.preventDefault()
        dispatch(allProductsName(productName))
        setProductName("")
        setSearched(true)
    }
  
    return (
        <div className={styles.searchBtn}>
        
       
            <input type='search' placeholder="Search product..." value={productName} onChange={handleInput}/>
            <button type="submit" onClick={handleClick}>
  <FontAwesomeIcon icon={faSearch} />
</button>

              
               {searched && products && products.id &&
                 <div key={products.id}>
            <Link
            to={`/detail/${products.id}`}
            style={{ textDecoration: "none" }}>
          <h2>Name: {products.name}</h2>
          <img src={products.image} alt={products.name} />
          <p>{products.description}</p>
          <p>Price: ${products.price}</p>
          </Link>
          </div>
      }
              </div>           
    ) 
  }