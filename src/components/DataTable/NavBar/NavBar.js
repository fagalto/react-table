import React, {Component} from "react";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = ({ handleChange,searchQuery },) => (
            <div>
              <SearchBar handleChange={handleChange} searchQuery={searchQuery}/>
            </div>
  );

export default NavBar;