import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, useDisclosure, useColorMode } from "@chakra-ui/core";
import ProfileDrawer from "../components/ProfileDrawer";

export default function SettingsContainer() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} rightIcon="chevron-down">
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem ref={btnRef} onClick={onOpen}>Edit Profile</MenuItem>
                    <MenuItem onClick={toggleColorMode}>
                        Toggle { colorMode === "light" ? "Dark" : "Light" } Mode
                    </MenuItem>
                </MenuList>
            </Menu>

            <ProfileDrawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            />
        </>
    );
}
