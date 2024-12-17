"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "This template is superior in so many ways. The code, the design, the regular updates, the support.. It's the whole package. Excellent Work.",
    author: "Eugenia Moore",
    position: "CTO of Airbnb",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 2,
    text: "Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.",
    author: "Tommy haffman",
    position: "Founder of Levis",
    rating: 5,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 3,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 5,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 4,
    text: "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
    author: "Tommy Smith",
    position: "Founder of Continental",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 5,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 6,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 7,
    text: "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
    author: "Tommy Smith",
    position: "Founder of Continental",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 8,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
  {
    id: 9,
    text: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
    author: "Sara Smith",
    position: "Founder of Continental",
    rating: 4,
    logo: "/assets/continental-logo.png",
  },
];

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) =>
      index < rating ? (
        <MdOutlineStar
          key={index}
          className="text-[22px] md:text-[30px] text-[#FFB400] dark:text-yellow-300"
        />
      ) : (
        <MdOutlineStarBorder
          key={index}
          className="text-[22px] md:text-[30px] text-[#2E263D4D] dark:text-gray-600"
        />
      )
    );
  };

  return (
    <section className="pb-[60px] md:pb-[70px] dark:bg-black">
      <div className="mb-[40px] md:mb-[60px] px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-[1280px] mx-auto">
          <span className="text-greenish text-[10px] md:text-[18px] font-[600] uppercase mb-[8px] block">
            TESTIMONIALS
          </span>
          <h2 className="text-[20px] md:text-[40px] md:leading-[45px] font-bold text-blackish dark:text-white mb-[12px]">
            What Our Users Says
          </h2>
          <p className="text-grayish dark:text-white/90 text-[12px] md:text-[16px] max-w-[500px] mx-auto">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>

      <div className="testimonial-slider">
        {isClient ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            resizeObserver={true}
            updateOnWindowResize={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet swiper-pagination-custom",
              bulletActiveClass:
                "swiper-pagination-bullet-active swiper-pagination-custom-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4.5,
                spaceBetween: 70,
              },
              1950: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              2000: {
                slidesPerView: 6.5,
                spaceBetween: 60,
              },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="sm:px-2 md:px-0 px-4 w-full">
                <div className="bg-white dark:bg-greenish rounded-[12px] !w-full !min-w-full !max-w-full min-h-[300px] max-h-[300px] h-[300px] p-6 transition-all duration-300 testimonial-card flex flex-col items-center justify-center text-center">
                  <div className="h-[26.1px] mb-[18.35px]">
                    <Image
                      src={testimonial.logo}
                      alt="Continental Logo"
                      width={120}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] md:text-[15px] text-[#2E2E2EE5] dark:text-gray-200 mb-[18px] sm:min-h-[70px] min-h-[50px]">
                    {testimonial.text}
                  </p>
                  <div className="flex gap-[2px] mb-[16px]">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-[500] text-[#2E2E2EE5] dark:text-gray-200">
                      {testimonial.author}
                    </h4>
                    <p className="text-[13px] text-[#2E2E2EB2] dark:text-white pt-[2px]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-pulse text-lg">Loading testimonials...</div>
          </div>
        )}
      </div>
    </section>
  );
}

