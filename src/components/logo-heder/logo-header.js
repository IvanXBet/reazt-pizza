import React from 'react';
import {Link} from 'react-router-dom';

import logoSvg from './logo-pizza.svg';

import './logo-header.scss';

const LogoHeader = () => {
    return (
        <Link to={'/'} className="header__logo">
            
                <img width="38" src={logoSvg} alt="Pizza logo"/>

                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            
        </Link>
    )
}

export default LogoHeader;
                    