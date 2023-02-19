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
import JsonData from "../data.json";

export default function Dashboard() {
  const [isFormOpen, setFormOpen] = useState(false);
  const parentToChild = () => {
    setFormOpen(true);
  };

  return (
    <Stack align={"center"}>
      <Box mx="200px">
        <Heading as="h2" size="xl">
          {"User Subscriptions"}
        </Heading>
        <SimpleGrid columns={3} spacing={6} py="40px">
          {JsonData.map((users) => {
            return (
              <Center py={6} _hover={{ boxShadow: "2xl" }} key={users.id}>
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
}
