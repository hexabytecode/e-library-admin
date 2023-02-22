import React, { useState } from "react";
import {
  Stack,
  SimpleGrid,
  Text,
  Box,
  Heading,
  Image,
  Center,
  useColorModeValue,
  Badge,  
  Avatar,
  Flex,
  Link,
} from "@chakra-ui/react";
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
        <SimpleGrid columns={4} spacing={6} py="40px">
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
                    // _after={{
                    //   content: '""',
                    //   w: 4,
                    //   h: 4,
                    //   bg: "green.300",
                    //   border: "2px solid white",
                    //   rounded: "full",
                    //   pos: "absolute",
                    //   bottom: 0,
                    //   right: 3,
                    // }}
                  />
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    {users.name}
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} mb={4}>
                    {users.gender}
                  </Text>
                  {/* <Text textAlign={"center"} px={3}>
                    Actress, musician, songwriter and artist. PM for work
                    inquires or{" "}
                    <Link href={"#"} color={"blue.400"}>
                      #tag
                    </Link>{" "}
                    me in your posts
                  </Text> */}
                  <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                      <Text fontWeight={600}>{users.subscriptionStatus}</Text>
                      <Text fontSize={'sm'} color={'gray.500'}>
                        User Status
                      </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                      { users.subscriptionPlan==='Gold' ? ( <Text color={"yellow.500"} fontWeight={600}>{users.subscriptionPlan}</Text> ) :
                        (users.subscriptionPlan==='Platinum' ? <Text color={"purple.700"} fontWeight={600}>{users.subscriptionPlan}</Text> : <Text color={"silver"} fontWeight={600}>{users.subscriptionPlan}</Text>)
                      }
                      <Text fontSize={'sm'} color={'gray.500'}>
                        Subscription Plan
                      </Text>
                    </Stack>
                  </Stack>
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
