import React from 'react'
import prosLogo from '../../assets/navbar/logo.png'
import cartIcon from '../../assets/navbar/cart.png'
import searchIcon from '../../assets/navbar/search.png'
import userIcon from '../../assets/navbar/user.png'

const Navbar = ({ onLoginClick }) => {
  const navItems = [
    'Shop',
    'Build a Bundle',
    'Merch',
    'Pre Workout',
    'FAQs',
    'Blogs',
    'Store Locator'
  ]

  return (
    <header className="sticky top-0 z-50 px-6 py-4">
      <nav className="max-w-[1320px] mx-auto bg-white rounded-xl shadow-sm px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={prosLogo}
            alt="Logo"
            className="w-auto object-contain text-[16px] font-medium"
          />
        </div>

        {/* Nav Links */}
        <div className="navItems-parent flex items-center gap-8">
          {navItems.map((item) => (
            <span
              key={item}
              className="text-[#222] cursor-pointer font-medium hover:text-black transition text-[18px]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">

          {/* User Icon */}
          <button
            onClick={onLoginClick}
            title="Login"
            className="bg-transparent border-none cursor-pointer p-0 flex items-center text-[16px]"
          >
            <img
              src={userIcon}
              alt="User"
              className="h-[18px] w-[18px] object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </button>

          {/* Cart Icon */}
          <button className="bg-transparent border-none cursor-pointer p-0 flex items-center text-[16px]">
            <img
              src={cartIcon}
              alt="Cart"
              className="h-[18px] w-[18px] object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </button>

          {/* Search Icon */}
          <button className="bg-transparent border-none cursor-pointer p-0 flex items-center text-[16px]">
            <img
              src={searchIcon}
              alt="Search"
              className="h-[18px] w-[18px] object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Navbar