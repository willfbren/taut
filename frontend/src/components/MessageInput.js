import React from "react";
import { Box, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/core'

function MessageInput() {
    return (
        <Box h="5%">
            <InputGroup>
                <Input placeholder="Message..." />
                <InputRightElement
                    children={
                        <IconButton icon="arrow-forward" variantColor="teal" />
                    }
                />
            </InputGroup>
        </Box>
    );
}

export default MessageInput;
