import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      number: "1",
      title: "Eliminate Manual Record-Keeping and Billing Errors",
      description:
        "Automate transactions and billing processes to avoid manual registers and minimize calculation mistakes, ensuring accuracy and efficiency.",
    },
    {
      number: "2",
      title: "Streamline Facility Management and Enhance Customer Experience",
      description:
        "Manage bookings, inventory, and staff effortlessly, while providing a more seamless and enjoyable experience for customers.",
    },
    {
      number: "3",
      title: "Save Time and Reduce Electricity Costs",
      description:
        "Automate billing and integrate with energy management systems to optimize resource use, leading to reduced operational time and lower electricity bills.",
    },
    {
      number: "4",
      title: "Improve Security with Automated Lighting Control",
      description:
        "Use automated lighting systems to enhance security by controlling lighting based on usage and preventing unauthorized access.",
    },
    {
      number: "5",
      title: "Boost Sales and Revenue",
      description:
        "Improve operational efficiency and customer satisfaction, leading to increased bookings and higher revenue.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-[#4DC488] text-sm font-medium">WHY US?</span>
        <div className="mt-4 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600 text-lg">
              With our integrated CRM, project management, collaboration and
              invoicing capabilities, you can manage your business in one secure
              platform.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[300px]">
            <Image
              src="/snooker-facility.png"
              alt="3D Snooker Facility Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.number} className="flex flex-col">
            <div className="flex-shrink-0 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4DC488] text-white text-xl font-semibold">
                {feature.number}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
