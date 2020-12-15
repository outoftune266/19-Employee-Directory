import React from "react";

function Search(props) {
  return <input type="text" onChange={props.handleInputChange}></input>;
}

export default Search;
