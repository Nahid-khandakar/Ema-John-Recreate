import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    //console.log(cart)
    //console.log(products)

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    //this use effect for load data from local storage
    useEffect(() => {
        const storedCart = getStoredCart()

        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])


    //handleaddtocart  data come from cart on click function 
    const handleAddToCart = (selectedProduct) => {

        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)


        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }

        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }



        setCart(newCart)

        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>

            </div>
        </div>
    );
};

export default Shop;