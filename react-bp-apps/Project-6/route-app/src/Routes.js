import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Login from './Login';
import Content from './Content';


const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			<IndexRoute component={Login} />
		</Route>
		<Route path="/content" component={App}>
			<IndexRoute component={Content} />
		</Route>
	</Router>
);

export default Routes;