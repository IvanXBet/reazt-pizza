import React from 'react';
import HeaderLogo from '../header-logo/header-logo';
import HeaderCart from '../header-cart/header-cart';

import './header.scss'



const Header = ({cartButton}) => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className = 'container'>
                    <HeaderLogo/>
                    <HeaderCart cartButton = {cartButton}/>
                </div>
            </div>
        </div>
    )
}

export default Header;