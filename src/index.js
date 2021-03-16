import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/error-boundry';
import PizzaService from './services/pizza-service';
import PizzaServiceContext from './components/pizza-service-context/pizza-service-context';
import store from './store';

import './index.scss';

const pizzaService = new PizzaService();

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
        <PizzaServiceContext.Provider value = {pizzaService}>
            <Router>
                <App/>
            </Router>
        </PizzaServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  	document.getElementById('root')
);



