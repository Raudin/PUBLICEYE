import React from 'react';
import {Link as Redirect} from 'react-router-dom'

import './login.css'


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
const Login = () => {
    return (
     <div>
      <Flex
        className='login'
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        fontFamily={"Rubik"}

        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to track the incidents you've reported ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                   
                  }}>
                  Sign In
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Not yet registered?
                  
                <Redirect to="/signup">
                  <Link  color={'blue.400'}
                     
                   > Sign Up
                  </Link>
                </Redirect>    
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     </div>
    );
  }

  export default Login;