import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [items, setItems] = useState([])


useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((r) => r.json())
  .then(data => setItems(data))
}, [])

function deleteHandler(obj){
  const filteredItems = items.filter(item => item.id !== obj)
  setItems(filteredItems)
  // console.log(obj, "obj")
  
}
function onSearch(search){
  const searchedItems = items.filter((item) => {
     item.description.toLowerCase().includes(search.toLowerCase());
      
  })
  setItems(searchedItems)
}

  return (
    <div className="app">
      <Header 
      onSearch={onSearch}
      />
      <ListingsContainer 
        items={items}
        deleteHandler={deleteHandler}

        />
    </div>
  );
}

export default App;
