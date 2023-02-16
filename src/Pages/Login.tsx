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
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  let isError: boolean = false;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log("Email", event.target.email.value);
    // console.log("Password", event.target.password.value);
    if (
      event.target.email.value === process.env.REACT_APP_USER_EMAIL &&
      event.target.password.value === process.env.REACT_APP_PWD
    ) {
      navigate("/dashboard");
    } else {
      isError = true;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack maxWidth={500} m="auto" spacing={6} mt={40}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input isRequired type="email" name="email" />
          {!isError ? (
            <FormHelperText>We'll never share your email.</FormHelperText>
          ) : (
            <FormErrorMessage>Incorrect Email</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
          {!isError ? (
            <FormHelperText>Password of your email.</FormHelperText>
          ) : (
            <FormErrorMessage></FormErrorMessage>
          )}
        </FormControl>
        <Button size="lg" colorScheme={"blue"} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
