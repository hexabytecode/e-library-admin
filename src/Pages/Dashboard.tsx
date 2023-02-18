import React, { useState } from "react";
import {  
  Stack, SimpleGrid, Card, CardBody, Text, Box, Heading, Image, Tag, TagLabel, TagRightIcon, Divider, CardFooter, Button, Center, useColorModeValue, Badge, Link, Avatar
} from "@chakra-ui/react";

function Dashboard() {
  const regUsers = [{
    name: 'User1',
    gender: 'Male',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Gold',
    subscriptionTypeId: 1,
    validity: '1 May 2023',
    imgsrc: 'Male1.png',
    interests: ['action','romantic','thriller'],
  },
  {
    name: 'User2',
    gender: 'Male',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Silver',
    subscriptionTypeId: 2,
    validity: '1 May 2023',
    imgsrc: 'Male2.png',
    interests: ['romcom','blackcomedy','thriller'],
  },
  {
    name: 'User3',
    gender: 'Male',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Platinum',
    subscriptionTypeId: 3,
    validity: '1 May 2023',
    imgsrc: 'Male3.png',
    interests: ['biopics','inspirational','thriller'],
  },
  {
    name: 'User4',
    gender: 'Male',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Gold',
    subscriptionTypeId: 1,
    validity: '1 May 2023',
    imgsrc: 'Male4.png',
    interests: ['action','romantic','biopics'],
  },
  {
    name: 'User5',
    gender: 'Female',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Gold',
    subscriptionTypeId: 1,
    validity: '1 May 2023',
    imgsrc: 'Female1.png',
    interests: ['romcom','inspirational','blackcomedy'],
  },
  {
    name: 'User6',
    gender: 'Female',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Platinum',
    subscriptionTypeId: 3,
    validity: '1 May 2023',
    imgsrc: 'Female2.png',
    interests: ['traveldiaries','inspirational','action'],
  },
  {
    name: 'User7',
    gender: 'Female',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Silver',
    subscriptionTypeId: 2,
    validity: '1 May 2023',
    imgsrc: 'Female3.png',
    interests: ['traveldiaries','inspirational','action'],
  },
  {
    name: 'User8',
    gender: 'Female',
    subscriptionStatus: 'Active',
    subscriptionPlan: 'Platinum',
    subscriptionTypeId: 3,
    validity: '1 May 2023',
    imgsrc: 'Female4.png',
    interests: ['romcom','inspirational','blackcomedy'],
  }];
  return (
    <Box mx="200px">
      <Heading as='h2' size='xl'>{'User Subscriptions'}</Heading>
      <SimpleGrid columns={4} spacing={6} py="40px">
        {
          regUsers.map((users) => {
            return (
              <Center py={6}>
                <Box
                  maxW={'320px'}
                  w={'full'}                  
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={6}
                  textAlign={'center'}>
                  <Avatar
                    size={'xl'}
                    src={users.imgsrc}
                    mb={4}
                    pos={'relative'}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: 'green.300',
                      border: '2px solid white',
                      rounded: 'full',
                      pos: 'absolute',
                      bottom: 0,
                      right: 3,
                    }}
                  />
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {users.name}
                  </Heading>
                  <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {users.gender}
                  </Text>
                  <Text
                    textAlign={'center'}
                    
                    px={3}>
                    Actress, musician, songwriter and artist. PM for work inquires or{' '}
                    <Link href={'#'} color={'blue.400'}>
                      #tag
                    </Link>{' '}
                    me in your posts
                  </Text>

                  <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    {
                      users.interests.map((int) => {
                        return (
                          <Badge
                            px={2}
                            py={1}
                            
                            fontWeight={'400'}>
                            #{int}
                          </Badge>
                        )
                      })
                      
                    }
                    
                  </Stack>                  
                </Box>
              </Center>



              // <Card 
              //   _hover={{ boxShadow: '2xl' }}
              //   direction={{ base: 'column', sm: 'row' }}
              //   overflow='hidden'
              //   variant='outline'
              //   >
              //   <Image
              //     objectFit='cover'
              //     maxW={{ base: '100%', sm: '200px' }}
              //     src={users.imgsrc}
              //     alt='UserImage'
              //   />
              //   <Divider />
              //   <Stack>
              //     <CardBody>
              //       <Heading size='md' alignSelf={'left'}>{users.name}</Heading>                                       
              //     </CardBody>
                  
              //     <CardFooter>
                    
              //     </CardFooter>                  
              //   </Stack>
              // </Card>




              // <Card variant='unstyled' cursor='pointer' _hover={{ boxShadow: '2xl' }} p={2}>
              //   <CardBody>
              //     <Image 
              //       src={users.imgsrc}
              //       alt='order online image'
              //       borderTopRadius='lg'
              //       objectFit='cover'
              //       h="180px"
              //       w="100%"
              //     />
              //     <Divider />
              //     <Stack mt='6' spacing='3'>
              //       <Box  display="flex" alignItems="center" justifyContent="space-between">
              //         <Heading size='md'>{users.name}</Heading>
              //         <Divider />
              //         <Tag size='sm' variant='outline' colorScheme='green' textAlign='right'>
              //           <TagLabel>{users.gender}
              //             </TagLabel>                    
              //         </Tag>                      
              //         <Text noOfLines={1}>Plan :{users.subscriptionPlan}</Text>
              //         <Text noOfLines={1}>Status: {users.subscriptionStatus}</Text>
              //         <Text noOfLines={1}>Validity: {users.validity}</Text>
              //       </Box>
              //     </Stack>            
              //   </CardBody>
              // </Card>
            )
          })
        }
        
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;