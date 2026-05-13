import React, { useEffect, useState } from 'react'

const testimonialData = [
  { id:1, quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", company:"Wellness Wonderland", name:"Anna Perkins" },
  { id:2, quote:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.", company:"Health Hub", name:"James Carter" },
  { id:3, quote:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.", company:"Vital Living", name:"Sarah Mitchell" },
  { id:4, quote:"Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.", company:"Pure Wellness", name:"David Lee" },
]

const QuoteIcon = () => (
  <div style={{ display:'flex', justifyContent:'center', marginBottom:'20px' }}>
    <svg width="44" height="36" viewBox="0 0 44 36" fill="none">
      <path d="M0 36V22.2L6.6 0H15L10.2 22.2H18V36H0ZM26 36V22.2L32.6 0H41L36.2 22.2H44V36H26Z" fill="#FFD700"/>
    </svg>
  </div>
)

const TestimonialCard = ({ quote, company, name, isCenter, isSmallScreen }) => (
  <div style={{
    background: '#fff',
    borderRadius: '12px',
    padding: isSmallScreen ? '32px 22px 30px' : '40px 48px 36px',
    boxShadow: isCenter ? '0 4px 28px rgba(0,0,0,0.09)' : '0 2px 8px rgba(0,0,0,0.04)',

    width: isSmallScreen ? 'calc(100vw - 32px)' : 'calc(100vw - 900px)',
    minWidth: isSmallScreen ? 'calc(100vw - 32px)' : 'calc(100vw - 900px)',
    maxWidth: isSmallScreen ? '620px' : 'none',

    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: isCenter ? 1 : 0.4,
    transition: 'opacity 0.4s ease',
  }}>
    <QuoteIcon />

    <div style={{
      border: '1.5px dashed #4fc3d4',
      borderRadius: '4px',
      padding: isSmallScreen ? '16px 18px' : '18px 24px',
      marginBottom: '24px',
      width: '100%',
    }}>
      <p className="text-center text-gray-700 text-base leading-relaxed">
        {quote}
      </p>
    </div>

    <p className="text-sm text-gray-400 mb-1">{company}</p>
    <p className="text-lg font-bold text-gray-800">{name}</p>
  </div>
)

const Dots = ({ total, active, onDotClick }) => (
  <div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        style={{
          width: i === active ? '28px' : '10px',
          height: '10px',
          borderRadius: '5px',
          border: 'none',
          background: i === active ? '#FFD700' : '#d0d0d0',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          padding: 0,
        }}
      />
    ))}
  </div>
)

const testimonial = () => {
  const [active, setActive] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const total = testimonialData.length
  const prev = (active - 1 + total) % total
  const next = (active + 1) % total

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth <= 1024)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <div className="w-full py-10 mt-20">
      <div style={{ width:'100%', overflow:'hidden' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          padding: '10px 0 24px',
        }}>

          {!isSmallScreen && (
            <div style={{ marginLeft: 'calc(-100vw + 900px)' }}>
              <TestimonialCard
                {...testimonialData[prev]}
                isCenter={false}
                isSmallScreen={isSmallScreen}
              />
            </div>
          )}

          <TestimonialCard
            {...testimonialData[active]}
            isCenter={true}
            isSmallScreen={isSmallScreen}
          />

          {!isSmallScreen && (
            <div style={{ marginRight: 'calc(-100vw + 900px)' }}>
              <TestimonialCard
                {...testimonialData[next]}
                isCenter={false}
                isSmallScreen={isSmallScreen}
              />
            </div>
          )}

        </div>
      </div>

      <Dots total={total} active={active} onDotClick={setActive} />
    </div>
  )
}

export default testimonial