import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/core'
import { useSelector } from 'react-redux'

function ChannelMessages() {

    const selectedChannel = useSelector(state => state.currentChannel)

    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/messages', {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => setMessages(data))
    }, [selectedChannel])

    return(
        <Box>
            {
            messages ? 
            messages.map(message => {
                return message.content
            }) :
            "No messages yet."
            }
        </Box>
    )
}

export default ChannelMessages