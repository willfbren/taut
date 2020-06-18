import React, { useState } from "react";
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    IconButton,
} from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { FaRegSmile } from "react-icons/fa";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function MessageInput() {
    const user = useSelector((state) => state.currentUser);
    const channel = useSelector((state) => state.currentChannel);

    const messageState = {
        name: user.name,
        avatar: user.avatar,
        user_id: user.id,
        channel_id: channel.id,
        content: ``,
    };

    const [message, setMessage] = useState(messageState);

    let setValue = (e) => {
        setMessage({ ...message, content: e.target.value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/${channel.id}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
            credentials: "include",
        });

        clearInput();
    };

    let clearInput = () => {
        setMessage(messageState);
    };

    const [emojiPickerState, SetEmojiPicker] = useState(false);

    let emojiPicker;
    if (emojiPickerState) {
        emojiPicker = (
            <Picker
                title="Pick your emoji…"
                emoji="point_up"
                onSelect={(emoji) => pickEmoji(emoji)}
                style={{ position: "absolute", bottom: "60px", left: "250px" }}
            />
        );
    }

    let pickEmoji = (emoji) => {
        setMessage({ ...message, content: message.content + emoji.native });
        return triggerPicker();
    };

    function triggerPicker(event) {
        SetEmojiPicker(!emojiPickerState);
    }

    return (
        <Box pl="15px" pr="15px" pt="15px">
            <Box pos="absolute" left="0" bottom="0">
                {emojiPicker}
            </Box>
            <InputGroup>
                <InputLeftElement
                    children={
                        <Box
                            as={FaRegSmile}
                            color="gray.300"
                            cursor="pointer"
                            onClick={triggerPicker}
                        />
                    }
                />
                <Input
                    placeholder="Message..."
                    value={message.content}
                    onChange={(e) => setValue(e)}
                />
                <InputRightElement
                    children={
                        <IconButton
                            icon="arrow-forward"
                            variantColor="teal"
                            onClick={(e) => handleSubmit(e)}
                        />
                    }
                />
            </InputGroup>
        </Box>
    );
}

export default MessageInput;
