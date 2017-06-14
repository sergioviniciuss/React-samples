import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router';


export default class Login extends Component {
	render() {
		return(
			<div className="row login-block">
				<div className="col-md-4 col-md-offset-4">
					<div className="login-panel panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Login</h3>
						</div>
						<div className="panel-body">
							<form>
								<fieldset>
									<div className="form-group">
										<input className="form-control" placeholder="E-mail" name="email" type="email" autofocus=""/>
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Password" name="password" type="password" value=""/>
									</div>
									<div className="checkbox">
										<label>
											<input name="remember" type="checkbox" value="Remember Me"/> Mantenha-me conectado
										</label>
									</div>
									<Link to="/content" className="btn btn-lg btn-success btn-block">Login</Link>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
