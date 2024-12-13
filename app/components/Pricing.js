"use client";

import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "20",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      id: 2,
      name: "Basic Plan",
      price: "20",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      id: 3,
      name: "Basic Plan",
      price: "20",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      id: 4,
      name: "Basic Plan",
      price: "20",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
  ];

  return (
    <section className="pt-[58px] md:pt-[116px] lg:px-8 bg-[#F0FFF7] relative">
      <img
        src="/assets/pricing-15-ball-object.png"
        alt="snooker ball 15"
        className="absolute left-0 top-0 lg:w-[11.7vw] w-[13.3vw]"
      />
      <img
        src="/assets/pricing-1-ball-object.png"
        alt="snooker ball 15"
        className="absolute md:right-[33px] right-[24.8px] top-0 lg:w-[9vw] w-[13.3vw]"
      />
      <img
        src="/assets/pricing-stick-object.png"
        alt="snooker ball 15"
        className="absolute right-0 top-0 w-[13.3vw]"
      />
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center px-4 sm:px-6 lg:px-0">
          <span className="text-greenish text-[10px] md:text-[18px] font-[600] uppercase mb-[8px] block">
            PRICING
          </span>
          <h2 className="text-[20px] md:text-[40px] md:leading-[45px] font-bold text-blackish mb-[12px]">
            Awesome Pricing Plan
          </h2>
          <p className="text-grayish text-[12px] md:text-[16px] max-w-[700px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna incididunt ut
            labore et
          </p>
        </div>

        <div className="md:grid flex md:grid-cols-2 lg:grid-cols-4 gap-[14px] md:gap-[24px] overflow-x-auto px-4 sm:px-6 lg:px-0 pt-[26.62px] md:pt-[60px] pb-[47px] md:pb-[66px]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="md:w-auto w-[200px] md:min-w-auto min-w-[200px] bg-white rounded-[16px] md:rounded-[20px] px-[17px] md:px-[24px] md:pb-[47px] pb-[29px] pt-[12px] md:pt-[19px] transition-all duration-300 group hover:border-greenish border border-transparent"
              style={{
                boxShadow: "3.85px 5.78px 38.5px 0px #0000000D",
              }}
            >
              <h3 className="text-[15.28px] md:text-[22px] font-[500] text-center text-blackish mb-[11px]">
                {plan.name}
              </h3>
              <div className="mb-[50px] md:mb-[70px] flex items-center md:gap-[10px] gap-[7px] relative">
                <div className="flex items-start">
                  <span className="text-[10.99px] md:text-[14px] md:text-[15.82px] text-[#2E2E2EE5] font-[500] mt-1">
                    $
                  </span>
                  <span className="text-[29.17px] md:text-[30px] md:text-[42px] text-blackish font-bold md:leading-[42.2px]">
                    {plan.price}
                  </span>
                </div>
                <div className="">
                  <p className="text-blackish text-[9.72px] md:text-[14px] font-[500]">
                    Per month
                  </p>
                  <p className="text-grayish text-[7.94px] md:text-[11px] font-[400]">
                    10% off for yearly subscription
                  </p>
                </div>
                <img
                  src="/assets/pricing-curve.png"
                  alt="curve"
                  className="absolute bottom-[-15px] w-[43px] md:w-auto left-0"
                />
              </div>
              <div className="space-y-[11px] md:space-y-[16px] mb-[16px] md:mb-[18px]">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[15px] text-grayish text-[11.11px] md:text-[16px] font-[400]"
                  >
                    <Image
                      src="/assets/arrow.png"
                      alt="arrow"
                      width={16}
                      height={7.82}
                      className="md:w-[16px] w-[11px]"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-[8px] md:py-[12px] px-6 rounded-[10.22px] md:rounded-[16px] border border-greenish text-[12px] md:text-[16px] font-[600] transition-all duration-300 group-hover:bg-greenish group-hover:text-white text-greenish">
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
