import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createAppointment, getTherapist } from '../services/api';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './BookingPage.css';

const BookingPage = () => {
  const { therapistId } = useParams();
  const [therapist, setTherapist] = useState(null);
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTherapist = async () => {
      const data = await getTherapist(therapistId);
      setTherapist(data);
    };
    fetchTherapist();
  }, [therapistId]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setModalIsOpen(true);
  };

  const handleBooking = async () => {
    try {
      const appointmentData = { therapist: therapistId, date, email };
      await createAppointment(appointmentData);
      setMessage('Appointment booked successfully!');
      setModalIsOpen(false);
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="booking">
      {therapist && (
        <>
          <div className="therapist-info">
            <img src={therapist.photo} alt={therapist.name} className="therapist-photo" />
            <h2>{therapist.name}</h2>
          </div>
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <h2>Confirm Booking</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <p>Selected Date and Time: {date.toString()}</p>
              <button type="submit">Confirm Booking</button>
            </form>
            <button onClick={() => setModalIsOpen(false)}>Cancel</button>
          </Modal>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
};

export default BookingPage;
