import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, Textarea, ModalFooter, Button } from '@chakra-ui/core'
import { useSelector } from 'react-redux'

function EditMessageModal(props) {

    const initialState = props.message
    const [ message, setMessage ] = useState(initialState)

    let handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    let submitAndClose = () => {
        props.edit(message)
        props.onClose()
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
                        onClick={() => submitAndClose()}
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