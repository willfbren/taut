import React from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem, useDisclosure } from "@chakra-ui/core";
import EditMessageModal from './EditMessageModal'

export default function MessageSettings(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="message-settings"
                    icon="chevron-down"
                    variant="ghost"
                    variantColor="teal"
                    isRound="true"
                    size=""
                >
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onOpen}>Edit Message</MenuItem>
                    <MenuItem>Delete Message</MenuItem>
                </MenuList>
            </Menu>

            <EditMessageModal isOpen={isOpen} onClose={onClose} message={props.message} edit={props.edit} />
        </>
    );
}
