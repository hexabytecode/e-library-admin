import React, { useState } from "react";
import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [Error, setError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      event.target.userN.value === process.env.REACT_APP_USER &&
      event.target.password.value === process.env.REACT_APP_PWD
    ) {
      navigate("/dashboard");
    } else {
      setError(true);
      console.log("IsError", Error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack maxW={400} m="auto" spacing={6} mt={40}>
        <FormControl isInvalid={Error} isRequired>
          <FormLabel>Username</FormLabel>
          <Input isRequired type="text" name="userN" placeholder='User Name' />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Error} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" placeholder='Password' />
          <FormErrorMessage>Incorrect Email or Password</FormErrorMessage>
        </FormControl>
        <Button size="lg" colorScheme={"blue"} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
