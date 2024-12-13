"use client";

import { BsArrowRightShort } from "react-icons/bs";

const pricingData = [
  {
    title: "Basic Plan",
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
    title: "Basic Plan",
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
    title: "Basic Plan",
    price: "20",
    features: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    featured: true,
  },
  {
    title: "Basic Plan",
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

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-500 font-medium mb-4">PRICING</p>
          <h2 className="text-4xl font-bold mb-4">Awesome Pricing Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna incididunt ut
            labore et
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.featured ? "bg-white shadow-xl" : "bg-white/60"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <div className="flex items-start mb-4">
                <span className="text-sm mt-1">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-8">
                Per month
                <br />
                10% off for yearly subscription
              </p>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <BsArrowRightShort className="text-green-500 text-xl flex-shrink-0" />
                    <span className="ml-2">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-full border transition-colors
                  ${
                    plan.featured
                      ? "bg-green-500 text-white border-green-500 hover:bg-green-600"
                      : "border-green-500 text-green-500 hover:bg-green-50"
                  }`}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
