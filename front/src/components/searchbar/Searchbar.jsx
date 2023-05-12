

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
        <div >
          <div className={styles.searchBtn}>
            <input className={styles.search} type='search' placeholder="Search product..." value={productName} onChange={handleInput}/>
            <button className={styles.searchButton} type="submit" onClick={handleClick}><FontAwesomeIcon style={{color:"yellow"}} icon={faSearch}/>Search</button>
  </div>
              
               {searched && products && products.id &&
                 <div key={products.id}>
                   <div className={styles.card}>
            <Link
            to={`/detail/${products.id}`}
            style={{ textDecoration: "none" }}>
          <h2 className={styles.name} style={{ color: "black" }}>Name: {products.name}</h2>
          <img className={styles.cardimg} src={products.image} alt={products.name} />
          <p className={styles.description} style={{ color: "black" }}>{products.description}</p>
          <p className={styles.price} style={{ color: "black" }}>Price: ${products.price}</p>
          </Link>
          </div>
          </div>
         
      }
              </div>           
    ) 
  }