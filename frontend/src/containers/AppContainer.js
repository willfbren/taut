import { Grid } from "@chakra-ui/core";
import React, { useEffect } from "react";
import SidebarContainer from "./SidebarContainer";
import MainContainer from "./MainContainer";

function AppContainer() {
	return (
		<Grid h="100vh" templateColumns="1fr 3fr">
			<SidebarContainer />
			<MainContainer />
		</Grid>
	);
}

export default AppContainer;
