import React, { useState } from "react";
import {
    Link,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from "@chakra-ui/core";
import { useDispatch } from "react-redux";

function AddChannel() {
    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const formState = {
        channel_name: "",
        description: "",
    };

    const [form, setForm] = useState(formState);

    let setValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    let handleSubmit = async (form) => {
        fetch("http://localhost:3000/add-channel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ form }),
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => {
            resetForm();
            onClose();
            dispatch({ type: 'SET_CHANNEL', channel: data });
        });
    };

    let resetForm = () => {
        setForm(formState);
    };

    return (
        <>
            <Stack isInline display="flex" alignItems="center" mt="25px">
                <IconButton
                    icon="add"
                    variantColor="teal"
                    size="sm"
                    isRound="true"
                    onClick={onOpen}
                />
                <Link>Add Channel</Link>
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Channel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl mb="15px">
                            <FormLabel htmlFor="channel_name">
                                Channel Name
                            </FormLabel>
                            <Input
                                name="channel_name"
                                placeholder="Channel Name"
                                onChange={(e) => setValue(e)}
                                value={form.channel_name}
                            />
                        </FormControl>
                        <FormControl mb="20px">
                            <FormLabel htmlFor="description">
                                Description
                            </FormLabel>
                            <Input
                                name="description"
                                placeholder="Description"
                                onChange={(e) => setValue(e)}
                                value={form.description}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variantColor="green"
                            mr={3}
                            onClick={() => handleSubmit(form)}
                        >
                            Create
                        </Button>
                        <Button variantColor="blue" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddChannel;
