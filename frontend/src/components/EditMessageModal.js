import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, Textarea, ModalFooter, Button } from '@chakra-ui/core'
import { useSelector } from 'react-redux'

function EditMessageModal(props) {
    const channel = useSelector(state => state.currentChannel)

    const initialState = props.message

    const [ message, setMessage ] = useState(initialState)

    let handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    let handleUpdate = () => {
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message }),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Message</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <Textarea
                            name="content"
                            onChange={(e) => handleChange(e)}
                            value={message.content}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variantColor="green"
                        mr={3}
                        onClick={() => handleUpdate()}
                    >
                        Save
                    </Button>
                    <Button variantColor="blue" onClick={props.onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default EditMessageModal;