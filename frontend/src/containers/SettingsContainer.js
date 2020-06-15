import React from "react";
import { IconButton, useDisclosure } from "@chakra-ui/core";
import SettingsDrawer from "../components/SettingsDrawer";

export default function SettingsContainer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <IconButton
                ref={btnRef}
                variantColor="teal"
                aria-label="settings"
                icon="settings"
                onClick={onOpen}
            />

            <SettingsDrawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            />
        </>
    );
}
