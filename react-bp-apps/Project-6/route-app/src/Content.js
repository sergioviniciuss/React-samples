import React , { Component } from 'react';
import { Link } from 'react-router';


class Content extends Component {
	render() {
		return(
			<div>
				<h1> Some new content component </h1>
				<Link to="/">Back to login </Link>
			</div>
		)
	}
}

export default Content;