import React, { useState, useEffect } from 'react';
import { Stack } from '@chakra-ui/react'; 
import './App.css';
import ChakraLogin from './ChakraLogin';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      const signUpTimer = setTimeout(() => setShowSignUp(true), 1000);
      return () => clearTimeout(signUpTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background">
      {showWelcome && (
        <div className="welcome-text">
          <h1>Welcome to Moja!</h1>
        </div>
      )}

      {showWelcome && <ChakraLogin />}

      <Stack className={`sign-up-text fade-in ${showSignUp ? 'fade-in-active' : ''}`}>
        <p>Sign Up</p>
      </Stack>
    </div>
  );
}

export default App;
