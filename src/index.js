import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import Routes, { history } from './routes/index'; 
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Context = createContext();

const { Provider } = Context

const App = (
	<Provider history={history}>
		<Routes />
	</Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();