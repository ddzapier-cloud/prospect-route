import React from 'react';

const ExploreCard = ({ 
  image, 
  title, 
  description, 
  price, 
  tag,
  tagTextColor,
  tagBgColor
}) => {
  return (
    <div className="max-w-full md:max-w-82 bg-white rounded-lg shadow-lg p-4 flex flex-col">
      
      <img src={image} alt={title} className="w-full mb-4 rounded-[10px]" />

      <h5
        className="self-start mb-3 px-4 py-1 rounded-full text-[18px] font-medium"
        style={{
          color: tagTextColor,
          backgroundColor: tagBgColor
        }}
      >
        {tag}
      </h5>

      <h3 className="text-[34px] font-normal text-[#4C4C4C] text-left">
        {title}
      </h3>

      <p className="mb-2 text-[18px] text-[#747474] font-medium text-left">
        {description}
      </p>

      <div className="flex justify-between w-full items-center mt-4">
        <h4 className="text-[26px] font-normal text-[#4C4C4C]">
          {price}
        </h4>

        <button className="relative z-40 rounded-[25px_0] bg-[#fff200] px-10 py-3 text-[18px] font-bold text-black">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;