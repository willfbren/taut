import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	Flex,
	useToast
} from "@chakra-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignIn() {
	let history = useHistory();
	let dispatch = useDispatch()

	const toast = useToast()

	const formState = {
		username: "",
		password: "",
	};
	
	const [form, setForm] = useState(formState);

	let setValue = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	let resetForm = () => {
		setForm(formState);
	};

	let handleSubmit = async (form) => {
		fetch('http://localhost:3000/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({form}),
			credentials: 'include'
		})
		.then(resp => resp.json())
		.then(data => {
			if (data.success) {
				dispatch({ type: 'LOGIN_SUCCESS', user: data.user, team: data.team })
				history.push('/')
			} else {
				toast({
					title: 'Error',
					description: data.message,
					status: "warning",
					isClosable: true,
					position: "top"
				})
			}
		})
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
				<Button variantColor="pink" onClick={() => history.push('/')}>
					Cancel
				</Button>
			</Box>
		</Flex>
	);
}

export default SignIn;
