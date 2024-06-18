const express = require('express');
const FAQ = require('../models/FAQ');
const { auth, admin } = require('../middleware/auth');
const router = express.Router();

// Get all FAQs
router.get('/', auth, async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new FAQ (user only)
router.post('/', auth, async (req, res) => {
  const faq = new FAQ({
    question: req.body.question,
  });
  try {
    const newFAQ = await faq.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an FAQ with an answer (admin only)
router.put('/:id', auth, admin, async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    faq.answer = req.body.answer;
    await faq.save();
    res.json(faq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
