import Image from "next/image";
import { FaApple } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-16 bg--white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-[50px] pb-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="relative z-[3] pb-[60px] pt-[20px] flex flex-col lg:items-start items-center justify-center lg:justify-start lg:text-left text-center">
            <span
              className="inline-block px-[8px] py-[2px] bg-[#63D398] text-white rounded-full text-[10px] md:text-[12px] font-[500] font-poppins uppercase mb-[6px] md:mb-[11px]"
              style={{ boxShadow: "0px 1px 2px 0px #6951FF0D" }}
            >
              SNOOKER CLUBS
            </span>
            <h1 className="text-[24px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[62px] leading-[45px] lg:leading-[60px] xl:leading-[72px] md:leading-[58px] font-bold text-[#2E2E2E] mb-[15.64px] md:mb-[18px] tracking-[-2%]">
              Lorem ipsum lorem dolor sit amet.
            </h1>
            <p className="text-[#637381] text-[14px] md:text-[18px] lg:text-[20px] font-[500] mb-[17px] md:mb-[30px] lg:mb-[49px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis viverra ante, quis condimentum ipsum. Phasellus bLorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-wrap md:items-start md:justify-start items-center justify-center gap-[18px] md:gap-[24px]">
              <button className="flex items-center space-x-[10px] md:space-x-[14px] lg:space-x-[20px] bg-[#63D398] md:text-[18px] font-[600] text-white px-[22px] md:px-[30px] py-[11px] md:py-[18px] rounded-[16px] transition hover:bg-[#59d493]">
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
              <button className="flex items-center space-x-[8px] md:space-x-[10px] lg:space-x-[20px] border border-[#63D398] bg-white md:text-[18px] font-[600] text-[#63D398] px-[22px] md:px-[30px] py-[11px] md:py-[18px] rounded-[16px] transition hover:bg-[#59d493]/10">
                <FaApple className="h-[27px] w-[27px]" />
                <span>App Store</span>
              </button>
            </div>
          </div>
          <div className="lg:absolute flex items-center justify-center  right-0 bottom-0 z-[2]">
            <img
              src="/assets/hero-img.png"
              alt="Snooker Table Illustration"
              className="lg:flex hidden object-contain lg:h-[600px] sm:h-[500px]"
            />
            <img
              src="/assets/hero-img2.svg"
              alt="Snooker Table Illustration"
              className="lg:hidden flex object-contain lg:h-[600px] sm:h-[500px]"
            />
          </div>
        </div>
        <img
          src="/assets/hero-object.png"
          alt="Snooker Table Illustration"
          className="object-contain absolute left-0 xl:left-[-80px] bottom-0 z-[-1]"
        />
      </div>
    </div>
  );
}
