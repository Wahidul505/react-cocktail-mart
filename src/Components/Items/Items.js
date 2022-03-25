import React from 'react';
import Cocktail from '../Cocktail/Cocktail';
import './Items.css';

const Items = ({items, addToCart}) => {
    return (
        <div className='items-container'>
            {
                items.map(item=> <Cocktail key={item.idDrink} item={item} addToCart={addToCart}></Cocktail>)
            }
        </div>
    );
};

export default Items;