import React, { useContext } from "react";
import "./navbar.css";
import SearchContext from "../searchContext";


function Navbar({}){
    const {search,updateSearch} = useContext(SearchContext);
    const handleChange= (e) => {
        updateSearch(e.target.value);
    };
    return(
        <div className="navbar">
                <h1>Movie Plaza</h1>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Contact</h1>
                <input type="text" placeholder="Search" onChange={(e) => handleChange(e)} />
        </div>
    );
};


export default Navbar;