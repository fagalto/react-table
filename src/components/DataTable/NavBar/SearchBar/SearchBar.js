import React from "react";
const SearchBar = ({ handleChange,searchQuery },
) => (

  <input onChange={ handleChange } value={searchQuery} placeholder ="szukaj"/>
);

export default SearchBar