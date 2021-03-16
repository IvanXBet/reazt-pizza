import React from 'react';
import HeaderLogo from '../header-logo/header-logo';
import HeaderCart from '../header-cart/header-cart';





const Header = ({cartButton}) => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className = 'container'>
                    <div className='header__items'>
                        <HeaderLogo/>
                        <HeaderCart cartButton = {cartButton}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;