const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // Add this line to require the 'path' module

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Import routes
const therapistsRouter = require('./routes/therapists');
const appointmentsRouter = require('./routes/appointments');
const authRouter = require('./routes/auth');
const faqsRouter = require('./routes/faqs');
const adminRouter = require('./routes/admin'); // Import admin route

// Use routes
app.use('/api/therapists', therapistsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/auth', authRouter);
app.use('/api/faqs', faqsRouter);
app.use('/api/admin', adminRouter); // Use admin route

// Serve static files from the React app (dist directory)
app.use(express.static(path.join(__dirname, 'client/dist')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
