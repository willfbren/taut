import React from "react";
import { Flex, Avatar, Box, Text, Stack } from '@chakra-ui/core'

function TeamMember(props) {
    return (
        <Stack pb="15px">
            <Flex alignItems="center">
                <Avatar src={props.user.avatar} name={props.user.name} size="xs" />
                <Box ml="3">
                    <Text>
                        {props.user.name}
                    </Text>
                </Box>
            </Flex>
        </Stack>
    );
}

export default TeamMember;
