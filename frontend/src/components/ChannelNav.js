import { Box, Text, IconButton } from '@chakra-ui/core'
import React, { useEffect } from 'react'

function ChannelNav() {

    useEffect(() => {
        fetch('http://localhost:3000/channels', {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return(
        <Box p="15px">
            <Text fontWeight="700" fontSize="lg" float="left">Channels</Text>
            <IconButton icon="add" size="sm" isRound="true" float="right" />
        </Box>
    )
}

export default ChannelNav;