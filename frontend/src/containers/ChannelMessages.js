import React, { useEffect, useState } from "react";
import { Box, Stack } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import MessageContainer from "../components/MessageContainer";
import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3000");

function ChannelMessages() {
    const channel = useSelector(state => state.currentChannel);
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => {
            setMessages(data)
        });

    }, [channel]);

    let handleDelete = (message) => {
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message }),
            credentials: 'include'
        })
    }
    
    socket.on('new-message', message => {
        setMessages([...messages, message])
    })

    socket.on('deleted-message', messages => {
        setMessages(messages)
    })

    return (
        <Box p="15px">
            <Stack>
                {messages.map(message => {
                    return <MessageContainer key={message.id} message={message} delete={handleDelete} />
                })}
            </Stack>
        </Box>
    );
}

export default ChannelMessages;
