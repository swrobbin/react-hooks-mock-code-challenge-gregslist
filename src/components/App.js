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
  console.log(obj, "obj")
  
}

  return (
    <div className="app">
      <Header />
      <ListingsContainer 
        items={items}
        deleteHandler={deleteHandler}
        />
    </div>
  );
}

export default App;
