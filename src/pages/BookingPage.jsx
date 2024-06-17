import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createAppointment } from '../services/api';
import './BookingPage.css';

const BookingPage = () => {
  const { therapistId } = useParams();
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const appointmentData = { therapist: therapistId, date, email };
      await createAppointment(appointmentData);
      setMessage('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="booking">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleBooking} className="booking-form">
        <label>
          Date and Time:
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Book Now</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingPage;
