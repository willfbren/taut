import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import MessageHeader from "../components/MessageHeader";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown'
import MessageContent from "./MessageContent";
import Linkify from 'react-linkify';

function Message(props) {
    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.50", dark: "gray.700" };

    return (
        <Box
            mt={3}
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius={5}
            bg={bgColor[colorMode]}
        >
            <MessageHeader
                message={props.message}
                edit={props.edit}
                delete={props.delete}
            />
            <Box mt={2}>                
                <ReactMarkdown source={props.message.content} />
            </Box>
        </Box>
    );
}

export default Message;
