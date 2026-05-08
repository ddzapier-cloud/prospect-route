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
    <section className="w-full bg-white mt-20">
      <div className="mx-auto grid gap-5 md:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-75 overflow-hidden rounded-lg bg-black md:min-h-150">
          <img
            src={bundleImg}
            alt="Build a bundle"
            className="absolute inset-0 h-full w-full object-cover rounded-[20px]"
          />

          <div className="headingText relative z-10 p-6 flex flex-col items-start">
            <h2 className="text-[48px] uppercase font-medium leading-none text-white">
              Build a <span className="text-[#fff200]">Bundle</span>
            </h2>

            <button className="relative z-40 rounded-[25px_0] bg-[#fff200] px-10 py-3 text-[18px] font-bold text-black">
              Build Now
            </button>

          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative overflow-hidden rounded-lg bg-[#a5adbc] min-h-75">
            <img
              src={merchImg}
              alt="Merch"
              className="absolute bottom-0 right-0 h-full object-cover object-bottom-right"
            />

            <div className="headingText relative z-10 p-6 flex flex-col items-start">
              <h2 className="text-[48px] uppercase font-medium leading-none text-white">
                See Our <span className="text-[#fff200]">Merch</span>
              </h2>

              <button className="relative z-40 rounded-[25px_0] bg-[#fff200] px-10 py-3 text-[18px] font-bold text-black">
                View All
              </button>

            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-black min-h-75">
            <div className="headingText relative z-20 p-6 pb-0 flex flex-col items-start">
              <h2 className="text-[48px] uppercase font-medium leading-tight text-white">
                Revitalize Your Day,{' '}
                <span className="text-[#fff200]">Nourish</span> Yourself
              </h2>
            </div>

            <img
              src={productsImg}
              alt="Energy products"
              className="absolute bottom-0 left-0 z-10 h-[70%] w-full object-contain object-bottom"
            />

            <div className="absolute bottom-4 right-7.5 z-30 w-137.5] rotate-338 overflow-hidden bg-white py-1 md:w-110">
              <div className="flex w-max animate-[marquee_8s_linear_infinite] items-center gap-6 whitespace-nowrap text-[16px] font-black uppercase text-black">
                <img src={FocusImg} alt="Focus" className="w-25 h-12.5 object-contain" />
                <img src={EnergyImg} alt="Energy" className="w-25 h-12.5 object-contain" />
                <img src={FocusImg} alt="Focus" className="w-25 h-12.5 object-contain" />
                <img src={EnergyImg} alt="Energy" className="w-25 h-12.5 object-contain" />
                <img src={FocusImg} alt="Focus" className="w-25 h-12.5 object-contain" />
                <img src={EnergyImg} alt="Energy" className="w-25 h-12.5 object-contain" />
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