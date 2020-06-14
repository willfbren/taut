import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import ChannelHeader from '../components/ChannelHeader'
import ChannelMessages from '../containers/ChannelMessages'
import MessageInput from "../components/MessageInput"


function ChannelContainer() {
    const currentChannel = useSelector((state) => state.currentChannel);

    return (
        <>
            {currentChannel
                ?
                <>
                    <ChannelHeader />
                    <ChannelMessages />
                    <MessageInput />
                </>
                : 
                <Box display="flex" alignItems="center" justifyContent="center" h="100%">
                    <Text fontSize="5xl" color="gray.700">No Channel Selected</Text>
                </Box>
            }
        </>
    );
}

export default ChannelContainer;
