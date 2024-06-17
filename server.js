const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS middleware
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create the CORS options object
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend domain or port
  methods: ['GET', 'POST'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions)); // Use the CORS middleware with options

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Import routes
const therapistsRouter = require('./routes/therapists');
const appointmentsRouter = require('./routes/appointments');
const authRouter = require('./routes/auth'); // Ensure this line exists

// Use routes
app.use('/api/therapists', therapistsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/auth', authRouter); // Ensure this line exists

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    