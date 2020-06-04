import React from "react";
import socketIo from "socket.io-client";
import { BrowserRouter, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

const socket = socketIo("http://localhost:3000");

function App() {
	return (
		<BrowserRouter>
			<Route exact path='/sign-up' component={SignUp} />
			<Route exact path='/sign-in' component={SignIn} />
		</BrowserRouter>
	);
}

export default App;
