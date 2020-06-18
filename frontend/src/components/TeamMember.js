import React from "react";
import { Flex, Avatar, AvatarBadge, Box, Text, Stack } from "@chakra-ui/core";
import { useSelector } from "react-redux";

function TeamMember(props) {
    const online = useSelector((state) => state.users);

    return (
        <Stack pb="15px">
            <Flex alignItems="center">
                <Avatar
                    src={props.user.avatar}
                    name={props.user.name}
                    size="xs"
                >
                    <AvatarBadge bg="green.500" size="1.25em" />
                </Avatar>
                <Box ml="3">
                    <Text>{props.user.name}</Text>
                </Box>
            </Flex>
        </Stack>
    );
}

export default TeamMember;
