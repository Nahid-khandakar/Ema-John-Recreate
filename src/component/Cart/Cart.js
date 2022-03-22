import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    //console.log(props.cart)
    let total = 0;
    let shippingCharge = 0
    // let tax = 0
    // let grandTotal = 0
    for (const product of cart) {
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping

    }

    const tax = parseFloat((total * 0.1).toFixed(2))
    //console.log(typeof tax)

    const grandTotal = total + shippingCharge + tax


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price :${total} </p>
            <p>Total Shipping Charge : ${shippingCharge} </p>
            <p>Tax(10%) : ${tax}</p>

            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;