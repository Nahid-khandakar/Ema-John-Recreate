import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props
    const { img, name, price, seller, ratings } = product

    // console.log(props)

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price :${price}</p>
                <p> <small> Manufacture : {seller}</small></p>
                <p> <small> Rating : {ratings} star</small></p>
            </div>

            <button className='btn-cart' onClick={() => handleAddToCart(product)} >
                <p>Add to cart</p>
            </button>

        </div>
    );
};

export default Product;