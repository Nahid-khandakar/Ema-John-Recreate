
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <Link to='/out'>Sign Out</Link>
                        :
                        <Link to="/login">Log In</Link>
                }

                <Link to="/signup">Sign Up</Link>
            </div>

        </nav>
    );
};

export default Header;