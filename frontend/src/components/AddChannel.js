import React from "react";
import {
    Link,
    Icon,
    useDisclosure,
    Stack,
} from "@chakra-ui/core";
import AddChannelModal from "../components/AddChannelModal";

function AddChannel() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Stack isInline display="flex" alignItems="center" mt="25px">
                <Icon
                    name="plus-square"
                    color="teal.300"
                    onClick={onOpen}
                />
                <Link>Add Channel</Link>
            </Stack>

            <AddChannelModal isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default AddChannel;
