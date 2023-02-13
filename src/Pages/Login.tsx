import React, { useState } from "react";
import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

export default function Form() {
  const navigate = useNavigate();
  

  const handleSubmit = () => {
    navigate("/dashboard");
  }

  return (
    <Stack maxWidth={500} m="auto" spacing={4} mt={40}>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input isRequired type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormHelperText>Password of your email.</FormHelperText>
      </FormControl>
      <Button size='lg' colorScheme={"blue"} onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
}
