import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./containers/Home";
import AppContainer from "./containers/AppContainer";
import { useDispatch, useSelector } from "react-redux";
import CreateTeam from "./components/CreateTeam";
import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3000");

function App() {
	let dispatch = useDispatch();
	let user = useSelector((state) => state.currentUser);
	let currentUsers = useSelector(state => state.users)

	useEffect(() => {
		fetch("http://localhost:3000/check-user", {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					dispatch({ type: "LOGIN_SUCCESS", user: data.user, team: data.team, channel: data.channel });
				} else {
					console.log("Please login or signup to continue.");
				}
			});
	}, []);

	console.log(currentUsers)

	socket.on('sign-in', data => {
		dispatch({ type: 'ADD_USER', user: data.id })
	})	

	socket.on('sign-out', data => {
		dispatch({ type: 'REMOVE_USER', user: data.id })
	})

	return user ? (
		<BrowserRouter>
			<Route exact path="/" component={ () => <AppContainer user={user} /> }/>	
		</BrowserRouter>
	) : (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/sign-up" component={SignUp} />
			<Route exact path="/sign-in" component={SignIn} />
			<Route exact path="/create-team" component={CreateTeam} />
		</BrowserRouter>
	);
}

export default App;
