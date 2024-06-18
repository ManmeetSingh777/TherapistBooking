import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  useEffect(() => {
    // Load chatbot script
    const script = document.createElement('script');
    script.src = 'https://path-to-your-chatbot-script.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="landing">
      <h1>Welcome to Our Therapy Center</h1>
      <div id="chatbot"></div> {/* Chatbot container */}
    </div>
  );
};

export default LandingPage;
