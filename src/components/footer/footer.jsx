import React from 'react';

import footerLogo from '../../assets/footer/footer-logo.png';
import footerBg from '../../assets/footer/footer-bg.png';

import locationIcon from '../../assets/footer/location.png';
import phoneIcon from '../../assets/footer/phone.png';
import emailIcon from '../../assets/footer/email.png';
import facebookIcon from '../../assets/footer/facebook.png';
import instagramIcon from '../../assets/footer/instagram.png';
import youtubeIcon from '../../assets/footer/youtube.png';
import twitterIcon from '../../assets/footer/twitter.png';
import tiktokIcon from '../../assets/footer/tiktok.png';

const footerLinks = {
  home: '/',
  location:
    'https://www.google.com/maps/search/?api=1&query=38955+Hills+Tech+Dr+Farmington+Hills+MI+48331',
  phone: 'tel:8889609495',
  contactForm: '/contact',

  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
  twitter: 'https://twitter.com/',
  tiktok: 'https://www.tiktok.com/',

  search: '/search',
  returnPolicy: '/pages/return-policy',
  shippingPolicy: '/pages/shipping-policy',
  subscriptionTerms: '/pages/subscription-terms',
  patents: '/pages/patents',
  accessibility: '/pages/accessibility',

  terms: '/pages/terms-and-conditions',
  privacy: '/pages/privacy-policy',
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white mt-5 pt-25">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <div className="container mx-auto px-4">
        <div className="relative z-10 mx-auto md:px-8">
          <div className="flex justify-center">
            <a href={footerLinks.home} aria-label="Go to homepage">
              <img
                src={footerLogo}
                alt="5-hour Energy"
                className="h-17.5 w-auto object-contain md:h-23.75"
              />
            </a>
          </div>

          <div className="grid gap-10 pb-12 pt-10 md:grid-cols-[1.15fr_0.9fr_1fr_2.25fr] md:gap-12">
            <div>
              <h3 className="font-['Bebas_Neue'] text-left text-[26px] leading-none text-white">
                CONTACT
              </h3>

              <div className="mt-4 space-y-3 font-['DM_Sans'] text-[13px] leading-[1.35] text-[#B3B3B3]">
                <a
                  href={footerLinks.location}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2"
                >
                  <img
                    src={locationIcon}
                    alt=""
                    className="mt-1 h-8 w-8 object-contain"
                  />
                  <p className="text-left text-[18px]">
                    Si Online, LLC
                    <br />
                    38955 Hills Tech Dr.
                    <br />
                    Farmington Hills, MI 48331
                  </p>
                </a>

                <a
                  href={footerLinks.phone}
                  className="flex items-center gap-2"
                >
                  <img
                    src={phoneIcon}
                    alt=""
                    className="h-8 w-8 object-contain"
                  />
                  <p className="text-left text-[18px]">888-960-9495</p>
                </a>

                <div className="flex items-center gap-2">
                  <img
                    src={emailIcon}
                    alt=""
                    className="h-8 w-8 object-contain"
                  />
                  <p className="text-left text-[18px]">
                    Or fill out{' '}
                    <a href={footerLinks.contactForm} className="underline">
                      this form
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Bebas_Neue'] text-left text-[26px] leading-none text-white">
                SOCIAL
              </h3>

              <ul className="mt-4 space-y-3 font-['DM_Sans'] text-left text-[18px] text-[#B3B3B3]">
                {[
                  [facebookIcon, 'Facebook', footerLinks.facebook],
                  [instagramIcon, 'Instagram', footerLinks.instagram],
                  [youtubeIcon, 'Youtube', footerLinks.youtube],
                  [twitterIcon, 'Twitter', footerLinks.twitter],
                  [tiktokIcon, 'Tiktok', footerLinks.tiktok],
                ].map(([icon, label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <img
                        src={icon}
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-['Bebas_Neue'] text-left text-[26px] leading-none text-white">
                COMPANY
              </h3>

              <ul className="mt-4 space-y-3 font-['DM_Sans'] text-left text-[18px] text-[#B3B3B3]">
                {[
                  ['Search', footerLinks.search],
                  ['Return Policy', footerLinks.returnPolicy],
                  ['Shipping Policy', footerLinks.shippingPolicy],
                  ['Subscription Terms', footerLinks.subscriptionTerms],
                  ['Patents', footerLinks.patents],
                  ['Accessibility', footerLinks.accessibility],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-['Bebas_Neue'] text-left text-[26px] leading-none text-white">
                STAY INFORMED
              </h3>

              <p className="mt-4 max-w-132.5 font-['DM_Sans'] text-left text-[18px] leading-[1.45] text-[#B3B3B3]">
                Get the latest updates, new product information, emails, and targeted
                marketing from the Makers of 5-hour ENERGY, and information from other
                products and promotions that may be of interest to me. By submitting your
                email, you agree to the{' '}
                <a href={footerLinks.terms} className="underline">
                  Terms & Conditions
                </a>
              </p>

              <form className="mt-4 flex h-10.5 max-w-97.5 overflow-hidden rounded-full bg-[#6d6d6d]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-full flex-1 bg-transparent px-6 font-['DM_Sans'] text-[16px] text-white placeholder:text-white outline-none"
                />

                <button
                  type="submit"
                  className="flex h-full w-21.5 items-center justify-center rounded-full bg-[#fff200] text-[22px] font-black text-black"
                >
                  &gt;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-row gap-3 px-5 py-6 font-['DM_Sans'] text-[12px] text-[#B3B3B3] md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-left text-[16px]">
              © 2024 Living Essentials Marketing, LLC. All rights reserved.
            </p>

            <p className="text-left text-[16px]">
              <a href={footerLinks.terms}>Terms and Conditions</a>
              {' | '}
              <a href={footerLinks.privacy}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
