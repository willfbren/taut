import { Box, Flex, Text, Button } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
	let history = useHistory();

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			size="750px"
			mx="auto"
		>
			<Box>
				<Text fontSize="6xl" textAlign="center">
					Taut
				</Text>
				<Button
					variantColor="teal"
					mr="5px"
					onClick={() => history.push("/sign-up")}
				>
					Sign Up
				</Button>
				<Button
					variantColor="teal"
					ml="5px"
					onClick={() => history.push("/sign-in")}
				>
					Sign In
				</Button>
			</Box>
		</Flex>
	);
}

export default Home;
