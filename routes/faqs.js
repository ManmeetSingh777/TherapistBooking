const express = require('express');
const FAQ = require('../models/FAQ'); // Ensure this model is defined
const router = express.Router();

// Get all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new FAQ
router.post('/', async (req, res) => {
  const faq = new FAQ({
    question: req.body.question,
    answer: req.body.answer,
  });
  try {
    const newFAQ = await faq.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing FAQ
router.put('/:id', async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    faq.answer = req.body.answer;
    const updatedFAQ = await faq.save();
    res.json(updatedFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
