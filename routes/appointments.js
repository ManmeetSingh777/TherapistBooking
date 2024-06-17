const express = require('express');
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all appointments for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.userId }).populate('therapist');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create an appointment
router.post('/', auth, async (req, res) => {
  const appointment = new Appointment({
    user: req.user.userId,
    therapist: req.body.therapist,
    date: req.body.date,
    email: req.body.email,
  });
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
