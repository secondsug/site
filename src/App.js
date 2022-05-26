import React from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy'


function App() {
	return (

		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}>
					
				</Route>
				<Route path="/Signup" component={Signup}>
				</Route>
				<Route path="/privacy" component={Privacy}>
				</Route>

			</Switch>
		</div>

	)
}

export default App;

