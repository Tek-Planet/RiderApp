import React, { Component } from 'react'
import { Text, View } from 'react-native'

import createStore from './store/createStore';
import AppContainer from './AppContainer/index';

export class main extends Component {
	render() {
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);
		return (
			
				<AppContainer store={store} />

		
		)
	}
}

export default main
