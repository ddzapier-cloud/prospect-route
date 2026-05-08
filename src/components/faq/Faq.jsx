import React, { useState } from 'react';
import FaqContent from './FaqContent';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a 5-hour ENERGY Shot?",
      answer: "Answer content goes here..."
    },
    {
      question: "How do you ensure code quality?",
      answer: "Answer content goes here..."
    },
    {
      question: "How do you manage project timelines?",
      answer: "Answer content goes here..."
    },
    {
      question: 'What makes your team unique?',
      answer: "Answer content goes here..."
    },
    {
      question: "How do you test the software?",
      answer: "Answer content goes here..."
    }
  ];

  return (
    <div className="flex sm:flex-nowrap flex-wrap justify-center gap-7.5 my-25 mx-auto">
      <div className="flex flex-col sm:max-w-[50%] max-w-full w-full">
        <h2 className="text-[#4C4C4C] text-[64px] text-left mb-5">
          Frequently Asked Questions
        </h2>
        <p className="text-[#747474] text-[18px] text-left">
          Boost your energy and focus with 5-hour ENERGY® shots, crafted for fast results. Choose from a variety of strengths and flavors to fuel your day without the crash.
        </p>
      </div>

      <div className="flex flex-col sm:max-w-[50%] max-w-full w-full">
        <div className="flex flex-col gap-3.75 w-full max-w-full">
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