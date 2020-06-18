import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, useDisclosure, useColorMode, useToast, Text } from "@chakra-ui/core";
import ProfileDrawer from "../components/ProfileDrawer";
import { useDispatch } from 'react-redux'

export default function SettingsContainer() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    let toast = useToast();
	let dispatch = useDispatch();

	let handleSignOut = () => {
		fetch("http://localhost:3000/sign-out", {
			credentials: "include",
		})
			.then((res) => res.json())
			.then(
				dispatch({ type: "LOGOUT_SUCCESS" }),
				toast({
					title: "Success",
					description: "Logged out successfully",
					status: "info",
					isClosable: true,
					position: "top",
				})
			);
	};

    return (
        <>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} leftIcon="settings" rightIcon="chevron-down" pos="absolute" bottom="20px" left="20px" variantColor="teal">
                    Settings
                </MenuButton>
                <MenuList>
                    <MenuItem ref={btnRef} onClick={onOpen}>Edit Profile</MenuItem>
                    <MenuItem onClick={toggleColorMode}>
                        Toggle { colorMode === "light" ? "Dark" : "Light" } Mode
                    </MenuItem>
                    <MenuItem onClick={() => handleSignOut()}>
                        <Text>Sign Out</Text>
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
