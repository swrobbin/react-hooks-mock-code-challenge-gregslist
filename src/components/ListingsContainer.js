import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, deleteHandler }) {

const itemCards = items.map((item) => {
  return (<li key={item.id}>
        <ListingCard  deleteHandler={deleteHandler} item={item}/>
        </li>  
  ) 
}
)


  



  return (
    <main>
      <ul className="cards">
        {itemCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
