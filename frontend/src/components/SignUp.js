import React, { useState } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	Divider,
} from "@chakra-ui/core";

function SignUp() {

	const initialState = {
		username: "",
		email: "",
		password: "",
	};

	const [form, setForm] = useState(initialState);

	let createUser = (form) => {
		console.log(form);
		fetch(`http://localhost:3000/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: form.username,
				email: form.email,
				password: form.password,
			}),
		});
	};

	let setValue = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	let resetForm = () => {
		setForm(initialState);
	};

	let handleSubmit = async (form) => {
		createUser(form);
		resetForm();
	};

	return (
		<Box maxW="500px" h="100%" mx="auto">
			<Text fontSize="3xl">Sign Up</Text>
			<Divider />
			<FormControl isRequired mb="15px">
				<FormLabel htmlFor="username">Username</FormLabel>
				<Input
					name="username"
					placeholder="Username"
					onChange={(e) => setValue(e)}
					value={form.username}
				/>
			</FormControl>
			<FormControl isRequired mb="15px">
				<FormLabel htmlFor="name">Email</FormLabel>
				<Input
					name="email"
					placeholder="Email"
					onChange={(e) => setValue(e)}
					value={form.email}
				/>
			</FormControl>
			<FormControl isRequired mb="20px">
				<FormLabel htmlFor="password">Password</FormLabel>
				<Input
					name="password"
					placeholder="Password"
					type="password"
					onChange={(e) => setValue(e)}
					value={form.password}
				/>
			</FormControl>
			<Button variantColor="teal" onClick={() => handleSubmit(form)}>
				Submit
			</Button>
		</Box>
	);
}

export default SignUp;
