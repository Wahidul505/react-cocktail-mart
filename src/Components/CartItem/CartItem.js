import React from 'react';
import './CartItem.css';

const CartItem = ({item, removeFromCart}) => {
    const {strDrink, quantity} = item;
    return (
        <div>
            <div className='cart-item'>
                <span>{quantity}</span>
                <p>{strDrink}</p>
                <button onClick={()=>removeFromCart(item)}>Delete</button>
            </div>
        </div>
    );
};

export default CartItem;