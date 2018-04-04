import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import SignupPage from './auth/SignupPage';
import LoginPage from './auth/LoginPage';

// User Routes
import DashboardPage from './user/DashboardPage';
import ProjectsPage from './user/ProjectsPage';

export const history = createHistory();

export default () => (
	<Router history={history}>
		<Switch>
			<Route
			  path="/"
			  exact={true}
			  component={LoginPage}
			/>
			<Route
			  path="/signup"
			  component={SignupPage}
			/>
			<Route
				path="/dashboard"
				component={DashboardPage}
			/>
			<Route
				path="/projects"
				component={ProjectsPage}
			/>
		</Switch>
	</Router>
);