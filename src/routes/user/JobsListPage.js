import React from 'react';
import axios from 'axios';
import UserNav from '../../components/nav/UserNav';


class ProjectsPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			clearenceLevel: '',
			jobs: []
		};
	}

	componentWillMount(){
		if (!window.localStorage.getItem('zulie-user')) {
			this.props.history.push('/');
		} else {
			let localUser = JSON.parse(window.localStorage.getItem('zulie-user'));
			console.log('Local Storage User:', localUser);
			axios
				.get('https://eown-web.herokuapp.com/api/v1/users/' + localUser._id)
				.then((result) => {
					window.localStorage.setItem('zulie-user', JSON.stringify(result.data));
					this.setState({
						email: result.data.email,
						clearenceLevel: result.data.clearenceLevel,
						jobs: result.data.jobs || []
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	render(){
		console.log('State:', this.state);
		return (
			<div>
				<UserNav />
				<div id="container-fluid">
					<div id="userInfo">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h3>{this.state.email} Level: {this.state.clearenceLevel}</h3>
								</div>
							</div>
						</div>
					</div>
					<h1>Jobs Page</h1>
				</div>
			</div>
		);
	}
}

export default ProjectsPage;