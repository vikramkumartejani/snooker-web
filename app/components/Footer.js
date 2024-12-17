import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#4DC488] dark:bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-start justify-between xl:gap-[60px] lg:gap-8 md:gap-[40px] gap-[32px] md:py-[67px] py-[32px]">
          {/* Company Info */}
          <div data-aos="fade-right" className="sm:max-w-[320px]">
            <Link href="/" className="flex items-center" >
              <Image
                src="/assets/footer-logo.svg"
                alt="logo"
                width={172}
                height={52}
                className="xl:w-[172px] lg:w-[168px] w-[140px] lg:h-[52px] md:h-[45px] h-[42.33px] dark:hidden block object-contain"
              />
              <Image
                src="/assets/dark-logo.svg"
                alt="logo"
                width={172}
                height={52}
                className="xl:w-[172px] lg:w-[168px] w-[140px] lg:h-[52px] md:h-[45px] h-[42.33px] dark:block hidden object-contain"
              />
            </Link>
            <p className="mt-[10px] md:mt-[15px] text-white text-[12px] sm:text-[14px]">
              Reinventing the way of creating website, we aim to create the most
              master-peached these types of web abailavle on the market.
            </p>
          </div>

          <div data-aos="fade-up" className="flex gap-[19px] flex-col text-nowrap">
            <a
              href="/#home"
              className="text-[14px] font-[500] hover:underline"
            >
              Home
            </a>
            <a
              href="/#why-choose-us"
              className="text-[14px] font-[500] hover:underline"
            >
              Why Choose Us
            </a>
            <a
              href="/#features"
              className="text-[14px] font-[500] hover:underline"
            >
              Features
            </a>
            <a
              href="/#pricing"
              className="text-[14px] font-[500] hover:underline"
            >
              Pricing
            </a>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up">
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
          <div data-aos="fade-left" className="sm:max-w-[320px]">
            <h3 className="text-[14px] font-[500] md:mb-[19px] mb-[10px]">
              SIGN UP FOR EMAIL UPDATES
            </h3>
            <div className="flex items-center space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaYoutube size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={24} />
              </a>
            </div>
            <p className="text-[14px] font-[500] tracking-[2%] md:mt-[22px] mt-[16px]">
              Sign up with your email address to receive news & updates
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-[1px] border-white dark:border-greenish md:py-[30px] py-[24px]">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-[21px]">
            <p className="text-white text-[12px] font-[500]">
              Copyright 2023 abc. All rights reserved.
            </p>
            <p className="text-white text-[12px] font-medium">Designed by Auekeeper</p>
            <nav className="flex gap-5 md:gap-[40px] flex-wrap justify-center">
              <a
                href="/#home"
                className="text-[12px] font-[500] hover:underline"
              >
                Shipping policy
              </a>
              <a
                href="/#why-choose-us"
                className="text-[12px] font-[500] hover:underline"
              >
                Terms and conditions
              </a>
              <a
                href="/#features"
                className="text-[12px] font-[500] hover:underline"
              >
                Privacy policy
              </a>
              <a
                href="/#features"
                className="text-[12px] font-[500] hover:underline"
              >
                Cancellation/Refund Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
