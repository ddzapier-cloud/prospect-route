import React, { useState } from 'react';
import FaqContent from './FaqContent';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why wouldn't I just hire a freelancer?",
      answer: "Answer content goes here..."
    },
    {
      question: "What separates you? How do you vet your talent?",
      answer: "Answer content goes here..."
    },
    {
      question: "Can I set up video calls or check-ins with my resource(s)?",
      answer: "Answer content goes here..."
    },
    {
      question: 'What is the "7-day risk-free trial"?',
      answer: "Answer content goes here..."
    },
    {
      question: "Can I hire both individual resources and complete teams?",
      answer: "Answer content goes here..."
    },
    {
      question: "How does Billing work?",
      answer: "Answer content goes here..."
    },
    {
      question: "Are there any long-term contracts or commitments?",
      answer: "Answer content goes here..."
    },
    {
      question: "Can I cancel if I don't like it?",
      answer: "Answer content goes here..."
    }
  ];

  return (
    <div className="flex justify-center gap-[30px] my-[100px] mx-auto">
      <div className="flex flex-col max-w-[50%]">
        <h2 className="text-[#4C4C4C] text-[64px] text-left mb-[20px]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#747474] text-[18px] text-left">
          Boost your energy and focus with 5-hour ENERGY® shots, crafted for fast results. Choose from a variety of strengths and flavors to fuel your day without the crash.
        </p>
      </div>

      <div className="flex max-w-[50%]">
        <div className="flex flex-col gap-[15px]">
          {faqData.map((faq, index) => (
            <FaqContent
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;