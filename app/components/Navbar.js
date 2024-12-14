"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#why-choose-us", "#features", "#pricing"];
      let active = "#home"; 

      for (const id of sections) {
        const section = document.querySelector(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            active = id;
            break;
          }
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white dark:bg-black z-50 dark:border-b border-white/20"
      style={{
        boxShadow: "0px 12px 25px -6px #0000000F",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center lg:h-[70px] h-[60px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={172}
                height={52}
                className="xl:w-[172px] lg:w-[168px] w-[120px] lg:h-[52px] md:h-[45px] h-[35px] object-contain"
              />
            </Link>

            <button
              className="lg:hidden text-gray-700 text-2xl"
              onClick={toggleDrawer}
            >
              <Image
                src="/assets/menu-icon.png"
                alt="menu-icon"
                width={24}
                height={24}
                className="md:w-[24px] w-[22px]"
              />
            </button>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center xl:gap-[48px] gap-[35px]">
              <a
                href="/#home"
                className={`relative font-poppins font-[500] ${
                  activeSection === "#home"
                    ? "text-greenish"
                    : "text-[#2E2E2EB2] dark:text-white dark:hover:text-greenish"
                } hover:text-greenish`}
              >
                Home
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                    activeSection === "#home" ? "" : "hidden"
                  }`}
                ></div>
              </a>
              <a
                href="/#why-choose-us"
                className={`relative font-poppins font-[500] ${
                  activeSection === "#why-choose-us"
                    ? "text-greenish"
                    : "text-[#2E2E2EB2] dark:text-white dark:hover:text-greenish"
                } hover:text-greenish`}
              >
                Why Choose Us
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                    activeSection === "#why-choose-us" ? "" : "hidden"
                  }`}
                ></div>
              </a>
              <a
                href="/#features"
                className={`relative font-poppins font-[500] ${
                  activeSection === "#features"
                    ? "text-greenish"
                    : "text-[#2E2E2EB2] dark:text-white dark:hover:text-greenish"
                } hover:text-greenish`}
              >
                Features
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                    activeSection === "#features" ? "" : "hidden"
                  }`}
                ></div>
              </a>
              <a
                href="/#pricing"
                className={`relative font-poppins font-[500] ${
                  activeSection === "#pricing"
                    ? "text-greenish"
                    : "text-[#2E2E2EB2] dark:text-white dark:hover:text-greenish"
                } hover:text-greenish`}
              >
                Pricing
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                    activeSection === "#pricing" ? "" : "hidden"
                  }`}
                ></div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="lg:flex hidden items-center gap-[12px]">
              <Link
                href="/checkout"
                className="flex items-center text-[#2E2E2EB2] dark:text-white font-poppins font-[500] hover:bg-grayish/10 transition border border-[#2E2E2EB2] dark:border-white rounded-[12px] py-[8px] px-[16px]"
              >
                <IoCartOutline className="h-[24px] w-[24px]" />
                <span className="ml-[6px]">Cart</span>
              </Link>
              <button className="flex items-center text-greenish font-poppins font-[500] hover:bg-greenish/20 border border-greenish rounded-[12px] py-[8px] px-[16px] transition">
                <IoLogoWhatsapp className="h-[24px] w-[24px]" />
                <span className="ml-[6px]">Contact Us</span>
              </button>
              <button className="bg-greenish text-white px-[22px] py-[10px] rounded-[12px] font-[500] font-poppins text-[14px] hover:bg-[#3da36e] transition">
                Sign In
              </button>
              <ThemeToggle/>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for small screens */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      >
        <div
          className={`fixed top-0 right-0 bg-white w-64 h-full shadow-lg z-50 transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Image src="/assets/logo.png" alt="logo" width={130} height={40} />
            <button className="text-gray-700 text-2xl" onClick={closeDrawer}>
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col items-center p-4 space-y-4">
            <a
              href="/#home"
              className={`relative font-poppins font-[500] ${
                activeSection === "#home" ? "text-greenish" : "text-[#2E2E2EB2]"
              } hover:text-greenish`}
              onClick={closeDrawer}
            >
              Home
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                  activeSection === "#home" ? "" : "hidden"
                }`}
              ></div>
            </a>
            <a
              href="/#why-choose-us"
              className={`relative font-poppins font-[500] ${
                activeSection === "#why-choose-us"
                  ? "text-greenish"
                  : "text-[#2E2E2EB2]"
              } hover:text-greenish`}
              onClick={closeDrawer}
            >
              Why Choose Us
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                  activeSection === "#why-choose-us" ? "" : "hidden"
                }`}
              ></div>
            </a>
            <a
              href="/#features"
              className={`relative font-poppins font-[500] ${
                activeSection === "#features"
                  ? "text-greenish"
                  : "text-[#2E2E2EB2]"
              } hover:text-greenish`}
              onClick={closeDrawer}
            >
              Features
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                  activeSection === "#features" ? "" : "hidden"
                }`}
              ></div>
            </a>
            <a
              href="/#pricing"
              className={`relative font-poppins font-[500] ${
                activeSection === "#pricing"
                  ? "text-greenish"
                  : "text-[#2E2E2EB2]"
              } hover:text-greenish`}
              onClick={closeDrawer}
            >
              Pricing
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[20px] h-[4px] bg-greenish rounded-[20px] ${
                  activeSection === "#pricing" ? "" : "hidden"
                }`}
              ></div>
            </a>
            <Link
              href="/checkout"
              className="text-center w-full text-[#2E2E2EB2] font-poppins font-[500] hover:bg-grayish/10 py-2 px-4 border border-[#2E2E2EB2] rounded-md"
              onClick={closeDrawer}
            >
              Cart
            </Link>
            <button
              className="text-center w-full text-greenish font-poppins font-[500] hover:bg-greenish/20 py-2 px-4 border border-greenish rounded-md"
              onClick={closeDrawer}
            >
              Contact Us
            </button>
            <button
              className="text-center w-full bg-greenish text-white py-2 px-4 rounded-md font-[500] font-poppings hover:bg-[#3da36e]"
              onClick={closeDrawer}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
