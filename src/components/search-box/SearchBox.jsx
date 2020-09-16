import React from "react";
import "./search-box.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="conatiner mt-4">
      <input
        className="search "
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
