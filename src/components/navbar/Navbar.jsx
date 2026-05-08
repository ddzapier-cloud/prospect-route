import React, { useState } from 'react'
import prosLogo from '../../assets/navbar/logo.png'
import cartIcon from '../../assets/navbar/cart.png'
import searchIcon from '../../assets/navbar/search.png'
import userIcon from '../../assets/navbar/user.png'

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Shop', link: '#shop' },
    { name: 'Build a Bundle', link: '#bundle' },
    { name: 'Merch', link: '#merch' },
    { name: 'Pre Workout', link: '#preworkout' },
    { name: 'FAQs', link: '#faqs' },
    { name: 'Blogs', link: '#blogs' },
    { name: 'Store Locator', link: '#store' }
  ]

  return (
    <header className="sticky top-0 z-50 px-6 py-4">
      <nav className="max-w-330 mx-auto bg-white rounded-xl shadow-sm px-6 py-3 flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={prosLogo}
            alt="Logo"
            className="w-auto object-contain text-[16px] font-medium"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="navItems-parent hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-[#222] cursor-pointer font-medium hover:text-black transition text-[18px]"
            >
              {item.name}
            </a>
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
              className="h-4.5 w-4.5 object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </button>

          {/* Cart Icon */}
          <button className="bg-transparent border-none cursor-pointer p-0 flex items-center text-[16px]">
            <img
              src={cartIcon}
              alt="Cart"
              className="h-4.5 w-4.5 object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </button>

          {/* Search Icon */}
          <button className="bg-transparent border-none cursor-pointer p-0 flex items-center text-[16px]">
            <img
              src={searchIcon}
              alt="Search"
              className="h-4.5 w-4.5 object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </button>

          {/* Mobile / Tablet Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden flex flex-col gap-1.25 bg-transparent border-none cursor-pointer p-0"
          >
            <span className={`w-6 h-0.5 bg-black transition ${isMenuOpen ? 'rotate-45 translate-y-1.75' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition ${isMenuOpen ? '-rotate-45 -translate-y-1.75' : ''}`}></span>
          </button>

        </div>
      </nav>

      {/* Mobile / Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="xl:hidden max-w-330 mx-auto mt-3 bg-white rounded-xl shadow-sm px-6 py-5">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#222] cursor-pointer font-medium hover:text-black transition text-[18px] border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar