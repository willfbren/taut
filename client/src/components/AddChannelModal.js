import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl,
FormLabel, Input, ModalFooter, Button } from '@chakra-ui/core'
import { useDispatch, useSelector } from "react-redux";

function AddChannelModal(props) {

    const dispatch = useDispatch();
    const channels = useSelector(state => state.channels)

    const formState = {
        channel_name: "",
        description: "",
    };

    const [form, setForm] = useState(formState);

    let setValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    let handleSubmit = (form) => {
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
            props.onClose();
            dispatch({ type: 'ADD_CHANNEL', channel: data, channels: [...channels, data] });
        });
    };

    let resetForm = () => {
        setForm(formState);
    };

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
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
                        <FormLabel htmlFor="description">Description</FormLabel>
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
                    <Button variantColor="blue" onClick={props.onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default AddChannelModal;
