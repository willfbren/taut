import React, { useState } from "react";
import { Box, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/core'
import { useSelector } from "react-redux";

function MessageInput() {

    const user = useSelector(state => state.currentUser)
    const channel = useSelector(state => state.currentChannel)

    const messageState = {
        name: null,
        avatar: null,
        user_id: null,
        channel_id: null,
        content: ""
    } 

    const [ message, setMessage ] = useState(messageState)

    let setValue = (e) => {
        setMessage({ name: user.name, avatar: user.avatar, user_id: user.id, channel_id: channel.id, content: e.target.value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message }),
            credentials: 'include'
        })

        clearInput()
    }

    let clearInput = () => {
        setMessage(messageState)
    }

    return (
        <Box h="5%">
            <InputGroup>
                <Input placeholder="Message..." value={message.content} onChange={ (e) => setValue(e) }/>
                <InputRightElement
                    children={
                        <IconButton icon="arrow-forward" variantColor="teal" onClick={(e) => handleSubmit(e)} />
                    }
                />
            </InputGroup>
        </Box>
    );
}

export default MessageInput;
