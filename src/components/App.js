import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [items, setItems] = useState([]);
const [search, setSearch] = useState('');


useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((r) => r.json())
  .then(data => setItems(data))
}, [])

function deleteHandler(obj){
  const filteredItems = items.filter(item => item.id !== obj)
  setItems(filteredItems)
  
}


  const searchedItems = items.filter((item) => {
    return item.description.toLowerCase().includes(search.toLowerCase());
      
  })
 


  return (
    <div className="app">
      <Header 
      onSearch={setSearch}
      />
      <ListingsContainer 
        items={searchedItems}
        deleteHandler={deleteHandler}

        />
    </div>
  );
}

export default App;
