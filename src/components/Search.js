import React, { useState } from "react";

function Search({onSearch}) {
  const [search, setSearch] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(search)
  }

  function searchHandler(e){
    setSearch(e.target.value)
    // 
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={searchHandler}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
