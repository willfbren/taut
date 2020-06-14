import { Box, Text, Link, Stack, Icon } from "@chakra-ui/core";
import React, { useEffect } from "react";
import AddChannel from "./AddChannel";
import { useDispatch, useSelector } from 'react-redux'
import { FaRegComment } from "react-icons/fa"

function ChannelNav() {
    const dispatch = useDispatch()

    const team = useSelector(state => state.currentTeam)
    const channels = useSelector(state => state.channels)

    useEffect(() => {
        fetch(`http://localhost:3000/${team.id}/channels`, {
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => { 
            dispatch({ type: 'GET_CHANNELS', channels: data })
        });
    }, []);

    let channelSelect = (selectedChannel) => {
        fetch(`http://localhost:3000/set-channel/${selectedChannel.id}`, {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'SET_CHANNEL', channel: data })
        })
    }

    return (
        <Box p="15px">
            <Text fontWeight="700" fontSize="lg" pb="5px">
                Channels
            </Text>
            {channels.map((channel) => {
                return (
                    <Box key={channel.id}>
                        <Stack
                            isInline
                            display="flex"
                            alignItems="center"
                            mb="10px"
                            onClick={ () => channelSelect(channel)}
                        >
                            <Box as={FaRegComment} size="16px" color="teal.300" />
                            <Link>{channel.channel_name}</Link>
                        </Stack>
                    </Box>
                );
            })}
            <AddChannel />
        </Box>
    );
}

export default ChannelNav;
