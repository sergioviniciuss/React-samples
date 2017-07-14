import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {

	onLogin() {
		this.props.onLogin();
	}
	onLogout() {
		this.props.onLogout();
	}

	render() {
	    let loginStatus;

	    if (this.props.idToken) {
	      loginStatus = <NavItem onClick={this.onLogout.bind(this)} href="#"> Logout </NavItem>
	    } else {
	      loginStatus = <NavItem onClick={this.onLogin.bind(this)} href="#"> Login </NavItem>
	    }
		return(
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						Github Searcher
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					{loginStatus}
				</Nav>
			</Navbar>
		)
	}
}

export default Header;