"use client";
import Image from "next/image";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "20",
      allow: "By Basic Plan",
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
      allow: "By Basic Plan",
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
      allow: "By Basic Plan",
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
      allow: "By Basic Plan",
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
    <section
      id="pricing"
      className="pt-[58px] md:pt-[116px] lg:px-8 bg-[#F0FFF7] relative"
    >
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[14px] md:gap-[24px] overflow-auto px-4 sm:px-6 lg:px-0 pt-[26.62px] md:pt-[60px] pb-[47px] md:pb-[66px]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-0.5 cursor-pointer overflow-hidden lg:!w-fit ${selectedPlan === plan.id ? "card-border" : " rounded-[20px]"
                }`}
            >
              <div
                className="relative z-10 w-full lg:w-auto xl:min-w-[300px] min-w-full lg:min-w-[280px] bg-white rounded-[16px] md:rounded-[20px] px-[17px] md:px-[24px] md:pb-[30px] pb-[29px] pt-[16px] md:pt-[19px] transition-all duration-300 group"
                style={{
                  boxShadow: "3.85px 5.78px 38.5px 0px #0000000D",
                }}
              >
                <h3 className="text-[22px] font-[500] text-center text-blackish mb-[11px]">
                  {plan.name}
                </h3>
                <div className="flex items-center md:gap-[10px] gap-[7px] relative">
                  <div className="flex items-start">
                    <span className="text-[15.82px] text-[#2E2E2EE5] font-[500] mt-2">
                      $
                    </span>
                    <span className="text-[35px] lg:text-[42px] text-blackish font-bold md:leading-[42.2px]">
                      {plan.price}
                    </span>
                  </div>
                  <div>
                    <p className="text-blackish text-[14px] font-[500]">
                      Per month
                    </p>
                    <p className="text-grayish text-[11px] font-[400]">
                      10% off for yearly subscription
                    </p>
                  </div>
                </div>
                <p className="py-6 md:py-8 text-blackish text-center text-[16px] font-medium">
                  {plan.allow}
                </p>
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
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full text-base py-[8px] md:py-[12px] px-6 rounded-[10.22px] md:rounded-[16px] border border-greenish text-[12px] md:text-[16px] font-[600] transition-all duration-300 group-hover:bg-greenish group-hover:text-white ${selectedPlan === plan.id
                      ? "bg-greenish text-white"
                      : "text-greenish"
                    }`}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
