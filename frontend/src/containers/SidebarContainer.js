import { Box, Divider } from '@chakra-ui/core'
import React from "react";
import TopNav from '../components/TopNav'
import ChannelNav from '../components/ChannelNav'

function SidebarContainer() {
    return (
		<Box borderRight="1px" borderColor="gray.600">
            <TopNav />
            <Divider />
            <ChannelNav />
		</Box>
	);
}

export default SidebarContainer