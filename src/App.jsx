import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpecializationPage from './pages/SpecializationPage';
import AboutUsPage from './pages/AboutUsPage';
import FAQPage from './pages/FAQPage';
import ContactUsPage from './pages/ContactUsPage';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // Import RegisterPage
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/specialization" element={<SpecializationPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Add Register route */}
      </Routes>
    </Router>
  );
}

export default App;
  