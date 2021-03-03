import React, {Component} from 'react';
import Card from '../card/card';
import {connect} from 'react-redux';
import {menuLoaded, menuREqested, menuError} from '../../actions';
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
    
    render() {
        const {loading, menuItems, error} = this.props;

        const spinner = loading ? <Spinner/> : null;
        const errorMenu = error ? <Error/> : null;
        const content = !(loading || error) ? <View menuItems = {menuItems}/> : null;
        
        return (
            <div className="content__items">
                {spinner}
                {errorMenu}
                {content}
            </div> 
        )
    }
}
const View = ({menuItems}) => {
    return (
        <div className='content__container'>
            {
                menuItems.map(menuItem => {
                    return <Card key={menuItem.id} menuItem = {menuItem}/>
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
    }
} 
const mapDispatchToProps = {
    menuLoaded,
    menuREqested,
    menuError,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(BlockCards));
