import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import API from '../../lib/API';
// import Navigation from '../../components/Navigation';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import './App.css';

class App extends Component {
	// componentDidMount() {
	// 	API.Test
	// 		.testAll()
	// 		.then((response) => response.data)
	// 		.catch((err) => console.log(err));
	// }

	render() {
		return (
			<div className="App">
				{/* <Navigation /> */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
