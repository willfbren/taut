import React from "react";
import { Stack, Avatar, Heading, Text } from '@chakra-ui/core'
import { useSelector } from 'react-redux'
import MessageSettings from './MessageSettings'


export default function MessageHeader(props) {
    const { created_at, name, avatar } = props.message
    const user = useSelector(state => state.currentUser)
    const timestamp = new Date(created_at).toLocaleTimeString('en-US', {hour12: true})

    return (
        <Stack isInline display="flex" alignItems="center" w="100%">
            <Avatar name={name} src={avatar} size="xs" />
            <Heading fontSize="lg">{name}</Heading>
            <Text fontSize="xs" color="gray.500">
                {timestamp}
            </Text>
            {props.message.user_id === user.id ? <MessageSettings message={props.message} edit={props.edit} delete={props.delete} /> : null}
        </Stack>
    );
}
