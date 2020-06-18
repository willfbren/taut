import React from "react";
import { Text, Box, Stack, Avatar } from "@chakra-ui/core";
import { useSelector } from "react-redux";

function TopNav() {
    const user = useSelector(state => state.currentUser);
    const team = useSelector(state => state.currentTeam);

    return (
        <Box p="20px">
            <Text fontWeight="700" fontSize="2xl" pb="10px">
                {team.team_name}
            </Text>
            <Stack isInline display="flex" alignItems="center" >
                <Avatar name={user.name} src={ user.avatar ? user.avatar : null } size="md" />
                <Text fontSize="lg">{user.name}</Text>
            </Stack>
        </Box>
    );
}

export default TopNav;
