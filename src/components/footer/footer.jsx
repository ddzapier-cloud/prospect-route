import React from 'react';

import footerLogo from '../../assets/footer/footer-logo.png';
import footerBg from '../../assets/footer/footer-bg.png';

// Aap ye icons apne assets se import kar lena
import locationIcon from '../../assets/footer/location.png';
import phoneIcon from '../../assets/footer/phone.png';
import emailIcon from '../../assets/footer/email.png';
import facebookIcon from '../../assets/footer/facebook.png';
import instagramIcon from '../../assets/footer/instagram.png';
import youtubeIcon from '../../assets/footer/youtube.png';
import twitterIcon from '../../assets/footer/twitter.png';
import tiktokIcon from '../../assets/footer/tiktok.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

     <div className='container mx-auto'>
          <div className="relative z-10 mx-auto md:px-8">
        <div className="flex justify-center">
          <img
            src={footerLogo}
            alt="5-hour Energy"
            className="h-[70px] w-auto object-contain md:h-[95px]"
          />
        </div>

        <div className="grid gap-10 pb-12 pt-10 md:grid-cols-[1.15fr_0.9fr_1fr_2.25fr] md:gap-12">
          <div>
            <h3 className="font-['Bebas_Neue'] text-[26px] text-left leading-none text-white">
              CONTACT
            </h3>

            <div className="mt-4 space-y-3 font-['DM_Sans'] text-[13px] leading-[1.35] text-[#B3B3B3]">
              <div className="flex items-start gap-2">
                <img src={locationIcon} alt="" className="mt-1 h-4 w-4 object-contain" />
                <p className='text-[18px] text-left'>
                  Si Online, LLC
                  <br />
                  38955 Hills Tech Dr.
                  <br />
                  Farmington Hills, MI 48331
                </p>
              </div>

              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="" className="h-4 w-4 object-contain" />
                <p>888-960-9495</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="" className="h-4 w-4 object-contain" />
                <p>
                  Or fill out <span className="underline">this form</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-['Bebas_Neue'] text-[26px] text-left leading-none text-white">
              SOCIAL
            </h3>

            <ul className="mt-4 space-y-3 font-['DM_Sans'] text-[18px] text-left text-[#B3B3B3]">
              {[
                [facebookIcon, 'Facebook'],
                [instagramIcon, 'Instagram'],
                [youtubeIcon, 'Youtube'],
                [twitterIcon, 'Twitter'],
                [tiktokIcon, 'Tiktok'],
              ].map(([icon, label]) => (
                <li key={label} className="flex items-center gap-2">
                  <img src={icon} alt="" className="h-4 w-4 object-contain" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-['Bebas_Neue'] text-[26px] text-left leading-none text-white">
              COMPANY
            </h3>

            <ul className="mt-4 space-y-3 font-['DM_Sans'] text-[18px] text-left text-[#B3B3B3]">
              <li>Search</li>
              <li>Return Policy</li>
              <li>Shipping Policy</li>
              <li>Subscription Terms</li>
              <li>Patents</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Bebas_Neue'] text-[26px] text-left mb-2 leading-none text-white">
              STAY INFORMED
            </h3>

            <p className="mt-4 max-w-[530px] font-['DM_Sans'] text-[18px] text-left leading-[1.45] text-[#B3B3B3]">
              Get the latest updates, new product information, emails, and targeted
              marketing from the Makers of 5-hour ENERGY, and information from other
              products and promotions that may be of interest to me. By submitting your
              email, you agree to the <span className="underline">Terms & Conditions</span>
            </p>

            <form className="mt-4 flex h-[42px] max-w-[390px] overflow-hidden rounded-full bg-[#6d6d6d]">
              <input
                type="email"
                placeholder="Your Email"
                className="h-full flex-1 bg-transparent px-6 font-['DM_Sans'] text-[16px] text-white placeholder:text-white outline-none"
              />

              <button
                type="submit"
                className="flex h-full w-[86px] items-center justify-center rounded-full bg-[#fff200] text-[22px] font-black text-black"
              >
                &gt;
              </button>
            </form>
          </div>
        </div>
      </div>

     </div>
      
      <div className="relative z-10 border-t border-white/20">
        <div className='container mx-auto'>
            <div className="mx-auto flex flex-row gap-3 px-5 py-6 font-['DM_Sans'] text-[12px] text-[#B3B3B3] md:flex-row md:items-center md:justify-between md:px-8">
            <p className='text-[16px] text-left'>© 2024 Living Essentials Marketing, LLC. All rights reserved.</p>
            <p className='text-[16px] text-left'>Terms and Conditions | Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
