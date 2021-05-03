import React, {useEffect, useCallback} from 'react';
import MainPage from '../pages/MainPage';
import CartPage from '../pages/CartPage';
import ProfilPage from '../pages/ProfilPage';
import {Switch, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {reloadOrder} from '../../actions';


import '../../css/app.scss';

const App = () => {
	
	
	const dispatch = useDispatch();
	if(localStorage.getItem('dateOrder') == null) {
		console.log(['пусто'])
	} else {
		console.log(['заполнено'])	
		const order = localStorage.getItem('dateOrder');
		dispatch(reloadOrder(order))
	}
	
	console.log(useSelector(state => state.orderItems));

	return (
		<div className="app">
			<Switch>
				<Route path='/' exact><MainPage /></Route>
				<Route path='/cart' exact><CartPage/></Route>
				<Route path='/profil' exact><ProfilPage/></Route>
				<Route exact><MainPage/></Route>
			</Switch>
		</div>
	);
}

export default App;