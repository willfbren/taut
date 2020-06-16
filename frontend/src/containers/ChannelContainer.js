import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import ChannelHeader from '../components/ChannelHeader'
import ChannelMessages from '../containers/ChannelMessages'
import MessageInput from "../components/MessageInput"


function ChannelContainer() {
    const currentChannel = useSelector((state) => state.currentChannel);

    const { colorMode, toggleColorMode } = useColorMode();
    const borderColor = { light: "gray.300", dark: "teal.700" };

    return (
        <>
            {currentChannel
                ?
                <>
                    <Box h="10vh" borderBottom="1px" borderBottomColor={borderColor[colorMode]}>
                        <ChannelHeader />
                    </Box>
                    <Box h="83vh" overflow="scroll" borderBottom="1px" borderBottomColor={borderColor[colorMode]}>
                        <ChannelMessages/>
                    </Box>
                    <Box h="6vh">
                        <MessageInput/>
                    </Box>
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
