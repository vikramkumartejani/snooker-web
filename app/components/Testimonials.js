"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.",
    author: "Tommy haffman",
    position: "Founder of Levis",
    rating: 5,
    logo: "/continental-logo.png",
  },
  {
    id: 2,
    text: "This template is superior in so many ways. The code, the design, the regular updates, the support.. It's the whole package. Excellent Work.",
    author: "Eugenia Moore",
    position: "CTO of Airbnb",
    rating: 4,
    logo: "/continental-logo.png",
  },
  {
    id: 3,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 5,
    logo: "/continental-logo.png",
  },
  {
    id: 4,
    text: "This template is superior in so many ways. The code, the design, the regular updates, the support.. It's the whole package. Excellent Work.",
    author: "Eugenia Moore",
    position: "CTO of Airbnb",
    rating: 4,
    logo: "/continental-logo.png",
  },
  {
    id: 5,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 5,
    logo: "/continental-logo.png",
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#4DC488] text-sm font-medium">TESTIMONIALS</span>
        <h2 className="text-4xl font-bold mt-2 text-gray-900">
          What Our Users Says
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
          bulletActiveClass: `swiper-pagination-bullet-active swiper-pagination-testClass-active`,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="pb-14"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <div className="mb-6">
                <img
                  src={testimonial.logo}
                  alt="Company Logo"
                  className="h-8 object-contain"
                />
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
