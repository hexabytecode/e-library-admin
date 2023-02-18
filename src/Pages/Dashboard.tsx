import React, { useState } from "react";
import {
  Stack,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Box,
  Heading,
  Image,
  Tag,
  TagLabel,
  TagRightIcon,
  Divider,
  CardFooter,
  Button,
  Center,
  useColorModeValue,
  Badge,
  Link,
  Avatar,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import PopUpForm from "../Views/PopUpForm";
// import Nav from "../Components/Nav";

export default function Dashboard() {
  const regUsers = [
    {
      name: "User1",
      gender: "Male",
      subscriptionStatus: "Active",
      subscriptionPlan: "Gold",
      subscriptionTypeId: 1,
      validity: "1 May 2023",
      imgsrc: "Male1.png",
      interests: ["action", "romantic", "thriller"],
    },
    {
      name: "User2",
      gender: "Male",
      subscriptionStatus: "Active",
      subscriptionPlan: "Silver",
      subscriptionTypeId: 2,
      validity: "1 May 2023",
      imgsrc: "Male2.png",
      interests: ["romcom", "blackcomedy", "thriller"],
    },
    {
      name: "User3",
      gender: "Male",
      subscriptionStatus: "Active",
      subscriptionPlan: "Platinum",
      subscriptionTypeId: 3,
      validity: "1 May 2023",
      imgsrc: "Male3.png",
      interests: ["biopics", "inspirational", "thriller"],
    },
    {
      name: "User4",
      gender: "Male",
      subscriptionStatus: "Active",
      subscriptionPlan: "Gold",
      subscriptionTypeId: 1,
      validity: "1 May 2023",
      imgsrc: "Male4.png",
      interests: ["action", "romantic", "biopics"],
    },
    {
      name: "User5",
      gender: "Female",
      subscriptionStatus: "Active",
      subscriptionPlan: "Gold",
      subscriptionTypeId: 1,
      validity: "1 May 2023",
      imgsrc: "Female1.png",
      interests: ["romcom", "inspirational", "blackcomedy"],
    },
    {
      name: "User6",
      gender: "Female",
      subscriptionStatus: "Active",
      subscriptionPlan: "Platinum",
      subscriptionTypeId: 3,
      validity: "1 May 2023",
      imgsrc: "Female2.png",
      interests: ["traveldiaries", "inspirational", "action"],
    },
    {
      name: "User7",
      gender: "Female",
      subscriptionStatus: "Active",
      subscriptionPlan: "Silver",
      subscriptionTypeId: 2,
      validity: "1 May 2023",
      imgsrc: "Female3.png",
      interests: ["traveldiaries", "inspirational", "action"],
    },
    {
      name: "User8",
      gender: "Female",
      subscriptionStatus: "Active",
      subscriptionPlan: "Platinum",
      subscriptionTypeId: 3,
      validity: "1 May 2023",
      imgsrc: "Female4.png",
      interests: ["romcom", "inspirational", "blackcomedy"],
    },
  ];

  const [isFormOpen, setFormOpen] = useState(false);
  const parentToChild = () => {
    setFormOpen(true);
  };

  return (
    // <Nav />
    <Stack align={"center"}>
      <Button maxW={200} colorScheme={"blue"} onClick={() => parentToChild()}>
        Add User <AddIcon ml={2} boxSize={3} />
      </Button>
      <PopUpForm show={isFormOpen} close={() => setFormOpen(false)} />

      <Box mx="200px">
        <Heading as="h2" size="xl">
          {"User Subscriptions"}
        </Heading>
        <SimpleGrid columns={4} spacing={6} py="40px">
          {regUsers.map((users) => {
            return (
              <Center py={6}>
                <Box
                  maxW={"320px"}
                  w={"full"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  p={6}
                  textAlign={"center"}
                >
                  <Avatar
                    size={"xl"}
                    src={users.imgsrc}
                    mb={4}
                    pos={"relative"}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: "green.300",
                      border: "2px solid white",
                      rounded: "full",
                      pos: "absolute",
                      bottom: 0,
                      right: 3,
                    }}
                  />
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    {users.name}
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} mb={4}>
                    {users.gender}
                  </Text>
                  <Text textAlign={"center"} px={3}>
                    Actress, musician, songwriter and artist. PM for work
                    inquires or{" "}
                    <Link href={"#"} color={"blue.400"}>
                      #tag
                    </Link>{" "}
                    me in your posts
                  </Text>

                  <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={6}
                  >
                    {users.interests.map((int) => {
                      return (
                        <Badge px={2} py={1} fontWeight={"400"}>
                          #{int}
                        </Badge>
                      );
                    })}
                  </Stack>
                </Box>
              </Center>
            );
          })}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};