import React, {Component} from 'react';
import Button from '../button/button'

import {Link} from 'react-router-dom';


import './cart-block.scss';
import '../button/button.scss';

import titleIcon from './cart-icon.svg';
import trashIcon from './cart-icon-trash.svg';
import backIcon from './cart-icon-back.svg';
import daleteIcon from './cart-icon-delete.svg';

class CartBlock extends Component  {
    render() {
        return (
                <div className='cart__block'>
                    <div className='cart__top'>
                        <div className='cart__title'>
                            <img width="29" src={titleIcon} alt="cart icon" className='cart__titleIcon'/>
                            <div className='cart__titleText'>Корзина</div>
                        </div>
                        <div className='cart__clear'>
                        <img width="20" src={trashIcon} alt="cart icon" className='cart__clearIcon'/>
                            <div className='cart__clearText'>Очистить корзину</div>
                        </div>
                    </div>
                    <div className='cart__items'>
                        <div className='cartItem'>
                            <div className='cartItem__first'>
                                <img className='cartItem__img' src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt=""/>
                                <div className='cartItem__text'>
                                    <h2 className='cartItem__name'>Сырный цыпленок</h2>
                                    <div className='cartItem__descr'>тонкое тесто, 26 см.</div>
                                </div>
                            </div>
                            <div className='cartItem__second'>
                                <div className='cartItem__quantity'>2 шт.</div>
                                <div className='cartItem__price'>770 ₽</div>
                                <Button className='button button_cartDelete'> 
                                    <img src={daleteIcon} alt='delete item'/>
                                </Button>
                            </div>
                       </div>


                       

                       
                   </div>
                   <div className='cart__bottom'>
                       <div className ='cart__info'>
                           <div className='cart__allQuantity'>Всего пицц: <span>3 шт.</span></div>
                           <div className='cart__allPrice'>Сумма заказа: <span>900 ₽</span></div>
                       </div>
                       <div className ='cart__buttons'>
                            <Link to ={'/'} className='button button_cartBack'>
                                <img width="6" height='12'  src={backIcon} alt="back icon" />
                                <div>Вернуться назад</div></Link>
                            <Link className='button button_cartPayment'>Оплатить сейчас</Link>
                       </div>
                   </div>
                </div>
        )
    }
}


export default CartBlock;