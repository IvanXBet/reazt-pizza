import React, {Component} from 'react';
import {connect} from 'react-redux';
import {delItemOrder, offSatus} from '../../actions';
import Button from './../button/button';

class Card extends Component  {
    constructor() {
        super()
        this.typs = [
            {name: 'тонкое', label: 'тонкое'},
            {name: 'традиционное', label: 'традиционное'}
        ]
        this.size = [
            {name: 26, label: '26 см.'},
            {name: 30, label: '30 см.'},
            {name: 40, label: '40 см.'}
        ]
    }
    state = {
        activeDough: 'тонкое',
        activeDiameter: 26,
        quantity: 0,
        added: false,
    }
    
    onToggleType  (dough)  {
            this.setState({activeDough:dough});
        }

    onToggleSize  (dough)  {
        this.setState({activeDiameter:dough});
    }
    
    addInOrder = () => {
        const {id, title, url, price} = this.props.menuItem;
        const {activeDough, activeDiameter, quantity} = this.state;
        const priceOfItem = price*activeDiameter;
        let item = {
                id,
                title,
                url,
                priceOfItem,
                activeDough,
                activeDiameter,
                quantity
            };
        
        this.props.newItemOrder(item);
    }

    addInOrderNewQuantity() {
        const {id, price} = this.props.menuItem;
        const {activeDough, activeDiameter, quantity} = this.state;
        const priceOfPizza = price*activeDiameter;

        let payload = {
            id,
            quantity,
            activeDough,
            activeDiameter,
            priceOfPizza,
        }
         this.props.newQuantityInOrder(payload);
    }
    
     onAdded = async (e) => {
        
        if(e.target.className === "button__text-circle")
        {
            this.closeAdded();
            return;
        }

        await this.setState({added: true});
        
        
        if(this.state.added) {
            if(this.state.quantity === 99) {
                return;
            }
            const newqQantity = this.state.quantity+1;
            await this.setState({quantity:newqQantity});
            if(this.state.quantity > 1) {
                await this.addInOrderNewQuantity();
            }else {
                await this.addInOrder();
            }
            
        }
        
        
    }

    closeAdded = () => {
        this.setState({added: false, quantity: 0});
        this.props.delItemOrder(this.props.menuItem.id);
        this.props.offSatus();
    }

    render() {
        
        const {title, url, price, category, id} = this.props.menuItem;
        const {added} = this.state;
       
        const liTyps = this.typs.map(({name, label}) => {
            const activeType = this.state.activeDough === name;
            const clazzType = activeType ? 'active' : null;
            return <li onClick={() => this.onToggleType(name)} className={clazzType}>{label}</li>
        });

        const liSize = this.size.map(({name, label}) => {
            const activeSize = this.state.activeDiameter === name;
            const clazzSize = activeSize ? 'active' : null;
            return <li onClick={() => {
                this.onToggleSize(name)
                } 
            }  className={clazzSize}>{label}</li>
        });

        let calzzButton = this.state.added ? 'button button_card button_added' : 'button button_card';

        
        
        return(
            <div className = 'card'>
                <div className='card__img'>
                    <img src= {url}></img>
                </div>
                <h4 className='card__title'>{title}</h4>
                <div className='card__info'></div>
                <div className="card__selector">
                    <ul className="card__dough">
                        {liTyps}
                    </ul>
    
                    <ul className='card__diameter'>
                        {liSize}
                    </ul>
                </div>
    
            <div className="card__bottom">
    
                <div className="card__price">от {price*this.state.activeDiameter} ₽</div>
                <Button onClick={this.onAdded} className={calzzButton}>
                    
                    <div className='button_card__text'>
                        <i className="fas fa-plus button_card__plus"></i>
                        <span className="button_card__add">Добавить</span>
                    </div>
                    <div className="button__circle">
                        <div className="button__text-circle">{this.state.quantity}</div>
                    </div>
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
    offSatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);