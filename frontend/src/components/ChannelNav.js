import { Box, Text, List, ListItem, ListIcon, Link, Stack, Icon } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import AddChannel from './AddChannel'

function ChannelNav() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/channels", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => setChannels(data));
    }, [channels]);

    return (
        <Box p="15px">
            <Text fontWeight="700" fontSize="lg" pb="5px">
                Channels
            </Text>
            {channels.map(channel => {
                return <Stack isInline display="flex" alignItems="center" style={{ cursor: "pointer" }}>
                    <Icon name="chat" color="gray.400" />
                    <Text>{channel.channel_name}</Text>
                </Stack>
            })}
            <AddChannel />
        </Box>
    );
}

export default ChannelNav;
