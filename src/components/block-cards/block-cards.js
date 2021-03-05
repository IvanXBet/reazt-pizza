import React, {Component} from 'react';
import Card from '../card/card';
import {connect} from 'react-redux';
import {menuLoaded, menuREqested, menuError, orderAdd} from '../../actions';
import WithRestoService from '../hoc/with-pizza-service';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

import './blocak-cards.scss';


class BlockCards extends Component  {

    state = {
        item: [],
    }

    componentDidMount() {
        this.props.menuREqested();
        this.props.PizzaService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError())

        
            
    }
    newItemOrder = async (newItem) => {
        await this.setState(state => {
            const fakeItem = state.item;
            fakeItem.push(newItem);
            state.item = fakeItem;
        });
       
        await this.props.orderAdd(this.state.item);
       
    }
    
    render() {
        const {loading, menuItems, error} = this.props;

        const spinner = loading ? <Spinner/> : null;
        const errorMenu = error ? <Error/> : null;
        const content = !(loading || error) ? <View newItemOrder={this.newItemOrder} menuItems = {menuItems}/> : null;
        
        return (
            <div className="content__items">
                {spinner}
                {errorMenu}
                {content}
            </div> 
        )
    }
}
const View = ({menuItems, newItemOrder}) => {
    return (
        <div className='content__container'>
            {
                menuItems.map(menuItem => {
                    return <Card newItemOrder={newItemOrder} key={menuItem.id} menuItem = {menuItem}/>
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
    }
} 
const mapDispatchToProps = {
    menuLoaded,
    menuREqested,
    menuError,
    orderAdd,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(BlockCards));
