import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <>
      <input
        type="search"
        name=""
        value={searchText}
        placeholder="Search"
        className="search-bar"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
