import React from "react";
import ChannelContainer from "../containers/ChannelContainer";
import MessageInput from "../components/MessageInput"
import { Box } from "@chakra-ui/core";

function MainContainer() {
    return (
        <Box m={15}>
            <ChannelContainer />
            <MessageInput />
        </Box>
    );
}

export default MainContainer;
