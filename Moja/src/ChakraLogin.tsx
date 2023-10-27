import React, { useEffect, useState } from 'react';
import { Stack, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './ChakraLogin.css';

const ChakraLogin = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack
      className={`fade-in ${fadeIn ? 'fade-in-active stack' : ''}`}
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
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      transform={'translate(-50%, -50%)'}
    >
      <Stack direction="row" spacing={4} width="80%">
        <InputGroup flex={1} className="custom-input">
          <InputLeftElement pointerEvents="none" children={<FaUserAlt className="custom-icon" />} />
          <Input
            placeholder="First Name"
            size="lg" // Make the input larger
          />
        </InputGroup>
        <InputGroup flex={1} className="custom-input">
          <InputLeftElement pointerEvents="none" children={<FaLock className="custom-icon" />} />
          <Input
            placeholder="Last Name"
            size="lg" // Make the input larger
          />
        </InputGroup>
      </Stack>

      <Button colorScheme="teal" width="full">
        Login
      </Button>
    </Stack>
  );
};

export default ChakraLogin;
