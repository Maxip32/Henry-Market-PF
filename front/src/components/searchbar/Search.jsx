import React from "react";
import {Link} from "react-router-dom";
import styled from "./Search.module.css"


export default function SearchBar() {

    return (
        <div>
            <input type='search' placeholder="Search products..."/>
            <Link to="/home">
                <button type='submit' className={styled.btn} >Search</button>
            </Link>
          {/* <Link to="/home">
                <button className={styled.btn}>Delete</button>
            </Link> */}

        </div>
    );
}