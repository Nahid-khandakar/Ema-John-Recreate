import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    //console.log(props.cart)
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Item : {cart.length}</p>
        </div>
    );
};

export default Cart;