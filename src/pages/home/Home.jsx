import { useState } from 'react'
import Login from '../Login'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Explore from '../../components/explore/Explore'
import Marquee from '../../components/marquee/Marquee'
import Footer from '../../components/footer/footer'

import Faq from '../../components/faq/Faq'
import Testimonial from '../../components/testimonial/Testimonial'
import FeaturedProduct from '../../components/featured/FeaturedProducts'
import PromoSection from '../../components/promo/PromoSection'




function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ background: '#000', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      {/* ✅ Navbar — alag component */}
      <Navbar onLoginClick={() => setShowModal(true)} />
      <Hero />
      <Explore />
      <div className='bg-white'>
        <Marquee />
        <FeaturedProduct />
        <div className='container mx-auto'>
            <PromoSection/>
        </div>
        <Testimonial />
        <div className='container mx-auto'>
            <Faq />
        </div>
      </div>
      <Footer />
      

      {/* ✅ Login Modal */}
      {showModal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 999, backdropFilter: 'blur(4px)'
          }}
        >
          <Login onClose={() => setShowModal(false)} />
        </div>
      )}

    </div>
  )
}

export default Home