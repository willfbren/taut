import React, { useEffect, useState } from "react";
import { Box, Stack } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import Message from "../components/Message";
import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3000");

function ChannelMessages() {
    const selectedChannel = useSelector((state) => state.currentChannel);

    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/${selectedChannel.id}/messages`, {
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => setMessages(data));

    }, [selectedChannel]);

    socket.on('new-message', message => {
        setMessages([...messages, message])
    })

    return (
        <Box>
            <Stack>
                {messages.map(message => {
                    return <Message key={message.id} name={message.name} avatar={message.avatar} content={message.content} user_id={message.user_id} />
                })}
            </Stack>
        </Box>
    );
}

export default ChannelMessages;
