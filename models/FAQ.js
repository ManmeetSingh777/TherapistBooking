const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
