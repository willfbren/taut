import { Box, Flex, Text, Button, Stack } from "@chakra-ui/core";
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
            <Stack>
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
                        variantColor="blue"
                        ml="5px"
                        onClick={() => history.push("/sign-in")}
                    >
                        Sign In
                    </Button>
                </Box>
				<Text fontSize="xs" textAlign="center">or</Text>
				<Button variantColor="purple" onClick={() => history.push("/create-team")}>Create a Team</Button>
            </Stack>
        </Flex>
    );
}

export default Home;
