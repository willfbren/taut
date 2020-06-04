import React from "react";
import socketIo from "socket.io-client";
import SignUp from './components/SignUp'

const socket = socketIo("http://localhost:3000");

function App() {
	return (
		<SignUp />
	);
}

export default App;
