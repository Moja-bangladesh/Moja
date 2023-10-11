import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Display the welcome message after a short delay (e.g., 1 second)
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background">
      {showWelcome && (
        <div className="welcome-text">
          <h1>Welcome to Moja!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
