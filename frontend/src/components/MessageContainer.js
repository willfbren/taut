import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { Box, Text } from "@chakra-ui/core";
import MessageHeader from './MessageHeader'
import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3000");

function Message(props) {

    const channel = useSelector(state => state.currentChannel)

    const initialState = props.message

    const [ message, setMessage ] = useState(initialState)

    let handleEdit = (message) => {
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message }),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => { 
            setMessage(data)
        })
    }

    socket.on('edit-message', editedMessage => {
        return editedMessage.id === message.id ? setMessage(editedMessage) : null
    }) 

    return (
        <Box mt={3} p={4} shadow="md" borderWidth="1px" borderRadius={5}>
                <MessageHeader message={props.message} edit={handleEdit} />
                <Text mt={2}>{message.content}</Text>
        </Box>
    );
}

export default Message;
