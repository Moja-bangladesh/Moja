import React from 'react';
import { Stack, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

const ChakraLogin = () => {
  return (
    <Stack
      spacing={6}
      p={8}
      maxW={'lg'}
      borderWidth={1}
      bg={'white'}
      boxShadow={'xl'}
      width={'400px'}
      height={'300px'}
      align={'center'}
      justify={'center'}
      mt={'50px'}
      ml={'20%'}
    >
      <Stack spacing={2}>
        <InputGroup>
          <InputLeftAddon children="First Name" />
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Last Name" />
          <Input type="text" />
        </InputGroup>
      </Stack>
    </Stack>
  );
};

export default ChakraLogin;
