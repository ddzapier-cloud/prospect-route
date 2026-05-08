import React, { useState } from 'react';

import orangeBottle from '../../assets/bottle.png';
import orangeTop from '../../assets/orange-top.png';
import hourIcon from '../../assets/hour.png';
import coffeeIcon from '../../assets/coffee.png'; 
import orangeIcon from '../../assets/orange.png'; 
import arrowNext from '../../assets/arrow-next.png'
import arrowPrev from '../../assets/arrow-prev.png'

const slides = [
  {
    topImage: orangeTop,
    bottle: orangeBottle,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam ut odio in urna consectetur consectetur.',
    features: [
      {
        icon: hourIcon,
        title: 'Lasts For Hours',
        text: 'Drink it in seconds, feel it in minutes, lasts for hours.',
      },
      {
        icon: coffeeIcon,
        title: '230mg Of Caffeine',
        text: 'The same amount in a 12 oz cup of coffee.',
      },
      {
        icon: orangeIcon,
        title: 'Orange Flavor',
        text: 'Enhanced with a blend of essential B vitamins and amino acids.',
      },
    ],
  },
  {
    topImage: orangeTop,
    bottle: orangeBottle,
    description:
      'Berry flavor energy shot crafted to deliver long-lasting energy and mental clarity.',
    features: [
      {
        icon: hourIcon,
        title: 'Lasts For Hours',
        text: 'Drink it in seconds, feel it in minutes, lasts for hours.',
      },
      {
        icon: coffeeIcon,
        title: '230mg Of Caffeine',
        text: 'The same amount in a 12 oz cup of coffee.',
      },
      {
        icon: orangeIcon,
        title: 'Berry Flavor',
        text: 'A bold berry taste with essential vitamins and amino acids.',
      },
    ],
  },
  {
    topImage: orangeTop,
    bottle: orangeBottle,
    description:
      'Grape flavor energy shot made to help you power through your busy day.',
    features: [
      {
        icon: hourIcon,
        title: 'Lasts For Hours',
        text: 'Drink it in seconds, feel it in minutes, lasts for hours.',
      },
      {
        icon: coffeeIcon,
        title: '230mg Of Caffeine',
        text: 'The same amount in a 12 oz cup of coffee.',
      },
      {
        icon: orangeIcon,
        title: 'Grape Flavor',
        text: 'Rich grape flavor with essential B vitamins and amino acids.',
      },
    ],
  },
];

const FeaturedProducts = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="featMain-praoduct w-full overflow-hidden">
      <div className="relative mx-auto">
        <div className="relative z-20 text-center flex items-center justify-center m-auto flex-col max-w-215">
          <img
            src={slide.topImage}
            alt=""
            className="mx-auto mb-4 h-16 w-22.5 object-contain md:h-22 md:w-30"
          />

          <h2 className="text-[64px] uppercase font-medium mx-auto leading-tight text-[#454545]">
            Explore Our{' '}
            <span className="text-[#e7d500] text-[64px] uppercase font-medium">Featured Products</span> To Power
            Through Your Day
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[18px] leading-5 text-[#777]">
            Discover our premium selection of 5-hour ENERGY shots, crafted to deliver
            long-lasting energy and mental clarity.
          </p>
        </div>

        <div className="relative mt-10 grid items-center gap-10 md:grid-cols-[1fr_1.2fr_1fr] md:gap-6">
          <div className="order-2 space-y-6 md:order-1">
            {slide.features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[46px] w-[46px] shrink-0 object-contain"
                />

                <div className='featuredHou-title'>
                  <h3 className="text-left text-[22px] font-black uppercase leading-none font-normal text-[#444]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-left text-[18px] leading-5 text-[#777]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative order-1 flex min-h-[420px] items-end justify-center md:order-2 md:min-h-[560px]">
            <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full border-2 border-[#e7d500] md:h-[500px] md:w-[500px]" />

            <img
              key={active}
              src={slide.bottle}
              alt=""
              className="relative z-10 h-[390px] object-contain drop-shadow-[0_22px_20px_rgba(0,0,0,0.25)] transition-all duration-500 md:h-[520px]"
            />
          </div>

          <div className="order-3 flex flex-col items-start text-left">
            <p className="max-w-[360px] text-[18px] leading-5 text-[#777]">
              {slide.description}
            </p>

            <button className="mt-5 rounded-br-2xl rounded-tl-2xl bg-[#f4df00] px-6 py-3 text-[18px] font-bold text-black">
              Shop Now
            </button>

            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-black"
              >
                <img src={arrowPrev} />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4df00] text-lg text-black"
              >
                <img src={arrowNext} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;