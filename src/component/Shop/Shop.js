import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    //for this products use custom hook useProducts.js 
    // const [products, setProducts] = useState([])

    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])

    //state for pagination
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/count')
            .then(res => res.json())
            .then(data => {

                const count = data.count
                //each page contain 10 data
                const pages = Math.ceil(count / 10)
                setPageCount(pages)

            })
    }, [])

    //console.log(cart)
    //console.log(products)

    //use custom hook useProducts.js
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])


    //this use effect for load data from local storage
    useEffect(() => {
        const storedCart = getStoredCart()

        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
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
        const exists = cart.find(product => product._id === selectedProduct._id)


        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }

        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)

        addToDb(selectedProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button>{number + 1}</button>)
                    }
                </div>

            </div>


            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Item</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;