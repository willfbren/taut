import React from 'react'
import { Box, Button, useToast } from "@chakra-ui/core";
import { useDispatch } from "react-redux";


function SignOut() {

    let toast = useToast();
	let dispatch = useDispatch();

	let handleSignOut = () => {
		fetch("http://localhost:3000/sign-out", {
			credentials: "include",
		})
			.then((res) => res.json())
			.then(
				dispatch({ type: "LOGOUT_SUCCESS" }),
				toast({
					title: "Success",
					description: "Logged out successfully",
					status: "info",
					isClosable: true,
					position: "top",
				})
			);
	};

    return(
        <Box>
			<Button onClick={() => handleSignOut()}>Sign Out</Button>
		</Box>
    )
}

export default SignOut