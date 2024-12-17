"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

const slides = [
  {
    id: 1,
    tag: "SNOOKER CLUBS",
    title: "1. Lorem ipsum lorem dolor sit amet.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis viverra ante, quis condimentum ipsum. Phasellus bLorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: "/assets/hero-img.png",
    mobileImage: "/assets/hero-img2.svg",
  },
  {
    id: 2,
    tag: "BILLIARDS",
    title: "2. Lorem ipsum lorem dolor sit amet. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis viverra ante, quis condimentum ipsum. Phasellus bLorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: "/assets/hero-img.png",
    mobileImage: "/assets/hero-img2.svg",
  },
  {
    id: 3,
    tag: "POOL HALLS",
    title: "3. Lorem ipsum lorem dolor sit amet. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis viverra ante, quis condimentum ipsum. Phasellus bLorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: "/assets/hero-img.png",
    mobileImage: "/assets/hero-img2.svg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="home" className="overflow-hidden relative pt-16 dark:bg-black">
      <img
        src="/assets/hero-object.png"
        alt="Snooker Table Illustration"
        className="object-contain absolute left-0 xl:left-[-80px] bottom-10 lg:bottom-9 dark:opacity-20"
      />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="ps-4 sm:ps-6 pe-4 sm:pe-6 lg:pe-0 lg:ps-8 xl:pe-8">
              <div className="max-w-[1280px] mx-auto pt-[50px] pb-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                  {/* Left Section */}
                  <div
                    data-aos="fade-up"
                    className="relative z-30 pb-[37px] lg:pb-[60px] lg:pt-[20px] flex flex-col lg:items-start items-center justify-center lg:text-left text-center"
                  >
                    <span
                      className="inline-block px-[8px] py-[2px] bg-greenish text-white rounded-full text-[10px] md:text-[12px] font-[500] font-poppins uppercase mb-[6px] md:mb-[11px]"
                      style={{ boxShadow: "0px 1px 2px 0px #6951FF0D" }}
                    >
                      {slide.tag}
                    </span>
                    <h1 className="text-[24px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[62px] leading-[30px] lg:leading-[60px] xl:leading-[72px] md:leading-[58px] font-bold text-blackish dark:text-white mb-[15.64px] md:mb-[18px] tracking-[-2%]">
                      {slide.title}
                    </h1>
                    <p className="text-grayish dark:text-white/90 text-[14px] md:text-[18px] lg:text-[20px] font-[500] mb-[17px] md:mb-[30px] lg:mb-[49px]">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap md:items-start md:justify-start items-center justify-center gap-[18px] md:gap-[24px]">
                      <button className="flex items-center space-x-[10px] bg-greenish text-white px-[22px] py-[11px] rounded-[16px] transition hover:bg-[#59d493]">
                        <Image src="/assets/google-play.png" alt="google play" width={24} height={24} />
                        <span>Play Store</span>
                      </button>
                      <button className="flex items-center space-x-[8px] border border-greenish text-greenish px-[22px] py-[11px] rounded-[16px] transition hover:bg-greenish/10">
                        <FaApple className="h-[27px] w-[27px]" />
                        <span>App Store</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div data-aos="fade-left" className="lg:absolute flex items-center justify-center right-0 bottom-0 z-30">
                    <img
                      src={slide.image}
                      alt="Snooker Table Illustration"
                      className="lg:flex hidden object-contain lg:h-[600px] sm:h-[500px]"
                    />
                    <img
                      src={slide.mobileImage}
                      alt="Snooker Table Illustration"
                      className="lg:hidden flex object-contain lg:h-[600px] sm:h-[500px] mb-[-30px]"
                    />
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`max-w-3 max-h-3 min-w-3 min-h-2 md:min-h-3 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "min-w-5 md:min-w-7 md:max-w-7 bg-white  lg:bg-greenish"
                    : "bg-gray-300 dark:bg-gray-600"
                  }`}
                onClick={() => {
                  const swiper = document.querySelector('.swiper').swiper;
                  swiper.slideTo(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
}

