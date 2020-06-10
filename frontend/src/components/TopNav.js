import React from "react";
import { Text, Box } from "@chakra-ui/core";
import { useSelector } from "react-redux";

function TopNav() {
    const user = useSelector(state => state.currentUser);
    const team = useSelector(state => state.currentTeam);

    return (
        <Box p="15px" minH="75px">
            <Text fontWeight="700" fontSize="lg">
                {team.team_name}
            </Text>
            <Text>{user.username}</Text>
        </Box>
    );
}

export default TopNav;
