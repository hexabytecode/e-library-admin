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
  Select,
} from "@chakra-ui/react";

export default function PopUpForm(props: any) {
  const MONTH_DURATION:any = {
    "1m": 1,
    "3m": 3,
    "6m": 6,
    "12m": 12,
  }

  const handleAddUser = (e: any) => {
    e.preventDefault();
    console.log("userJSONdata => ", createJSONObj(e.target));
    alert("Data Submitted!");
    props.close();
  };

  const createJSONObj = (userData: any) => {
    const [startDate, endDate] = calculateValidity(userData[3].value);
    let JSONdata = {
      name: userData[0].value,
      gender: userData[1].value,
      subscriptionPlan: userData[2].value,
      startDate: startDate,
      endDate: endDate,
    };
    return JSONdata;
  };

  const calculateValidity = (planDuration:string) => {
    let now = new Date();
    let startDate = now;
    let endDate = new Date(now.setMonth(now.getMonth() + MONTH_DURATION[planDuration]))
    return([startDate, endDate])
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
