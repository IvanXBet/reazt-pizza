import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/with-pizza-service';
import CartNoOrder from '../cart-no-order/cart-no-norder';



import './cart.scss';

class Cart extends Component  {
    render() {
        return (
            <div className='cart'>
                <CartNoOrder/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       
    }
} 
const mapDispatchToProps = {
    
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(Cart));