import React from 'react';
import './Header.css';
const Header = ({toggleDisplay, cart}) => {
    const totalQuantity = cart.reduce((previous,next)=> previous + next.quantity,0)
    return (
        <div className='header-container'>
            <h2>Cocktail DB</h2>
            <button onClick={toggleDisplay}>Cart <sup>{totalQuantity}</sup></button>
        </div>
    );
};

export default Header;