import React from 'react';
import './Cocktail.css';

const Cocktail = ({item, addToCart}) => {
    const {strDrink, strDrinkThumb} = item;
    return (
        <div className='cocktail-card'>
            <img src={strDrinkThumb} alt="" />
            <p className='drink-name'>{strDrink}</p>
            <button onClick={()=>addToCart(item)}>Add To Cart</button>
        </div>
    );
};

export default Cocktail;