import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import ChannelHeader from '../components/ChannelHeader'
import ChannelMessages from '../containers/ChannelMessages'

function ChannelContainer() {
    const currentChannel = useSelector((state) => state.currentChannel);

    return (
        <Box h="95%">
            {currentChannel
                ?
                <>
                    <ChannelHeader />
                    <ChannelMessages />
                </>
                : 
                <Box display="flex" justifyContent="center" h="100%" alignItems="center">
                    <Text fontSize="5xl" color="gray.700">No Channel Selected</Text>
                </Box>
            }
        </Box>
    );
}

export default ChannelContainer;
