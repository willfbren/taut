import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import socketIo from "socket.io-client";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./containers/Home";
import AppContainer from "./containers/AppContainer";
import { useDispatch, useSelector } from "react-redux";

const socket = socketIo("http://localhost:3000");

function App() {
	let dispatch = useDispatch();
	let user = useSelector((state) => state.currentUser);

	useEffect(() => {
		fetch("http://localhost:3000/check-user", {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					dispatch({ type: "LOGIN_SUCCESS", user: data });
					console.log(data);
				} else {
					console.log("please login or signup to continue");
				}
			});
	}, []);

	return user ? (
		<BrowserRouter>
			<Route exact path="/" component={ () => <AppContainer user={user} />}/>
		</BrowserRouter>
	) : (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/sign-up" component={SignUp} />
			<Route exact path="/sign-in" component={SignIn} />
		</BrowserRouter>
	);
}

export default App;
