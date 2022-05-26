import React from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy'
import About from './pages/About'
import Service from './pages/Service'
import Partner from './pages/Partner'


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

                 <Route path="/services" component={Service}>
				</Route>

                <Route path="/about" component={About}>
				</Route>

                  <Route path="/partners" component={Partner}>
				</Route>



			</Switch>
		</div>

	)
}

export default App;

