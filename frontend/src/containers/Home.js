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
            <Box textAlign="center">
                <Text fontSize="6xl" textAlign="center">
                    taut
                </Text>
                <Text fontSize="sm" color="gray.500">
                    <i>adjective</i> · <strong>/tôt/</strong> · stretched or pulled tight; not slack
                </Text>
                <Box mt="25px">
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
                <Text fontSize="xs" textAlign="center" m="10px 0" color="gray.500">
                    or
                </Text>
                <Button
                    variantColor="purple"
                    onClick={() => history.push("/create-team")}
                >
                    Create a Team
                </Button>
                </Box>
            </Box>
        </Flex>
    );
}

export default Home;
