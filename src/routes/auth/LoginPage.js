import React from 'react';
import axios from 'axios';
import StaticNav from '../../components/nav/StaticNav';
import './auth.css';

class LoginPage extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			clearencelevel: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// reference the state
		const state = this.state;
		// get the state value from the form
		state[event.target.name] = event.target.value;
		// set the state based on the state value reference from above
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();
		// window.localStorage.setItem('zulie-user', JSON.stringify(this.state));
		// this.props.history.push('/dashboard');
		console.log("State:", this.state);
		axios
			.get('https://eown-web.herokuapp.com/api/v1/users/login', this.state)
			.then((result) => {
				document.cookie = JSON.stringify(result.data);
				window.localStorage.setItem('zulie-user', JSON.stringify(result.data));
				this.props.history.push('/dashboard');
			})
			.catch((err) => {
				console.log('error signing up user', err);
			});
	}

	componentWillMount(){
		// check if a user is already logged in
		if (!window.localStorage.getItem('zulie-user')) {
			console.log('No User Detected in your local Storage');
		} else {
			setTimeout(() => {
				this.props.history.push('/dashboard');
			}, 2000)
		}
	}

	render() {
		const {
		    email, password
		} = this.state;
		return (
			<div>
				<StaticNav />
				<div id="authContainer">
					<h1 id="title">Login</h1>
					<hr />
					<form onSubmit={this.handleSubmit}>
						<label>
							Email:
						</label>
						<input 
							type="email"
							name= 'email'
							value={email}
							onChange={this.handleChange}
							className="form-control"
						/>
						<br />
						<label>
							Password:
						</label>
						<input 
							type="password"
							name= 'password'
							value={password} 
							onChange={this.handleChange} 
							className="form-control"
						/>
						<br />
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default LoginPage;