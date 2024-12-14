"use client";

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
    icon: FiSettings,
    title: "Light Control System",
    description: "Ensures fraud-free games with top-notch security.",
  },
  {
    icon: FiFileText,
    title: "Billing Management",
    description: "Streamlines and automates your billing processes.",
  },
  {
    icon: FiTriangle,
    title: "Game Management",
    description: "Simplifies managing and organising your games.",
  },
  {
    icon: FiPieChart,
    title: "Business Analytics",
    description: "Provides insights to help grow your business.",
  },
  {
    icon: FiUsers,
    title: "Customer Management",
    description: "Keeps track of customer interactions and details.",
  },
  {
    icon: FiCreditCard,
    title: "Credit Management",
    description: "Handles credit efficiently and securely.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-500 font-medium mb-4">FEATURES</p>
          <h2 className="text-4xl font-bold mb-4">
            Gain more insight into how people use your
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
