import { Grid } from "@chakra-ui/core";
import React from "react";
import SidebarContainer from "./SidebarContainer";
import MainContainer from "./MainContainer";

function AppContainer() { 

	return (
		<Grid gridTemplateColumns="repeat(5, 1fr)" h="100vh">
			<Grid gridColumn="1">
				<SidebarContainer />
			</Grid>
			<Grid gridColumn="2 / 6">
				<MainContainer />
			</Grid>
		</Grid>
	);
}

export default AppContainer;
