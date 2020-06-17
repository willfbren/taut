import React, { useEffect } from "react";
import { Box, Stack } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import MessageContainer from "./MessageContainer";
import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3000");

function ChannelMessages() {
    const dispatch = useDispatch()
    const channel = useSelector(state => state.currentChannel);
    const messages = useSelector(state => state.channelMessages)

    useEffect(() => {
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch({ type: 'GET_CHANNEL_MESSAGES', messages: data })
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

    let handleEdit = (editedMessage) => {
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ editedMessage }),
            credentials: 'include'
        })
    }

    socket.on('edited-message', messageList => {
        dispatch({ type: 'GET_CHANNEL_MESSAGES', messages: messageList })
    }) 
    
    socket.on('new-message', message => {
        dispatch({ type: 'GET_CHANNEL_MESSAGES', messages: [...messages, message] })
    })

    socket.on('deleted-message', messageList => {
        dispatch({ type: 'GET_CHANNEL_MESSAGES', messages: messageList })
    })

    return (
        <Box p="15px">
            <Stack>
                {messages.map(message => {
                    return <MessageContainer key={message.id} message={message} edit={handleEdit} delete={handleDelete} />
                })}
            </Stack>
        </Box>
    );
}

export default ChannelMessages;
