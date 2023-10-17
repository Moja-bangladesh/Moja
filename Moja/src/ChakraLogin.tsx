import React, { useEffect, useState } from 'react';
import { Stack } from '@chakra-ui/react';
import './ChakraLogin.css';

const ChakraLogin = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Delay the fade-in effect by 1 second (adjust as needed)
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack
      className={`fade-in ${fadeIn ? 'fade-in-active' : ''}`}
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
      {/* Your login content goes here */}
    </Stack>
  );
};

export default ChakraLogin;
