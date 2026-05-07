import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// ── Data ──────────────────────────────────────────────
const testimonialData = [
  { id: 1, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", company: "Wellness Wonderland", name: "Anna Perkins"   },
  { id: 2, quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",          company: "Health Hub",          name: "James Carter"  },
  { id: 3, quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",                  company: "Vital Living",        name: "Sarah Mitchell" },
  { id: 4, quote: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",               company: "Pure Wellness",       name: "David Lee"      },
]

// ── QuoteIcon Component ────────────────────────────────
const QuoteIcon = () => (
  <div className="flex justify-center mb-4">
    <svg width="44" height="36" viewBox="0 0 44 36" fill="none">
      <path d="M0 36V22.2L6.6 0H15L10.2 22.2H18V36H0ZM26 36V22.2L32.6 0H41L36.2 22.2H44V36H26Z" fill="#FFD700" />
    </svg>
  </div>
)

// ── QuoteBox Component ─────────────────────────────────
const QuoteBox = ({ quote }) => (
  <div
    className="w-full mb-6 px-5 py-4"
    style={{ border: '1.5px dashed #4fc3d4', borderRadius: '4px' }}
  >
    <p className="text-center text-gray-700 text-base leading-relaxed italic">
      {quote}
    </p>
  </div>
)

// ── AuthorInfo Component ───────────────────────────────
const AuthorInfo = ({ company, name }) => (
  <div className="text-center">
    <p className="text-sm text-gray-400 mb-1">{company}</p>
    <p className="text-lg font-bold text-gray-800">{name}</p>
  </div>
)

// ── TestimonialCard Component ──────────────────────────
const TestimonialCard = ({ quote, company, name }) => (
  <div
    className="bg-white flex flex-col items-center py-8 px-10 w-full"
    style={{ borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: '560px' }}
  >
    <QuoteIcon />
    <QuoteBox quote={quote} />
    <AuthorInfo company={company} name={name} />
  </div>
)

// ── Main Component ─────────────────────────────────────
const testimonial = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        centeredSlides={true}
        spaceBetween={24}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0:   { slidesPerView: 1.15 },
          640: { slidesPerView: 1.4  },
          900: { slidesPerView: 1.6  },
        }}
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id} style={{ maxWidth: '560px' }}>
            <TestimonialCard
              quote={item.quote}
              company={item.company}
              name={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default testimonial