import { Box, Text, Link, Stack, useColorMode } from "@chakra-ui/core";
import React, { useEffect } from "react";
import AddChannel from "./AddChannel";
import { useDispatch, useSelector } from 'react-redux'
import { FaComment } from "react-icons/fa"

function ChannelNav() {
    const dispatch = useDispatch()

    const team = useSelector(state => state.currentTeam)
    const channels = useSelector(state => state.channels)
    const currentChannel = useSelector(state => state.currentChannel)

    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = { light: "purple.100", dark: "purple.500" };

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
        <Box>
            <Text fontWeight="bold" fontSize="lg" p="0 15px 5px 15px">
                Channels
            </Text>
            {channels.map((channel) => {
                return (
                    <Box key={channel.id} p="5px 0" backgroundColor={currentChannel && channel.id === currentChannel.id ? bgColor[colorMode] : null}>
                        <Stack
                            isInline
                            display="flex"
                            alignItems="center"
                            onClick={() => channelSelect(channel)}
                            pl="15px"
                        >
                            <Box as={FaComment} size="16px" color="teal.300" />
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
