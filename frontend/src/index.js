import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

const initialState = {
	users: [],
	currentUser: null,
	currentTeam: null,
	currentChannel: null
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return { ...currentState, users: action.userList}
			break;
		case 'ADD_USER':
			return { ...currentState, users: [...currentState.users, action.user] }
			break;
		case 'LOGIN_SUCCESS':
			return { ...currentState, currentUser: action.user, currentTeam: action.team }
			break;
		case 'LOGOUT_SUCCESS':
			return { ...currentState, currentUser: null, currentTeam: null }
			break;
		case 'SET_CHANNEL':
			return { ...currentState, currentChannel: null }
			break;
	}

	return currentState;
};

const store = createStore(
	reducer, 
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider>
			<ColorModeProvider>
				<CSSReset />
				<App />
			</ColorModeProvider>
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
