import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Items from '../Items/Items';
import Cart from '../Cart/Cart';
import { getCartFromDb, removeFromDb, setToDb } from '../../Utilities/localStorage';
const Home = () => {
    // state for toggle function 
    const [display, setDisplay] = useState('none');
    // function for toggling the cart as modal 
    const toggleDisplay = () =>{
        if(display === 'none'){
            setDisplay('block');
        }
        else{
            setDisplay('none');
        }
    }
    // state and side effect for storing the fetched data 
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => setItems(data.drinks))
    },[])
    const [cart, setCart] = useState([]);
    const addToCart = (item) =>{
        let newCart;
        const exist = cart.find(drink => drink.idDrink === item.idDrink);
        if(!exist){
            item.quantity = 1;
            newCart = [...cart,item];
        }
        else{
            const rest = cart.filter(drink => drink.idDrink !== item.idDrink);
            item.quantity = item.quantity + 1;
            newCart = [...rest, item];
        }
        setCart(newCart);
        setToDb(item.idDrink);
    }
    const removeFromCart = (item) =>{
        const rest = cart.filter(drink => drink.idDrink !== item.idDrink);
        setCart(rest);
        removeFromDb(item.idDrink);
    }
    useEffect(()=>{
        const storedItems = getCartFromDb();
        const storedCart = [];
        for(const id in storedItems){
            const storedDrink = items.find(drink => drink.idDrink === id);
            if(items.length>0){
                const quantity = storedItems[id];
                storedDrink.quantity = quantity;
                storedCart.push(storedDrink);
            }
        }
        setCart(storedCart);
    },[items])
    return (
        <div>
            <Cart display={display} toggleDisplay={toggleDisplay} cart={cart} removeFromCart={removeFromCart}></Cart>
            <Header toggleDisplay={toggleDisplay} cart={cart}></Header>
            <Items items={items} addToCart={addToCart}></Items>
        </div>
    );
};

export default Home;