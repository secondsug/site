import React from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';

function App() {
	return (

		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}>
					
				</Route>
				<Route path="/Signup" component={Signup}>
		
				</Route>

			</Switch>
		</div>

	)
}

export default App;

