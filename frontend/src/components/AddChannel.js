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
            <Stack isInline display="flex" alignItems="center" p="20px">
                <IconButton
                    icon="edit"
                    variantColor="teal"
                    onClick={onOpen}
                    isRound="true"
                    size="sm"
                    variant="outline"
                />
                <Link>Add Channel</Link>
            </Stack>

            <AddChannelModal isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default AddChannel;
