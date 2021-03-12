import React, {Component} from 'react';
import Card from '../card/card';
import {connect} from 'react-redux';
import {menuLoaded, menuREqested, menuError, orderAdd, addQuantity} from '../../actions';
import WithRestoService from '../hoc/with-pizza-service';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

import './blocak-cards.scss';


class BlockCards extends Component  {

    

    componentDidMount() {
        this.props.menuREqested();
        this.props.PizzaService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError())

        
            
    }
    newItemOrder = async (newItem) => {
       
        await this.props.orderAdd(newItem);
       
    }

    newQuantityInOrder = async (payload) => {
        
        const item = payload;
       
        await this.props.addQuantity(item);
       
    }

    filterCart = (items, filter) => {
        switch(filter) {
            case 'classical':
                return items.filter(item => item.category === 'classical');

            case 'meat':
                return items.filter(item => item.category === 'meat');

            case 'vegetarian':
                return items.filter(item => item.category === 'vegetarian');

            case 'sharp':
                return items.filter(item => item.category === 'sharp');

            case 'closed':
                return items.filter(item => item.category === 'closed');

            default: 
                return items;
        }
    }
    
    render() {
        const {loading, menuItems, error} = this.props;
        let filterItems = this.filterCart(menuItems , this.props.filter);

        const spinner = loading ? <Spinner/> : null;
        const errorMenu = error ? <Error/> : null;
        const content = !(loading || error) ? <View newItemOrder={this.newItemOrder} newQuantityInOrder={this.newQuantityInOrder} filterItems = {filterItems}/> : null;
        
        return (
            <div className="content__items">
                {spinner}
                {errorMenu}
                {content}
            </div> 
        )
    }
}
const View = ({filterItems, newItemOrder, newQuantityInOrder}) => {
    
    return (
        <div className='content__container'>
            {
                filterItems.map(menuItem => {
                    return <Card newItemOrder={newItemOrder} newQuantityInOrder={newQuantityInOrder} key={menuItem.id} menuItem = {menuItem}/>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loadingMenu,
        error: state.errorMenu,
        order: state.order,
        filter : state.filter,
    }
} 
const mapDispatchToProps = {
    menuLoaded,
    menuREqested,
    menuError,
    orderAdd,
    addQuantity
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(BlockCards));
