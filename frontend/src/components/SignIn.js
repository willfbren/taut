import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	Flex,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignIn() {
	let history = useHistory();

	const initialState = {
		username: "",
		password: "",
	};

	const [form, setForm] = useState(initialState);

	let setValue = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	let resetForm = () => {
		setForm(initialState);
	};

	let handleSubmit = async (form) => {
		console.log(form);
		resetForm();
	};

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			size="750px"
			mx="auto"
		>
			<Box width="500px">
				<Text fontSize="4xl" mb="10px">
					Sign In
				</Text>
				<FormControl isRequired mb="15px">
					<FormLabel htmlFor="username">Username</FormLabel>
					<Input
						name="username"
						placeholder="Username"
						onChange={(e) => setValue(e)}
						value={form.username}
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
				<Button
					variantColor="teal"
					onClick={() => handleSubmit(form)}
					mr="10px"
				>
					Submit
				</Button>
				<Button variantColor="pink" onClick={() => history.push("/")}>
					Cancel
				</Button>
			</Box>
		</Flex>
	);
}

export default SignIn;
