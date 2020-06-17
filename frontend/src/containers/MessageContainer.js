import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/core";
import MessageHeader from '../components/MessageHeader'

function Message(props) {

    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.50", dark: "gray.700" };

    return (
        <Box mt={3} p={4} shadow="md" borderWidth="1px" borderRadius={5} bg={bgColor[colorMode]}>
                <MessageHeader message={props.message} edit={props.edit} delete={props.delete} />
                <Text mt={2}>{props.message.content}</Text>
        </Box>
    );
}

export default Message;
