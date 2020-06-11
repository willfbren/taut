import React from "react";
import { Box } from "@chakra-ui/core";
import { useSelector } from "react-redux";

function ChannelContainer() {
    const currentChannel = useSelector((state) => state.currentChannel);

    return (
        <Box h="95%">
            {currentChannel
                ? currentChannel.channel_name
                : "No channel selected"
            }
        </Box>
    );
}

export default ChannelContainer;
