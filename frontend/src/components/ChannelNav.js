import { Box, Text, Link, Stack, Icon } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import AddChannel from "./AddChannel";
import { useDispatch } from 'react-redux'

function ChannelNav() {
    const [ channels, setChannels ] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:3000/channels", {
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => setChannels(data));
    }, [channels]);

    let channelSelect = (selectedChannel) => {
        fetch('http://localhost:3000/set-channel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ selectedChannel }),
            credentials: 'include'
        })
        dispatch({ type: 'SET_CHANNEL', channel: selectedChannel })
    }

    return (
        <Box p="15px">
            <Text fontWeight="700" fontSize="lg" pb="5px">
                Channels
            </Text>
            {channels.map((channel) => {
                return (
                    <Stack
                        isInline
                        display="flex"
                        alignItems="center"
                        mb="10px"
                        key={channel.id}
                        onClick={ () => channelSelect(channel)}
                    >
                        <Icon name="chat" color="gray.400" />
                        <Link>{channel.channel_name}</Link>
                    </Stack>
                );
            })}
            <AddChannel />
        </Box>
    );
}

export default ChannelNav;
