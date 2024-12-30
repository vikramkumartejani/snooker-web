"use client";
import Image from "next/image";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      monthlyPrice: "25",
      yearlyPrice: "20",
      allow: "By Basic Plan",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: "Standard Plan",
      monthlyPrice: "35",
      yearlyPrice: "30",
      allow: "By Standard Plan",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      isPopular: false,
    },
    {
      id: 3,
      name: "Popular Plan",
      monthlyPrice: "45",
      yearlyPrice: "40",
      allow: "By Popular Plan",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      isPopular: true,
    },
    {
      id: 4,
      name: "Premium Plan",
      monthlyPrice: "60",
      yearlyPrice: "50",
      allow: "All feature from Premium Plan",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="overflow-hidden pt-[58px] md:pt-[116px] lg:px-8 bg-[#F0FFF7] relative"
    >
      <img
        src="/assets/pricing-15-ball-object.png"
        alt="snooker ball 15"
        data-aos="fade-right"
        className="absolute left-0 top-0 lg:w-[11.7vw] w-[13.3vw]"
      />
      <img
        src="/assets/pricing-1-ball-object.png"
        alt="snooker ball 15"
        data-aos="fade-left"
        className="absolute md:right-[33px] right-[24.8px] top-0 lg:w-[9vw] w-[13.3vw]"
      />
      <img
        src="/assets/pricing-stick-object.png"
        alt="snooker ball 15"
        data-aos="fade-up"
        className="absolute right-0 top-0 w-[13.3vw]"
      />
      <div className="max-w-[1300px] mx-auto w-full">
        <div data-aos="fade-up" className="text-center px-4 sm:px-6 lg:px-0">
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

        <div className="mt-8 w-full flex items-center justify-center">
          <div className="inline-flex p-1 bg-gray-100 rounded-full ">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`${
                activeTab === "monthly"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              } px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-200`}
              aria-pressed={activeTab === "monthly"}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`${
                activeTab === "yearly"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              } px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-200`}
              aria-pressed={activeTab === "yearly"}
            >
              Yearly billing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[14px] md:gap-[24px] overflow-auto px-4 sm:px-6 lg:px-0 pt-[26.62px] md:pt-[40px] pb-[47px] md:pb-[66px]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-0.5 cursor-pointer overflow-hidden lg:!w-fit ${
                selectedPlan === plan.id ? "card-border" : " rounded-[20px]"
              }`}
            >
              <div
                className="relative z-10 w-full lg:w-auto xl:min-w-[300px] min-w-full lg:min-w-[280px] bg-white rounded-[16px] md:rounded-[20px] px-[17px] md:px-[24px] md:pb-[30px] pb-[29px] pt-[16px] md:pt-[19px] transition-all duration-300 group"
                style={{
                  boxShadow: "3.85px 5.78px 38.5px 0px #0000000D",
                }}
              >
                {plan.isPopular && (
                  <div className="w-fit text-sm bg-greenish absolute text-white py-1 px-2 rounded-se-[20px] top-0 right-0 z-40">
                    <h2>Popular</h2>
                  </div>
                )}
                <h3 className="text-[22px] font-[500] text-center text-blackish mb-[11px]">
                  {plan.name}
                </h3>
                <div className="flex items-center md:gap-[10px] gap-[7px] relative">
                  <div className="flex items-start">
                    <span className="text-[15.82px] text-[#2E2E2EE5] font-[500] mt-2">
                      $
                    </span>
                    <span className="text-[35px] lg:text-[42px] text-blackish font-bold md:leading-[42.2px]">
                      {activeTab === "yearly"
                        ? plan.yearlyPrice
                        : plan.monthlyPrice}
                    </span>
                  </div>
                  <div>
                    <p className="text-blackish text-[14px] font-[500]">
                      Per {activeTab === "yearly" ? "year" : "month"}
                    </p>
                    <p className="text-grayish text-[11px] font-[400]">
                      10% off for {activeTab === "yearly" ? "yearly" : "monthly"}{" "}
                      subscription
                    </p>
                  </div>
                </div>
                <p className="py-6 md:py-8 text-left text-blackish text-[16px] font-medium">
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
                  className={`w-full text-base py-[8px] md:py-[12px] px-6 rounded-[10.22px] md:rounded-[16px] border border-greenish text-[12px] md:text-[16px] font-[600] transition-all duration-300 group-hover:bg-greenish group-hover:text-white ${
                    selectedPlan === plan.id
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
