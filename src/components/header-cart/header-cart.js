import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header-cart.scss';


class HeaderCart extends Component {
	state = {
		price: 150,
		quantity: 3,
	}

    render() {
		const {cartButton} = this.props;
		const clazz = cartButton ? 'button button_cart ' : 'hiden';
		return (
			<Link to ={'/cart'} className={clazz}>
				<span className="button__cart-text">{this.state.price} ₽</span>
				<div className="button__delimiter"></div>
				<i className="fas fa-shopping-cart button__cart-icon"></i>
				<span className="button__cart-text" >{this.state.quantity}</span>
			</Link>
		);
	}
};

export default HeaderCart;