import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4DC488] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-[110px] lg:gap-8 md:gap-[110px] gap-[32px] md:py-[67px] py-[32px]">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/footer-logo.svg"
                alt="logo"
                width={172}
                height={52}
                className="xl:w-[172px] lg:w-[168px] w-[140px] lg:h-[52px] md:h-[45px] h-[42.33px] object-contain"
              />
            </Link>
            <p className="mt-[10px] md:mt-[15px] text-white text-[12px] sm:text-[14px]">
              Reinventing the way of creating website, we aim to create the most
              master-peached these types of web abailavle on the market.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[14px] font-[500] mb-[19px]">CONTACT US</h3>
            <div className="space-y-[19px]">
              <p className="text-white text-[14px] font-[500] tracking-[1%]">
                202 Helga Spring Rd, Crawford, TN 38554
              </p>
              <p className="text-white text-[14px] font-[500] tracking-[1%]">
                Call Us: 123456789
              </p>
              <p className="text-white text-[14px] font-[500] tracking-[1%]">
                my@company.com
              </p>
            </div>
          </div>

          {/* Email Subscription */}
          <div>
            <h3 className="text-[14px] font-[500] md:mb-[19px] mb-[14px]">
              SIGN UP FOR EMAIL UPDATES
            </h3>
            <form className="w-full">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="w-full h-[42px] md:h-[48px] px-[23px] placeholder:text-[12px] md:placeholder:text-[14px] font-[500] rounded-[16px] bg-[#FFFFFF33] text-white focus:outline-none focus:ring-[0.5px] focus:ring-white placeholder:text-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 h-full xl:px-[35px] lg:px-[20px] md:px-[30px] px-[25px] bg-white text-greenish rounded-[16px] text-[14px] md:text-[16px] font-[600] hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-[14px] font-[500] tracking-[2%] md:mt-[22px] mt-[16px]">
              Sign up with your email address to receive news & updates
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-[1px] border-white md:py-[30px] py-[24px]">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-[21px]">
            <p className="text-white text-[12px] font-[500]">
              Copyright 2023 abc. All rights reserved.
            </p>
            <nav className="flex gap-[40px]">
              <a
                href="/#home"
                className="text-[12px] font-[500] hover:underline"
              >
                Home
              </a>
              <a
                href="/#why-choose-us"
                className="text-[12px] font-[500] hover:underline"
              >
                Why Choose Us
              </a>
              <a
                href="/#features"
                className="text-[12px] font-[500] hover:underline"
              >
                Features
              </a>
              <a
                href="/#pricing"
                className="text-[12px] font-[500] hover:underline"
              >
                Pricing
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
