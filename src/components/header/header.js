import React from 'react';
import LogoHeader from '../logo-heder/logo-header';
import CartHeader from '../cart-header/cart-header';

import './header.scss'



const Header = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className = 'container'>
                    <LogoHeader/>
                    <CartHeader/>
                </div>
            </div>
        </div>
    )
}

export default Header;