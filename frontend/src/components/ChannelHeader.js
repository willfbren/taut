import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";

function ChannelHeader() {
    const channel = useSelector((state) => state.currentChannel);

    return (
        <Box alignItems="center" p="20px">
            <Text fontSize="2xl" fontWeight="bold"># {channel.channel_name}</Text>
            <Text>{channel.channel_description}</Text>
        </Box>
    );
}

export default ChannelHeader;
