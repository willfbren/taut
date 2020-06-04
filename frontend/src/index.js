import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

const initialState = {
	users: [],
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return { ...currentState, users: action.userList}
			break
		case 'ADD_USER':
			return { ...currentState, users: [...currentState.users, action.user] };
			break;
	}

	return currentState;
};

const store = createStore(reducer, initialState);

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
