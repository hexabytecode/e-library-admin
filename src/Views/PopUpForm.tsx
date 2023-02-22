import { useState, useRef } from "react";
import {
  Modal,
  Box,
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
  Checkbox,
  CheckboxGroup,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

export default function PopUpForm(props: any) {
  const MONTH_DURATION: any = {
    "1m": 1,
    "3m": 3,
    "6m": 6,
    "12m": 12,
  };

  const initialCheckboxState = [false, false, false, false, false, false];

  const [checkedItems, setCheckedItems] = useState(initialCheckboxState);

  const CHECKED_LIST = [
    "action",
    "romance",
    "comedy",
    "thriller",
    "self-development",
    "educational",
  ];

  const handleAddUser = (e: any) => {
    e.preventDefault();
    console.log("Checkbox => ", checkedItems);
    console.log("userJSONdata => ", createJSONObj(e.target));
    setCheckedItems(initialCheckboxState);
    props.close();
    onOpen();
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const createJSONObj = (userData: any) => {
    const [startDate, endDate] = calculateValidity(userData[3].value);
    const genreTags = fetchGenreTags(checkedItems);
    // fetchGenreTags(checkedItems);
    let JSONdata = {
      name: userData[0].value,
      genre: genreTags,
      gender: userData[1].value,
      subscriptionPlan: userData[2].value,
      startDate: startDate,
      endDate: endDate,
    };
    return JSONdata;
  };

  const fetchGenreTags = (checkedItems: Array<boolean>) => {
    let SelectedCheckList: any[] = [];
    CHECKED_LIST.forEach((el, i) => {
      if (checkedItems[i]) {
        SelectedCheckList.push(el);
      }
    });
    return SelectedCheckList;
  };

  const calculateValidity = (planDuration: string) => {
    let now = new Date();
    let startDate = now;
    let endDate = new Date(
      now.setMonth(now.getMonth() + MONTH_DURATION[planDuration])
    );
    return [startDate, endDate];
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Success!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              User has been successfully added.
            </AlertDescription>
          </Alert>
        </AlertDialogContent>
      </AlertDialog>

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

              <FormControl marginBottom={5}>
                <FormLabel>Plan Duration</FormLabel>
                <Select placeholder="Select Duration">
                  <option value="1m">Monthly Plan</option>
                  <option value="3m">Quarterly Plan</option>
                  <option value="6m">Half-Annual Plan</option>
                  <option value="12m">Annual Plan</option>
                </Select>
              </FormControl>

              <CheckboxGroup>
                <FormLabel>Genre</FormLabel>
                <Stack direction={"column"}>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) =>
                      setCheckedItems([
                        e.target.checked,
                        checkedItems[1],
                        checkedItems[2],
                        checkedItems[3],
                        checkedItems[4],
                        checkedItems[5],
                      ])
                    }
                  >
                    Action
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) =>
                      setCheckedItems([
                        checkedItems[0],
                        e.target.checked,
                        checkedItems[2],
                        checkedItems[3],
                        checkedItems[4],
                        checkedItems[5],
                      ])
                    }
                  >
                    Romance
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[2]}
                    onChange={(e) =>
                      setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        e.target.checked,
                        checkedItems[3],
                        checkedItems[4],
                        checkedItems[5],
                      ])
                    }
                  >
                    Comedy
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[3]}
                    onChange={(e) =>
                      setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        checkedItems[2],
                        e.target.checked,
                        checkedItems[4],
                        checkedItems[5],
                      ])
                    }
                  >
                    Thriller
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[4]}
                    onChange={(e) =>
                      setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        checkedItems[2],
                        checkedItems[3],
                        e.target.checked,
                        checkedItems[5],
                      ])
                    }
                  >
                    Self-Development
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[5]}
                    onChange={(e) =>
                      setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        checkedItems[2],
                        checkedItems[3],
                        checkedItems[4],
                        e.target.checked,
                      ])
                    }
                  >
                    Educational
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
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
