import React from "react";
import { Box, Text, Stack } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { FaHashtag } from "react-icons/fa";
function ChannelHeader() {
    const channel = useSelector((state) => state.currentChannel);

    return (
        <Box p="15px">
            <Stack isInline display="flex" alignItems="center">
                <Box as={FaHashtag} size="24px" />
                <Text fontSize="3xl">{channel.channel_name}</Text>
            </Stack>
            <Text>{channel.channel_description}</Text>
        </Box>
    );
}

export default ChannelHeader;
