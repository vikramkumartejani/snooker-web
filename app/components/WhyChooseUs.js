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
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-[16px] lg:gap-[63px] items-center lg:mb-[16px] mb-[32px]">
          <div className="md:w-1/2 flex flex-col md:items-start md:justify-start items-center justify-center md:text-left text-center">
            <span
              className="inline-block px-[8px] py-[2px] bg-[#DCFCE7] text-greenish rounded-full text-[10px] md:text-[12px] font-[500] font-poppins uppercase mb-[6px] md:mb-[11px]"
              style={{ boxShadow: "0px 1px 2px 0px #6951FF0D" }}
            >
              WHY US?
            </span>
            <h2 className="text-[20px] md:text-[40px] lg:text-[48px] font-bold text-blackish md:leading-[60px] md:mb-[26px] mb-[10px]">
              Why Choose Us?
            </h2>
            <p className="text-grayish text-[14px] md:text-[18px] lg:text-[20px] font-[500] mb-[17px] md:mb-[30px] lg:mb-[49px]">
              With our integrated CRM, project management, collaboration and
              invoicing capabilities, you can manage your business in one secure
              platform.
            </p>
          </div>
          <div className="md:w-1/2 w-full relative md:h-[400px] h-[300px]">
            <Image
              src="/assets/why-choose-us.png"
              alt="3D Snooker Facility Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[24px]">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="flex flex-col md:items-start md:justify-start items-center justify-center md:text-left text-center"
            >
              <div className="flex-shrink-0 mb-[16px]">
                <span className="flex items-center justify-center md:w-[48px] w-[38px] md:h-[48px] h-[38px] rounded-full bg-greenish text-white text-[15.83px] md:text-[20px] md:leading-[30px] font-poppins font-[600]">
                  {feature.number}
                </span>
              </div>
              <div>
                <h3 className="md:text-[20px] md:leading-[30px] font-[600] md:font-bold text-blackish mb-[12px]">
                  {feature.title}
                </h3>
                <p className="text-grayish text-[14px] md:text-[16px] font-[400]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
