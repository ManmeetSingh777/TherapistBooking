import React from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { therapistId } = useParams();

  // Map therapist IDs to their Cal.com booking links
  const therapistBookingLinks = {
    'therapist-id-1': 'https://cal.com/manmeetsingh/',
    'therapist-id-2': 'https://cal.com/many-therapist2/',
    'therapist-id-3': 'https://cal.com/anos-voldigod-t2c8eh/',
  };

  console.log('Therapist ID:', therapistId); // Log the therapist ID to verify
  const bookingLink = therapistBookingLinks[therapistId];

  return (
    <div className="booking">
      <h1>Book an Appointment</h1>
      {bookingLink ? (
        <iframe
          src={bookingLink}
          title="Cal.com Booking"
          style={{ width: '100%', height: '600px', border: 'none' }}
        ></iframe>
      ) : (
        <p>No booking link available for this therapist.</p>
      )}
    </div>
  );
};

export default BookingPage;
