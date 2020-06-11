import React from "react";
import { Text, Box, Stack, Avatar } from "@chakra-ui/core";
import { useSelector } from "react-redux";

function TopNav() {
    const user = useSelector(state => state.currentUser);
    const team = useSelector(state => state.currentTeam);

    return (
        <Box p="15px" minH="75px">
            <Text fontWeight="700" fontSize="lg" mb="10px">
                {team.team_name}
            </Text>
            <Stack isInline display="flex" alignItems="center" >
                <Avatar name={user.name} size="sm" />
                <Text>{user.name}</Text>
            </Stack>
        </Box>
    );
}

export default TopNav;
