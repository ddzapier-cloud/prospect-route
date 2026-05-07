import React from 'react';
import bottleFirst from '../../assets/hero/bottle-first.png';
import bottleSecond from '../../assets/hero/bottle-second.png';
import ShopBtn from '../../components/button/Shop.jsx'

const Hero = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden bg-black pt-6">
      <div className="relative mx-auto flex w-full flex-col items-center text-center">
        <div className="relative w-full">
          <h1 className="absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none text-[150px] font-black leading-none md:text-[190px]">
            ENERGY
          </h1>

          <h1 className="revEnergy absolute left-1/2 top-[130px] z-0 -translate-x-1/2 scale-y-[-1] select-none text-[150px] font-black leading-none [mask-image:linear-gradient(to_bottom,black,transparent_70%)] md:top-[160px] md:text-[190px]">
            ENERGY
          </h1>

          <div className="absolute left-1/2 top-[180px] z-20 h-[220px] -translate-x-1/2">
            <div className="heroImg-parent flex items-baseline">
              <img
                src={bottleFirst}
                alt="Bottle first"
                className="object-contain"
              />

              <img
                src={bottleSecond}
                alt="Bottle second"
                className="object-contain"
              />

            </div>
            <p className="relative z-40 mt-3 px-4 text-[18px] text-white/60">
                Lorem ipsum dolor sit amet, conetur ading elit. Lorem ipsum dolor sit amet,
                conetur ading elit.
            </p>
            <ShopBtn />
          </div>
        </div>

        
      </div>

      
    </section>
  );
};

export default Hero;
