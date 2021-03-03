import './App.scss';
import MainPage from '../pages/MainPage';
import CartPage from '../pages/CartPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = () => {

	return (
		
		<div className="App">
			<Switch>
				
				<Route path='/' exact><MainPage/></Route>
				<Route path='/cart' exact><CartPage/></Route>
				<Route exact><MainPage/></Route>
				
			</Switch>
		</div>
	);
}

export default App;
