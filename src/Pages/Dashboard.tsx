import React, { useState } from "react";
import {
  Button,
  Stack,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import PopUpForm from "../Views/PopUpForm";

export default function Dashboard() {
  const [isFormOpen, setFormOpen] = useState(false);
  const parentToChild = () => {
    setFormOpen(true);
  }

  return (
    <Stack align={"center"}>
      <Button maxW={200} colorScheme={"blue"} onClick={() => parentToChild()}>
        Add User <AddIcon ml={2} boxSize={3} />
      </Button>
      <PopUpForm show={isFormOpen} close={() => setFormOpen(false)}/>
    </Stack>
  );
}
