import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartNoOrder from '../cart-no-order/cart-no-norder';
import CartBlock from '../cart-block/cart-block'



import './cart.scss';

class Cart extends Component  {
    render() {
        const {status} = this.props;
        const content = status ? <CartBlock/> : <CartNoOrder/>;
        return (
            <div className='cart'>
                <CartBlock/>
                {/* {content} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       status: state.order.status,
    }
} 
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);