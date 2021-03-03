import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './cart-header.scss'

class CartHeader extends Component {
	state = {
		price: 150,
		quantity: 3,
	}

    render() {
		return (
			<Link to ={'/cart'} className="header__cart button  button_cart">
				<span className="button__cart-text">{this.state.price} ₽</span>
				<div className="button__delimiter"></div>
				<i className="fas fa-shopping-cart button__cart-icon"></i>
				<span className="button__cart-text" >{this.state.quantity}</span>
			</Link>
		);
	}
};

export default CartHeader;