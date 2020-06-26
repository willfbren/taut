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

    const { colorMode } = useColorMode();
    const bgColor = { light: "teal.100", dark: "teal.800" };

    useEffect(() => {
        fetch(`http://localhost:3000/teams/${team.id}/channels`, {
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
            <Text fontWeight="bold" fontSize="xl" p="20px 20px 5px 20px">
                Channels
            </Text>
            {channels.map((channel) => {
                return (
                    <Box key={channel.id} backgroundColor={currentChannel && channel.id === currentChannel.id ? bgColor[colorMode] : null}>
                        <Stack
                            isInline
                            display="flex"
                            alignItems="center"
                            onClick={() => channelSelect(channel)}
                            p="5px 20px"
                        >
                            <Box as={FaComment} size="18px" color="teal.300" />
                            <Text as={Link} fontSize="lg" fontWeight={currentChannel && channel.id === currentChannel.id ? "bold" : null}>{channel.channel_name}</Text>
                        </Stack>
                    </Box>
                );
            })}
            <AddChannel />
        </Box>
    );
}

export default ChannelNav;
