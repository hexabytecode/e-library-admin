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
import { Navigate } from "react-router-dom"

export default function Form() {
  const [login, setLogin] = useState(false);

  if (login){
    return <Navigate to="/dashboard" />
  }

  return (
      <Stack>
        <div>Hello, You are inside!</div>
      </Stack>
  );
}
