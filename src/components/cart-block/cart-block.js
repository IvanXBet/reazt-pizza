import React, {Component} from 'react';
import {connect} from 'react-redux';
import {delOrder} from '../../actions';

import CartItem from '../cart-item/cart-item';
import {Link} from 'react-router-dom';


import './cart-block.scss';
import '../button/button.scss';

import titleIcon from './cart-icon.svg';
import trashIcon from './cart-icon-trash.svg';
import backIcon from './cart-icon-back.svg';


class CartBlock extends Component  {
    allClear =  () => {
        this.props.delOrder();
    }

    


    render() {
        const {order, totalPrice, totalQuantity} = this.props;
        return (
                <div className='cart__block'>
                    <div className='cart__top'>
                        <div className='cart__title'>
                            <img width="29" src={titleIcon} alt="cart icon" className='cart__titleIcon'/>
                            <div className='cart__titleText'>Корзина</div>
                        </div>
                        <div className='cart__clear'>
                        <img width="20" src={trashIcon} alt="cart icon" className='cart__clearIcon'/>
                            <div className='cart__clearText' onClick={this.allClear}>Очистить корзину</div>
                        </div>
                    </div>
                    <div className='cart__items'>
                       
                    {
                        order.map(orderItem => {
                            return <CartItem key={orderItem.id} orderItem = {orderItem}/>
                        })
                        
                    }

                       

                       
                   </div>
                   <div className='cart__bottom'>
                       <div className ='cart__info'>
                           <div className='cart__allQuantity'>Всего пицц: <span>{totalQuantity} шт.</span></div>
                           <div className='cart__allPrice'>Сумма заказа: <span>{totalPrice} ₽</span></div>
                       </div>
                       <div className ='cart__buttons'>
                            <Link to ={'/'} className='button button_cartBack'>
                                <img width="6" height='12'  src={backIcon} alt="back icon" />
                                <div>Вернуться назад</div>
                            </Link>
                            <Link  className='button button_cartPayment'>Заказать</Link>
                       </div>
                   </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.orderItems,
        totalPrice: state.totalPrice,
		totalQuantity :state.totalQuantity,
    }
}
const mapDispatchToProps = {
    delOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartBlock);