import React, { useState } from 'react';
import { Box, Flex, Input, Stack, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const ChakraLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      width="full"
      justifyContent="center"
      alignItems="flex-start"
      height="calc(100vh - 100px)"
      bg="gray.100"
      p={4}
    >
      <Box
        p={8}
        maxWidth="md"
        borderWidth={1}
        borderRadius="lg"
        bg="white"
        boxShadow="md"
        width="400px"
        height="300px"
      >
        <Flex alignItems="center" justifyContent="center" mb={6}>
          <FaUserAlt color="gray.300" fontSize="24px" />
          <Box ml={3}>Login</Box>
        </Flex>
        <Stack spacing={6} alignItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaUserAlt color="gray.300" />} />
            <Input type="text" placeholder="Username" size="lg" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              size="lg"
            />
            <Button size="lg" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputGroup>
          <Button colorScheme="teal" width="full" size="lg">
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ChakraLogin;
