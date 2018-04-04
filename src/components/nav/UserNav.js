import React from 'react';
import { Link } from 'react-router-dom';
import './StaticNav.css';

class UserNav extends React.Component {
	constructor(props){
		super(props);
	}
	handleLogout() {
		window.localStorage.removeItem("zulie-user");
		this.props.history.push('/');
	}
	render(){
		return (
			<div id="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <div className="container">
					  <Link className="navbar-brand" to="/">Zulie</Link>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse" id="navbarNav">
					    <ul className="navbar-nav">
					      <li className="nav-item active">
					        <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
					      </li>
					      <li className="nav-item">
					      	<Link className="nav-link" to="/projects">Projects</Link>
					      </li>
					    </ul>
					  </div>
				  </div>
				</nav>
			</div>
		);
	}
}

export default UserNav;

