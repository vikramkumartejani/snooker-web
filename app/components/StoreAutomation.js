"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function StoreAutomation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const devices = [
    {
      id: 1,
      name: "Device Name",
      image: "/assets/store-img-1.png",
      controller: "8 port Controller",
    },
    {
      id: 2,
      name: "Device Name",
      image: "/assets/store-img-2.png",
      controller: "8 port Controller",
    },
    {
      id: 3,
      name: "Device Name",
      image: "/assets/store-img-3.png",
      controller: "8 port Controller",
    },
    {
      id: 4,
      name: "Device Name",
      image: "/assets/store-img-4.png",
      controller: "8 port Controller",
    },
  ];

  const DeviceCard = ({ device }) => (
    <div
    data-aos="fade-up"
      className="bg-white rounded-[12px] overflow-hidden "
      style={{ boxShadow: "2px 8px 24px 0px #0000000F" }}
    >
      <div className="relative h-[173px] w-full">
        <img
          src={device.image}
          alt={device.name}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-[13.24px] md:p-[16px] text-center">
        <h3 className="text-[14px] md:text-[16px] font-[400] md:font-[600] text-blackish">
          {device.name}
        </h3>
        <p className="text-[#999999] text-[10px] md:text-[16px] mt-[8px]">
          {device.controller}
        </p>
        <button className="w-full text-[16px] font-[600] mt-[15px] md:mt-[18px] bg-greenish text-white md:py-[12px] py-[9.5px] px-4 rounded-[16px] hover:bg-[#3da36e] transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <section className="sm:px-6 lg:px-8 pb-[60px] md:pb-[110px] dark:bg-black pt-[40px]">
      <div className="max-w-[1280px] mx-auto">
        <div data-aos="fade-up" className="sm:px-0 px-4 text-center mb-[30px] md:mb-[40px]">
          <span className="text-greenish  text-[10px] md:text-[18px] font-[600] uppercase mb-[8px] block">
            CHECK IT OUT
          </span>
          <h2 className="text-[20px] md:text-[40px] md:leading-[45px] font-bold text-blackish dark:text-white mb-[12px]">
            Store Automation
          </h2>
          <p className="text-grayish dark:text-white/90 text-[12px] md:text-[16px] max-w-[500px] mx-auto">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={"0"}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet swiper-pagination-custom",
              bulletActiveClass:
                "swiper-pagination-bullet-active swiper-pagination-custom-active",
            }}
            className="pb-10"
          >
            {devices.map((device, index) => (
              <SwiperSlide
                key={device.id}
                style={{
                  width: "240px",
                  paddingLeft: "16px",
                  paddingRight: index === devices.length - 1 ? "16px" : "0px",
                }}
              >
                <DeviceCard device={device} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
            {devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
