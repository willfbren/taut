import React from 'react'
import { Box, Text } from '@chakra-ui/core'
import { useSelector } from 'react-redux'

function ChannelHeader() {

    const channel = useSelector(state => state.currentChannel)

    return(
        <Box h="95px" borderBottom="1px" borderColor="gray.600">
            <Text fontSize="3xl">{channel.channel_name}</Text>
            <Text>{channel.channel_description}</Text>
        </Box>
    )
}

export default ChannelHeader