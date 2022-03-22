import React from 'react';
import './Product.css'

const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <h3>Price :${price}</h3>
            <h5>Manufacture : {seller}</h5>
            <h5>Rating : {ratings} star</h5>
        </div>
    );
};

export default Product;