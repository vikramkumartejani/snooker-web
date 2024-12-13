import { BsCheckCircleFill } from "react-icons/bs";
import Image from "next/image";

export default function Features() {
  const features = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#4DC488] rounded-[24px] overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            {/* Content */}
            <div className="text-white z-10 ps-[20px] md:ps-[40px] lg:ps-[80px] py-[70px]">
              <h2 className="text-[32px] md:text-[48px] font-bold leading-tight mb-6">
                Lorem Ipsum Lorem
                <br />
                Ipsum Lorem
              </h2>
              <p className="text-[16px] md:text-[18px] mb-8 opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-[16px]">
                    <Image
                      src="/assets/checkmark.png"
                      alt="checkmark"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] min-w-[24px] min-h-[24px]"
                    />
                    <span className="opacity-90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phones */}
            <div className="relative flex items-end justify-center h-[400px] md:h-[500px]">
              <img
                src="/assets/phones.png"
                alt="iPhone mockup"
                className="w-auto h-auto pt-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
