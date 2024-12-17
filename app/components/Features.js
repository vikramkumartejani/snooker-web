"use client";

import Image from "next/image";
import {
  FiSettings,
  FiFileText,
  FiTriangle,
  FiPieChart,
  FiUsers,
  FiCreditCard,
} from "react-icons/fi";

const features = [
  {
    icon: "/assets/feature1.png",
    title: "Light Control System",
    description: "Ensures fraud-free games with top-notch security.",
  },
  {
    icon: "/assets/feature2.png",
    title: "Billing Management",
    description: "Streamlines and automates your billing processes.",
  },
  {
    icon: "/assets/feature3.png",
    title: "Game Management",
    description: "Simplifies managing and organising your games.",
  },
  {
    icon: "/assets/feature4.png",
    title: "Business Analytics",
    description: "Provides insights to help grow your business.",
  },
  {
    icon: "/assets/feature5.png",
    title: "Customer Management",
    description: "Keeps track of customer interactions and details.",
  },
  {
    icon: "/assets/feature6.png",
    title: "Credit Management",
    description: "Handles credit efficiently and securely.",
  },
  {
    icon: "/assets/feature7.png",
    title: "Expense Management",
    description: "Monitors and controls business expenses easily.",
  },
  {
    icon: "/assets/feature8.png",
    title: "Food Management",
    description: "Manages food services and inventory effortlessly.",
  },
  {
    icon: "/assets/feature9.png",
    title: "Staff Management",
    description: "Organizes staff schedules and records smoothly.",
  },
  {
    icon: "/assets/feature10.png",
    title: "Membership Management",
    description: "Manages memberships and member information efficiently.",
  },
  {
    icon: "/assets/feature11.png",
    title: "Booking Management",
    description: "Handles mobile bookings with ease.",
  },
  {
    icon: "/assets/feature12.png",
    title: "Reports",
    description:
      "Generates clear and detailed reports for better decision-making.",
  },
];

export default function Features() {
  return (
    <section className="overflow-hidden pt-[40px] dark:bg-black">
      <img src="/assets/top-wave.png" alt="top wave" className="w-full" />
      <div className="relative">
        <Image
          src="/assets/features-cube.png"
          alt="cube"
          width={130.38}
          height={116.06}
          data-aos="fade-left"
          className="md:w-[130.38] w-[10vw] absolute right-4 -top-10 z-[2]"
        />
        <Image
          src="/assets/features-cube.png"
          alt="cube"
          width={130.38}
          height={116.06}
          data-aos="fade-right"
          className=" md:w-[130.38] w-[10vw] absolute left-4 -bottom-20 z-[2]"
        />

        <div
          id="features"
          className="py-[21px] md:py-[60px] lg:py-[84px] px-4 bg-light-gradient dark:bg-dark-gradient"
        >
          <div className="max-w-[1280px] mx-auto">
            <div data-aos="fade-up" className="text-center mb-[58px]">
              <span
                className="inline-block px-[8px] py-[2px] bg-[#DCFCE7] text-greenish rounded-full text-[10px] md:text-[12px] font-[500] font-poppins uppercase mb-[6px] md:mb-[11px]"
                style={{ boxShadow: "0px 1px 2px 0px #6951FF0D" }}
              >
                FEATURES
              </span>
              <h2 className="text-blackish text-[20px] md:text-[30px] lg:text-[36px] lg:leading-[44px] font-bold mb-[16px] tracking-[-2%]">
                Gain more insight into how people use your
              </h2>
              <p className="text-grayish text-[14px] md:text-[16px] max-w-[919px] mx-auto">
                With our integrated CRM, project management, collaboration and
                invoicing capabilities, you can manage every aspect of your
                business in one secure platform.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1127px] mx-auto xl:gap-[46px] md:gap-8 gap-[24px] pb-[60px]">
              {features.map((feature, index) => (
                <div data-aos="fade-up" key={index} className="card-border overflow-hidden p-0.5">
                  <div
                    className="bg-white rounded-[20px] w-full h-full relative z-40 border px-[20px] md:px-[24px] md:py-[26px] py-[20px] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-[16px] md:gap-[20px]"
                  >
                    <div className="min-w-[38px] min-h-[38px]">
                      <Image
                        src={feature.icon}
                        alt="feature icon"
                        width={38}
                        height={38}
                        className="w-[38px] h-[38px]"
                      />
                    </div>
                    <h3 className="text-[16px] md:text-[22px] font-[600] md:leading-[32px] text-blackish">
                      {feature.title}
                    </h3>
                    <p className="text-grayish text-[14px] md:text-[16px] font-[400] leading-[25px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/bottom-wave.png" alt="top wave" className="w-full" />
    </section>
  );
}
