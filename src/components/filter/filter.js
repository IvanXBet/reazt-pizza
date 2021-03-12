import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onFilterSelect} from '../../actions';

import './filter.scss';
import '../button/button.scss';

class Filter extends Component {
    state = {
        title: 'Все'
    }
    componentDidMount() {
        
    }
    onFilterSelect = (name, title) => {
        this.props.onFilterSelect(name);
        this.setState({title});
    }

    render() {
        let categories = [
            {name:'all', label: 'Все'},
            {name:'classical', label: 'Классические'},
            {name: 'meat', label: 'Мясные'},
            {name: 'vegetarian', label: 'Вегетарианская'},
            {name: 'sharp', label: 'Острые'},
        ];
        const items = categories.map(({name, label}) => {
            const active = this.props.filter === name,
                  clazz = active ? 'button_filter button_filter_active' : 'button_filter';
            return (
                <div type='button'
                    className={`button ${clazz}`}
                    key={name} 
                    onClick={() => this.onFilterSelect(name , label)}>
                        {label}
                </div>
            )
        });


        return (
            <div className='filter'>
                <div className='filter__buttons'>
                    {items}
                </div>
                <div className='filter__title'>{this.state.title} пиццы</div>
            </div>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
} 
const mapDispatchToProps = {
    onFilterSelect,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);