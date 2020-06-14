import React from "react";
import {
    Link,
    IconButton,
    useDisclosure,
    Stack,
} from "@chakra-ui/core";
import AddChannelModal from "../components/AddChannelModal";

function AddChannel() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Stack isInline display="flex" alignItems="center" mt="25px">
                <IconButton
                    icon="add"
                    color="teal.300"
                    size="sm"
                    isRound="true"
                    onClick={onOpen}
                />
                <Link>Add Channel</Link>
            </Stack>

            <AddChannelModal isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default AddChannel;
