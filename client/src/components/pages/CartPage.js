import React from 'react';
import Cart from '../cart/cart'
import Header from '../header/header.js';

const CartPage = () => {
    return (
        <>
            <Header cartButton = {false}/>
            <Cart/>
        </>
    )
}

export default CartPage;