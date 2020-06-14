import React from "react";
import { Box, Heading, Text, Stack, Avatar } from '@chakra-ui/core'

function Message(props) {
    
    return (
        <Box mt={3} p={4} shadow="md" borderWidth="1px" borderRadius={5}>
            <Stack isInline display="flex" alignItems="center" >
                <Avatar name={props.name} size="xs" />
                <Heading fontSize="lg">{props.name}</Heading>
            </Stack>
            <Text mt={2}>{props.content}</Text>
        </Box>
    );
}

export default Message;
