import React from "react";
import { Box, Text } from "@chakra-ui/core";
import MessageHeader from './MessageHeader'

function Message(props) {
    return (
        <Box mt={3} p={4} shadow="md" borderWidth="1px" borderRadius={5}>
                <MessageHeader message={props.message}/>
                <Text mt={2}>{props.message.content}</Text>
        </Box>
    );
}

export default Message;
