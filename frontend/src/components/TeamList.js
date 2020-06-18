import React, { useEffect, useState } from "react";
import { Text, Box } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import TeamMember from '../components/TeamMember'

function TeamList() {

    const team = useSelector(state => state.currentTeam)
    const currentUser = useSelector(state => state.currentUser)

    const [ userList, setUserList ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/${team.id}/users`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => setUserList(data))
    }, [])
    
    return (
        <Box p="20px">
            <Text fontWeight="bold" fontSize="xl" pb="10px">Team Members</Text>
            {userList.map(user => user.id === currentUser.id ? null : <TeamMember key={user.id} user={user}/>)}
        </Box>
    );
}

export default TeamList;
