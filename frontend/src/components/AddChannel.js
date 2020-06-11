import React, { useState } from "react";
import {
    ListItem,
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
} from "@chakra-ui/core";

function AddChannel() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const formState = {
        channel_name: "",
        description: ""
    }

    const [form, setForm] = useState(formState)

	let setValue = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

    let handleSubmit = async (form) => {
        fetch('http://localhost:3000/add-channel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ form }),
            credentials: 'include'
        })
        resetForm()
        onClose()
    }

	let resetForm = () => {
		setForm(formState);
	};

    return (
        <>
            <ListItem mt="25px">
                <IconButton
                    icon="add"
                    color="gray.300"
                    size="sm"
                    mr="7px"
                    onClick={onOpen}
                />
                <Link>Add Channel</Link>
            </ListItem>

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
                        <Button variantColor="green" mr={3} onClick={() => handleSubmit(form)}>Create</Button>
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
