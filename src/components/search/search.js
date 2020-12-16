import React from "react";
import "./style.css";

function Search(props) {
  return (
    <input
      type="text"
      onChange={props.handleInputChange}
      placeholder="Type Here"
    ></input>
  );
}

export default Search;
