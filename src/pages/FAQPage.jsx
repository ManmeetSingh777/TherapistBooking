import React, { useState } from 'react';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What is therapy?', answer: 'Therapy is a process of...' },
    { question: 'How long is a session?', answer: 'A typical session lasts...' },
  ]);

  return (
    <div>
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
