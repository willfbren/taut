import React from "react";
import { Box, Text, Stack } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { FaHashtag } from "react-icons/fa";
function ChannelHeader() {
    const channel = useSelector((state) => state.currentChannel);

    return (
        <Box h="95px" borderBottom="1px" borderColor="gray.600">
            <Stack isInline display="flex" alignItems="center">
                <Box as={FaHashtag} size="24px" />
                <Text fontSize="3xl">{channel.channel_name}</Text>
            </Stack>
            <Text>{channel.channel_description}</Text>
        </Box>
    );
}

export default ChannelHeader;
