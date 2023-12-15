import React from 'react';
import "../styles/Navcard.css";

const NavCard = ({ name, price, image, index }) => {
  return (
    <div className='navcard'>
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default NavCard;
