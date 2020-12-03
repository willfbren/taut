import React from "react";
import ReactMarkdown from 'react-markdown'
import { Text } from "@chakra-ui/core";

export default function MessageContent(props) {
    return (
        <ReactMarkdown source={props.content} />
    );
}
