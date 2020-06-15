import { Box, Divider } from "@chakra-ui/core";
import React from "react";
import TopNav from "../components/TopNav";
import ChannelNav from "../components/ChannelNav";
import SignOut from "../components/SignOut";
import TeamList from "../components/TeamList";
import SettingsContainer from "./SettingsContainer"

function SidebarContainer() {
    return (
        <Box borderRight="1px" borderColor="gray.600">
            <TopNav />
            <Divider />
            <ChannelNav />
            <Divider />
            <TeamList />
            <SettingsContainer />
            <SignOut />
        </Box>
    );
}

export default SidebarContainer;
