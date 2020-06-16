import { Box, useColorMode } from "@chakra-ui/core";
import React from "react";
import TopNav from "../components/TopNav";
import ChannelNav from "../components/ChannelNav";
import SignOut from "../components/SignOut";
import TeamList from "../components/TeamList";
import SettingsContainer from "./SettingsContainer"

function SidebarContainer() {

    const { colorMode, toggleColorMode } = useColorMode();
    const borderColor = { light: "gray.300", dark: "teal.700" };

    return (
        <Box borderRight="1px" borderColor={borderColor[colorMode]}>
            <TopNav />
            <ChannelNav />
            <TeamList />
            <SettingsContainer />
            <SignOut />
        </Box>
    );
}

export default SidebarContainer;
