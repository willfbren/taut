import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    Stack,
    Box,
    FormLabel
} from "@chakra-ui/core";
import { useSelector, useDispatch } from 'react-redux'

export default function ProfileDrawer(props) {

    const dispatch = useDispatch()

    const user = useSelector(state => state.currentUser)

    const initialState = {
        name: user.name,
        email: user.email,
        avatar: user.avatar || ""
    }

    const [ form, setForm ] = useState(initialState)

    let updateUser = () => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ form }),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'UPDATE_USER', user: data })
        })
    }

    let setValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Drawer
                isOpen={props.isOpen}
                placement="right"
                onClose={props.onClose}
                finalFocusRef={props.btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Edit Profile</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input
                                    name="name"
                                    value={form.name}
                                    onChange={(e) => setValue(e)}
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    name="email"
                                    value={form.email}
                                    onChange={(e) => setValue(e)}
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor="avatar">Avatar</FormLabel>
                                <Input
                                    name="avatar"
                                    value={form.avatar}
                                    onChange={(e) => setValue(e)}
                                />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant="outline"
                            mr={3}
                            onClick={props.onClose}
                        >
                            Cancel
                        </Button>
                        <Button color="blue" onClick={() => updateUser()}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
