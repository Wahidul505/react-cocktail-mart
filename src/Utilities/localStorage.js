const getCartFromDb = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}
const setToDb = (idDrink) =>{
    const cart = getCartFromDb();
    const quantity = cart[idDrink];
    if(!quantity){
        cart[idDrink] = 1;
    }
    else{
        cart[idDrink] = quantity + 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
const removeFromDb = (id) =>{
    const cart = getCartFromDb();
    if(id in cart){
        delete cart[id];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
export {getCartFromDb, setToDb, removeFromDb}