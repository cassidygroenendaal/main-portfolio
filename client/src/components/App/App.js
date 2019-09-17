import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import API from '../../lib/API';
// import Navigation from '../../components/Navigation';
import Home from '../../pages/Home';
import CodeProject1 from '../../pages/CodeProject1';
import CodeProject2 from '../../pages/CodeProject2';
import CodeProject3 from '../../pages/CodeProject3';
import CodeProject4 from '../../pages/CodeProject4';
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
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							exact
							path="/code/project/1"
							component={CodeProject1}
						/>
						<Route
							exact
							path="/code/project/2"
							component={CodeProject2}
						/>
						<Route
							exact
							path="/code/project/3"
							component={CodeProject3}
						/>
						<Route
							exact
							path="/code/project/4"
							component={CodeProject4}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
