import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import App from './App';

ReactDOM.render(
	<Provider store={store}><App /></Provider>, 
	document.getElementById('root'));

store.subscribe(() => console.log(store.getState())); // for debugging: showing everytime the state has changed
