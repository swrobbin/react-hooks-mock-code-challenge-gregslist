import React, { useState } from "react";

function ListingCard({item, deleteHandler}) {
  // console.log(item, 'item')
  
  const [toggle, setToggle] = useState(false)

  function clickHandler(){
    const flip = !toggle;
    setToggle(flip)
  }

  function onDelete(e){
    const id = parseInt(e.target.id)
    deleteHandler(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details"  >
        {toggle ? (
          <button onClick={clickHandler} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={clickHandler} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button  id={item.id} onClick={onDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
