import { Box, Text, List, ListItem, ListIcon, Link } from "@chakra-ui/core";
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
            <List spacing={2}>
                {channels.map((channel) => {
                    return (
                        <ListItem key={channel.id}>
                            <ListIcon icon="chat" color="gray.600" />
                            <Link>{channel.channel_name}</Link>
                        </ListItem>
                    );
                })}
                <AddChannel />
            </List>
        </Box>
    );
}

export default ChannelNav;
