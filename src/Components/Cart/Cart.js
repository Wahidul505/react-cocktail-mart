import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

const Cart = ({display, toggleDisplay, cart, removeFromCart}) => {
    return (
        <div className='cart-container' style={{display:display}}>
            <div className="cart">
                <h3>Added Cocktails</h3>
                <hr />
                {
                    cart.map(item => <CartItem key={item.idDrink} item={item} removeFromCart={removeFromCart}></CartItem>)
                }
                <button className='close-btn' onClick={toggleDisplay}>Close</button>
            </div>  
        </div>
    );
};

export default Cart;