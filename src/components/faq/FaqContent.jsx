import React from 'react';
import arrowIcon from '../../assets/arrow-down.png'; // Import the arrow image

const FaqContent = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`border-b border-[#DFDFDF] py-[10px] ${isOpen}`}>
      <div onClick={toggle} className="flex justify-between items-center cursor-pointer transition-all duration-300">
        <h3 className="text-[#4C4C4C] text-[22px] font-normal">{question}</h3>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`w-[16px] h-[16px] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="pt-[10px]">
          <p className="text-left text-[16px] font-normal text-[#747474]">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqContent;