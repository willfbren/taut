import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import socketIo from "socket.io-client";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./containers/Home";

const socket = socketIo("http://localhost:3000");

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/sign-up" component={SignUp} />
			<Route exact path="/sign-in" component={SignIn} />
		</BrowserRouter>
	);
}

export default App;
