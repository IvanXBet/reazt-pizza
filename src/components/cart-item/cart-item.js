import React, {Component} from 'react';
import {connect} from 'react-redux';
import {delItemOrder} from '../../actions';
import Button from '../button/button';



import './cart-item.scss';
import daleteIcon from './cart-icon-delete.svg';

class CartItem extends Component  {
    delItemOrder = () => {
        const {id} = this.props.orderItem;
        this.props.delItemOrder(id);
    }
    render() {
        const {id, title, url, activeDough, activeDiameter, quantity, priceOfItem} = this.props.orderItem;
        
        return (
        <div className='cartItem'>
            <div className='cartItem__first'>
                <img className='cartItem__img' src={url} alt="icon pizza"/>
                <div className='cartItem__text'>
                    <h2 className='cartItem__name'>{title}</h2>
                    <div className='cartItem__descr'>{activeDough} тесто, {activeDiameter} см.</div>
                </div>
            </div>
            <div className='cartItem__second'>
                <div className='cartItem__quantity'>{quantity} шт.</div>
                <div className='cartItem__price'>{priceOfItem} ₽</div>
                <Button onClick={this.delItemOrder} className='button button_cartDelete'> 
                    <img src={daleteIcon} alt='delete item'/>
                </Button>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    
} 
const mapDispatchToProps = {
    delItemOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);