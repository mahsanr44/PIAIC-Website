"use client"
import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,

  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  SimpleGrid,
  Flex,
  Stack,
  StackDivider,
  OrderedList,
  List,
  ListItem,
  Button,
  Text,
} from '@chakra-ui/react';
import { IoAnalyticsSharp } from 'react-icons/io5';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const AI = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  './artificial-intelligence.jpg'}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <Heading marginTop="1" mb={30}>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Artificial Intelligence
            </Link>
          </Heading>
          <Text

            as="p"
            marginTop="4"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="xl">
            The Artificial Intelligence and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
           <Link href='https://www.piaic.org/'> <Button
           ml={400}
  mt={10}
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, blue.00, yellow.600)',
  }}
>
 CLICK HERE TO APPLY
</Button> </Link> </Text>
        </Box></Box>
            <Divider marginTop="5" />

      <Divider pt={20} marginTop="5" />
      <Heading as="h2" marginTop="5">
        Quarter I
      </Heading>

      <Divider marginTop="5" />
      <Container maxW={'6xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'./quarter1.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>

            <Heading>Object Oriented Programming using TypeScript</Heading>
            <Heading color={'gray.500'} size='md' pt={10}>
              Course Outlines:
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              <OrderedList>
                <ListItem>HTML and CSS (Homework) </ListItem>
                <ListItem>Web 3.0 and Metaverse Theory</ListItem>
                <ListItem>Fundamentals of JavaScript</ListItem>
                <ListItem>Object-Oriented Programming with TypeScript</ListItem>
                <ListItem>TypeScript for Reactt</ListItem>
                <ListItem>Fundamentals of Version Control with Git Quiz </ListItem>
                <ListItem>TypeScript Proficiency Quiz</ListItem>

              </OrderedList>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Divider pt={5} marginTop="5" />
      <Heading as="h2" marginTop="5">
        Quarter II
      </Heading>

      <Divider marginTop="5" />
      <Container maxW={'6xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
         
          <Stack spacing={4}>

            <Heading> Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit for Terraform</Heading>
            <Heading color={'gray.500'} size='md' pt={6}>
              Course Outlines:
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              <OrderedList>
                <ListItem>Next.js 13 Web Development  </ListItem>
                <ListItem>Next.js 13 using Chakra UI</ListItem>
                <ListItem>UI/UX Design with Figma, TailwindCSS, and Chakra UI</ListItem>
                <ListItem>API Routes with Next.js</ListItem>
                <ListItem>APIs with Next.js and tRPC</ListItem>
                <ListItem>SQL and Prisma </ListItem>
                <ListItem>Next.js 13 using TailwindCSS</ListItem>
                <ListItem>AWS Application Composer</ListItem>
                <ListItem> Serverless API Development with Cloud Development Kit</ListItem>

              </OrderedList>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

            </Stack>
          </Stack> <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'./quarter2.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Divider pt={20} marginTop="5" />
      <Heading as="h2" marginTop="5">
        Quarter III
      </Heading>

      <Divider marginTop="5" />
      <Container maxW={'6xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'./quarter3.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>

            <Heading>Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
            <Heading color={'gray.500'} size='md' pt={10}>
              Course Outlines:
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              <OrderedList>
                <ListItem>Build Full-Stack Next.js 13 Jamstack Templates </ListItem>
                <ListItem>Build QraphQL APIs </ListItem>
                

              </OrderedList>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider pt={5} marginTop="5" />
      <Heading as="h2" marginTop="5">
        Quarter IV
      </Heading>

      <Divider marginTop="5" />
      <Container maxW={'10xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
         
          <Stack spacing={4}>

            <Heading> Developing Planet-Scale Intelligent APIs and Python Programming</Heading>
            <Heading color={'gray.500'} size='md' pt={6}>
              Course Outlines:
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              <OrderedList>
                <ListItem>Introduction to Machine Learning, Data Science, and AI  </ListItem>
                <ListItem>Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models 
We will cover GPT-4, ChatGPT, etc. and Next.js 13
</ListItem>
                <ListItem>Python Crash Course  for TypeScript Developers</ListItem>
             
              </OrderedList>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

            </Stack>
          </Stack> <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'./quarter4.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      
      <Divider pt={20} marginTop="5" />
      <Heading as="h2" marginTop="5">
        Quarter V
      </Heading>

      <Divider marginTop="4" />
      <Container maxW={'6xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'./quarter5.png'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>

            <Heading>Deep Learning and MLOps</Heading>
            <Heading color={'gray.500'} size='md' pt={10}>
              Course Outlines:
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              <OrderedList>
                <ListItem>Deep Learning with Tensorflow </ListItem>
                <ListItem>Machine Learning Engineering for Production (MLOps) using Terraform for CDK </ListItem>
                

              </OrderedList>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default AI;