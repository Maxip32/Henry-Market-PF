import React from "react";
import styled from "./Nav.module.css"
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/Search";

export default function Nav(){

    return (
        <div className={styled.navBar}>
            <Link to= "/">    <button className={styled.btn}>Logout</button></Link>
            <Link to="/home"> <button className={styled.btn}>Home</button> </Link>
            <SearchBar />
        </div>
    )
}