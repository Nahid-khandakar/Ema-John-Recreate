import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props
    //console.log(props.children)
    let total = 0;
    let shippingCharge = 0
    // let tax = 0
    // let grandTotal = 0
    let quantity = 0
    for (const product of cart) {

        quantity = quantity + product.quantity

        total = total + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping

    }

    const tax = parseFloat((total * 0.1).toFixed(2))
    //console.log(typeof tax)

    const grandTotal = total + shippingCharge + tax


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item : {quantity}</p>
            <p>Total Price :${total} </p>
            <p>Total Shipping Charge : ${shippingCharge} </p>
            <p>Tax(10%) : ${tax}</p>

            <h3>Grand Total : ${grandTotal}</h3>
            {props.children}
        </div>
    );
};

export default Cart;