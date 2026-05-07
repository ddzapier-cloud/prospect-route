import React from 'react';

import bundleImg from '../../assets/bundle.png';
import merchImg from '../../assets/merch.png';
import productsImg from '../../assets/products.png';
import EnergyImg from '../../assets/marquee/energy.png';
import FocusImg from '../../assets/marquee/focus.png';
import PowerImg from '../../assets/marquee/power.png';
import SpeedImg from '../../assets/marquee/speed.png';

const PromoSection = () => {
  return (
    <section className="w-full bg-white md:px-8">
      <div className="mx-auto grid gap-5 md:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[300px] overflow-hidden rounded-lg bg-black md:min-h-[600px]">
          <img
            src={bundleImg}
            alt="Build a bundle"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 p-6">
            <h2 className="text-[28px] font-black uppercase leading-none text-white md:text-[36px]">
              Build a Bundle
            </h2>

            <button className="mt-4 rounded bg-[#fff200] px-5 py-2 text-[12px] font-bold text-black">
              Build Now
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative overflow-hidden rounded-lg bg-[#a5adbc]">
            <img
              src={merchImg}
              alt="Merch"
              className="absolute bottom-0 right-0 h-full object-cover object-right-bottom"
            />

            <div className="relative z-10 p-6">
              <h2 className="max-w-[230px] text-[25px] font-black uppercase leading-none text-white md:text-[32px]">
                See Our <span className="text-[#fff200]">Merch</span>
              </h2>

              <button className="mt-4 rounded bg-[#fff200] px-5 py-2 text-[12px] font-bold text-black">
                View All
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-black">
            <div className="relative z-20 p-6 pb-0">
              <h2 className="text-[23px] font-black uppercase leading-tight text-white md:text-[30px]">
                Revitalize Your Day,{' '}
                <span className="text-[#fff200]">Nourish</span> Yourself
              </h2>
            </div>

            <img
              src={productsImg}
              alt="Energy products"
              className="absolute bottom-0 left-0 z-10 h-[70%] w-full object-contain object-bottom"
            />

            <div className="absolute bottom-4 right-[-30px] z-30 w-[260px] rotate-[-10deg] overflow-hidden bg-white py-1 md:w-[330px]">
              <div className="flex w-max animate-[marquee_8s_linear_infinite] items-center gap-6 whitespace-nowrap text-[16px] font-black uppercase text-black">
                <img src={FocusImg} alt="Focus" className="w-[50px] h-[50px] object-contain" />
                <img src={EnergyImg} alt="Energy" className="w-[50px] h-[50px] object-contain" />
                <img src={FocusImg} alt="Focus" className="w-[50px] h-[50px] object-contain" />
                <img src={EnergyImg} alt="Energy" className="w-[50px] h-[50px] object-contain" />
                <img src={FocusImg} alt="Focus" className="w-[50px] h-[50px] object-contain" />
                <img src={EnergyImg} alt="Energy" className="w-[50px] h-[50px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default PromoSection;