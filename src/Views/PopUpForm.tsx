import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Select,

} from "@chakra-ui/react";

export default function PopUpForm(props: any) {

    console.log("Props: ",props)
    

  const handleAddUser = (e: any) => {
    console.log("handleAddUser method started...");
    e.preventDefault();
    console.log("userJSONdata => ", createJSONObj(e.target))
    alert('Data Submitted!')
    props.close();
  };

    const createJSONObj = (userData:any) => {
        let JSONdata = {
            name: userData[0].value, 
            gender: userData[1].value, 
            subscriptionPlan: userData[2].value, 
            validity: userData[3].value
        }
        return(JSONdata)
    }

  return (
    <>
      <Modal isOpen={props.show} onClose={props.close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Add a User
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form id="AddUser" onSubmit={handleAddUser}>
              <FormControl marginBottom={5}>
                <FormLabel>Subscriber's Name</FormLabel>
                <Input isRequired type="text" name="name" />
              </FormControl>

              <FormControl marginBottom={5}>
                <FormLabel>Gender</FormLabel>
                <Select placeholder="Select Gender">
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                  <option value="na">Prefer not to say</option>
                </Select>
              </FormControl>

              <FormControl marginBottom={5}>
                <FormLabel>Membership</FormLabel>
                <Select placeholder="Select Duration">
                  <option value="gold">Gold</option>
                  <option value="platinum">Platinum</option>
                </Select>
              </FormControl>
              
              <FormControl>
                <FormLabel>Plan Duration</FormLabel>
                <Select placeholder="Select Duration">
                  <option value="1m">Monthly Plan</option>
                  <option value="3m">Quarterly Plan</option>
                  <option value="6m">Half-Annual Plan</option>
                  <option value="12m">Annual Plan</option>
                </Select>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} colorScheme={"blue"} type="submit" form="AddUser">
              Submit
            </Button>
            <Button onClick={props.close}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
