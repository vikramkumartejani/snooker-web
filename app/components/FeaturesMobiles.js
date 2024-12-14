import Image from "next/image";

export default function FeaturesMobiles() {
  const features = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 relative">
      <Image
        src="/assets/feature-mobile-cube.png"
        alt="cube"
        width={91.45}
        height={91.31}
        className="md:w-[91.45px] w-[10vw] absolute right-4 md:top-0 top-[7vw] z-[2]"
      />
      <div className="max-w-[1280px] mx-auto relative z-[1]">
        <div className="bg-[#4DC488] rounded-[24px] overflow-hidden relative">
          <div className="grid md:grid-cols-2 xl:gap-[55px] md:gap-4 items-end">
            {/* Content */}
            <div className="text-white z-10 ps-[14px] sm:ps-[20px] md:ps-[40px] lg:ps-[80px] md:pe-0 pe-[14px] sm:pe-[20px] md:py-[70px] py-[45px]">
              <h2 className="text-[24px] md:text-[32px] xl:text-[40px] font-[600] md:text-left text-center md:leading-[40px] xl:leading-[48.41px] mb-[24px]">
                Lorem Ipsum Lorem Ipsum Lorem
              </h2>
              <p className="text-[12px] sm:text-[16px] lg:text-[18px] md:text-white text-[#FFFFFFB2] mb-[16px] md:text-left text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <div className="space-y-[12px]">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-[16px]">
                    <Image
                      src="/assets/checkmark.png"
                      alt="checkmark"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] min-w-[24px] min-h-[24px]"
                    />
                    <span className="md:text-white text-[12px] sm:text-[16px] lg:text-[18px] text-[#FFFFFFB2]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phones */}
            <div className="relative flex items-end justify-center sm:h-[400px] md:h-[500px] md:ps-0 ps-8">
              <img
                src="/assets/phones.png"
                alt="iPhone mockup"
                className="w-auto h-auto md:pt-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
