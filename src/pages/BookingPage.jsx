import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createAppointment, getAvailableTimes } from '../services/api';
import './BookingPage.css';

const BookingPage = () => {
  const { therapistId } = useParams();
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      const data = await getAvailableTimes(therapistId);
      setAvailableTimes(data);
    };
    fetchAvailableTimes();
  }, [therapistId]);

  const handleBooking = async () => {
    const selectedDate = new Date(date).toDateString();
    const selectedTimeSlot = timeSlot.trim();
    const isAvailable = availableTimes.some(time => 
      new Date(time.date).toDateString() === selectedDate && time.timeSlots.includes(selectedTimeSlot)
    );

    if (!isAvailable) {
      setMessage('Selected date and time are not available.');
      return;
    }

    const appointmentData = { therapist: therapistId, date, timeSlot, email };
    await createAppointment(appointmentData);
    setMessage('Appointment booked successfully!');
  };

  return (
    <div className="booking">
      <h1>Book an Appointment</h1>
      <div className="booking-form">
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time Slot:
          <input type="text" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleBooking}>Book Now</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingPage;
