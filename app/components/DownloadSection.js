import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";

const DownloadSection = () => {
  return (
    <section className="dark:bg-black dark:border-b border-white/20 relative lg:min-h-[734px] md:min-h-[600px] sm:min-h-[500px] min-h-[400px] flex flex-col items-center justify-center">
      <img
        src="/assets/top-left-objects.png"
        alt="background objects"
        className="absolute xl:w-auto w-[48vw] left-0 top-0 z-[1]"
      />
      <img
        src="/assets/bottom-left-objects.png"
        alt="background objects"
        className="absolute xl:w-auto w-[40vw] left-0 bottom-0 z-[1]"
      />
      <img
        src="/assets/bottom-right-objects.png"
        alt="background objects"
        className="absolute xl:w-auto w-[48vw] right-0 bottom-0 z-[1]"
      />
      <img
        src="/assets/top-right-objects.png"
        alt="background objects"
        className="absolute xl:w-auto w-[40vw] right-0 top-0 z-[1]"
      />
      <img
        src="/assets/top-right-curve-object.png"
        alt="background objects"
        className="absolute xl:w-auto w-[55vw] right-0 -top-1 z-[1]"
      />
      <div className="lg:px-8 sm:px-6 px-4 relative z-[2]">
        <div className="sm:max-w-[923px] max-w-[355px] mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-[22px] sm:text-[35px] md:text-[52px] md:leading-[62px] sm:leading-[50px] leading-[28px] font-[600] text-blackish dark:text-white mb-[15.64px] md:mb-[20px]">
            Download Now and Get Started Immediately!
          </h1>
          <p className="text-grayish dark:text-white/90 text-[12px] md:text-[18px] lg:text-[20px] font-[400] mb-[20.69px] md:mb-[32px] lg:mb-[65px] max-w-[634px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div className="flex flex-wrap md:items-start md:justify-start items-center justify-center gap-[12px] sm:gap-[18px] md:gap-[24px]">
            <button className="flex items-center space-x-[8px] sm:space-x-[10px] md:space-x-[14px] lg:space-x-[20px] bg-greenish md:text-[19.69px] text-[14px] font-[600] text-white px-[18px] sm:px-[22px] md:px-[30px] py-[11px] md:py-[18px] rounded-[16px] transition hover:bg-[#59d493]">
              <span>
                <Image
                  src="/assets/google-play.png"
                  alt="google play"
                  width={24}
                  height={24}
                />
              </span>
              <span>Play Store</span>
            </button>
            <button className="flex items-center space-x-[4px] dark:bg-black sm:space-x-[6px] md:space-x-[10px] lg:space-x-[20px] border border-blackish dark:border-white bg-white md:text-[18px] text-[14px] font-[600] text-blackish dark:text-white px-[18px] sm:px-[22px] md:px-[30px] py-[11px] md:py-[18px] rounded-[16px] transition hover:bg-[#59d493]/10">
              <FaApple className="h-[26px] w-[26px]" />
              <span>App Store</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
