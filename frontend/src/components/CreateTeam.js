import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Flex,
    useToast,
    Divider,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export default function CreateTeam() {
    let history = useHistory();
    const toast = useToast();

    const initialState = {
        name: "",
        email: "",
        password: "",
        avatar: "",
        team_name: "",
        team_code: ""
    };

    const [form, setForm] = useState(initialState);

    let createTeam = (form) => {
        fetch(`http://localhost:3000/create-team`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ form }),
            credentials: 'include'
        }).then(
            history.push("/sign-in"),
            toast({
                title: "Account & Team Created",
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
        createTeam(form);
        resetForm();
    };

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            size="900px"
            mx="auto"
        >
            <Box width="500px">
                <Text fontSize="4xl" mb="10px">
                    Create a Team
                </Text>
                <Text fontSize="2xl">User Info</Text>
                <Divider />
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
                <FormControl isRequired mb="20px">
                    <FormLabel htmlFor="password">Avatar</FormLabel>
                    <Input
                        name="avatar"
                        placeholder="Avatar"
                        onChange={(e) => setValue(e)}
                        value={form.avatar}
                    />
                </FormControl>
                <Text fontSize="2xl">Team Info</Text>
                <Divider />
                <FormControl isRequired mb="15px">
                    <FormLabel htmlFor="name">Team Name</FormLabel>
                    <Input
                        name="team_name"
                        placeholder="Team Name"
                        onChange={(e) => setValue(e)}
                        value={form.team_name}
                    />
                </FormControl>
                <FormControl isRequired mb="15px">
                    <FormLabel htmlFor="email">Team Code</FormLabel>
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
