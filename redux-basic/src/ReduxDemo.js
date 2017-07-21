import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
	render() {
		//step 2 - create reducer: state and action
		const reducer = function(state, action) {
			if (action.type === 'ATTACK') {
				return action.payload
			}
			if (action.type === 'GREENATACK') {
				return action.payload
			}
			return state;
		}
		//step 1 - create store: reducer and state
		const store = createStore(reducer, 'Peace');
		//step 3 - subscribe
		store.subscribe(() => {
			console.log('Store is now ', store.getState());
		})
		//step 4 - dispatch action
		store.dispatch({type: 'ATTACK', payload: 'Iron Man'})
		store.dispatch({type: 'GREENATACK', payload: 'Hulk'})
		return(
			<div>
				test
			</div>
		)
	}
}

export default ReduxDemo;