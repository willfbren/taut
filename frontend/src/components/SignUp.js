import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Flex,
    useToast,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp() {
    let history = useHistory();
    const toast = useToast();

    const initialState = {
        name: "",
        email: "",
        password: "",
        avatar: "",
        team_code: ""
    };

    const [form, setForm] = useState(initialState);

    let createUser = (form) => {
        fetch(`http://localhost:3000/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ form }),
            credentials: 'include'
        }).then(
			history.push("/sign-in"),
            toast({
                title: "Account Created",
                description: "You are now able to sign in.",
                status: "success",
                isClosable: true,
                position: "top",
            })
        );
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
        <Flex
            alignItems="center"
            justifyContent="center"
            size="750px"
            mx="auto"
        >
            <Box width="500px">
                <Text fontSize="4xl" mb="10px">
                    Sign Up
                </Text>
                <FormControl isRequired mb="15px">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        name="name"
                        placeholder="Name"
                        onChange={(e) => setValue(e)}
                        value={form.name}
                    />
                </FormControl>
                <FormControl isRequired mb="15px">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setValue(e)}
                        value={form.email}
                    />
                </FormControl>
                <FormControl isRequired mb="15px">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setValue(e)}
                        value={form.password}
                    />
                </FormControl>
                <FormControl mb="20px">
                    <FormLabel>Avatar</FormLabel>
                    <Input
                        name="avatar"
                        placeholder="Avatar"
                        onChange={(e) => setValue(e)}
                        value={form.avatar}
                    />
                </FormControl>
                <FormControl isRequired mb="20px">
                    <FormLabel htmlFor="team_code">Team Code</FormLabel>
                    <Input
                        name="team_code"
                        placeholder="Team Code"
                        onChange={(e) => setValue(e)}
                        value={form.team_code}
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

export default SignUp;
