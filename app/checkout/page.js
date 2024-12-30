"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Checkout() {
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [formData, setFormData] = useState({
    storeName: "",
    mobileNumber: "",
    email: "",
    customerName: "",
    address: "",
    country: "",
    pinCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  const handleFocus = () => {
    setIsSelectFocused(true);
  };

  const handleBlur = () => {
    if (!formData.country) {
      setIsSelectFocused(false);
    }
  };


  const devices = [
    {
      id: 1,
      name: "Device Name",
      image: "/assets/store-img-1.png",
      controller: "8 port Controller",
    },
    {
      id: 2,
      name: "Device Name",
      image: "/assets/store-img-2.png",
      controller: "8 port Controller",
    },
  ];

  return (
    <main className="overflow-hidden min-h-screen bg-white dark:bg-black pt-[50px] px-4 sm:px-6 lg:px-8 pb-[60px] md:pb-[110px]">
      <section className="max-w-[1200px] mx-auto">
        <h1 data-aos="fade-right" className="lg:pt-[30px] pb-[14px] text-[24px] lg:text-[30px] text-blackish dark:text-white font-[700]">
          Checkout
        </h1>
        <div className="w-full flex items-start lg:flex-row flex-col xl:gap-[50px] md:gap-4 gap-[50px]">
          {/* Left Column */}
          <div className="w-full flex-grow flex-shrink space-y-[10px] overflow-x-auto">
            {/* Automation Section */}
            <div data-aos="fade-up">
              <h2 className="text-[18px] md:text-[24px] dark:text-white/90 font-[500] md:font-[600] mb-[12px] md:mb-[10px]">
                Automation
              </h2>
              <div className="flex gap-[16px] md:gap-[24px] overflow-x-auto pb-4">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className="bg-white border shadow-lg rounded-[12px] gap-3 flex overflow-hidden items-center min-w-[240px]"
                  >
                    <div className="relative w-full flex-1 h-full">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="object-cover min-h-full w-full"
                      />
                    </div>
                    <div className="w-full flex-1  text-left">
                      <h3 className="text-[14px] md:text-[16px] font-[400] md:font-[600] text-blackish">
                        {device.name}
                      </h3>
                      <p className="text-[#999999] text-[10px] md:text-[16px] mt-[4px]">
                        {device.controller}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Information */}
            <div>
              <h2 data-aos="fade-right" className="md:block hidden text-[18px] md:text-[24px] dark:text-white  font-[500] md:font-[600] mb-[12px] md:mb-[10px]">
                Store Information
              </h2>
              <form data-aos="fade-right" className="overflow-hidden md:space-y-[10px] space-y-[8px]">
                <div className="input-wrapper">
                  <input type='text' id='input' required className="w-full relative z-30 bg-transparent"></input>
                  <label htmlFor='input' className='placeholder'>
                    Store Name
                  </label>
                </div>

                <div className="grid md:grid-cols-2 xl:gap-[35px] md:gap-[24px] gap-[10px]">
                  <div className="input-wrapper w-full">
                    <input type='number' id='input' required className="w-full relative z-30 bg-transparent"></input>
                    <label htmlFor='input' className='placeholder'>
                      Mobile Number
                    </label>
                  </div>

                  <div className="input-wrapper w-full">
                    <input type='email' id='input' required className="w-full relative z-30 bg-transparent"></input>
                    <label htmlFor='input' className='placeholder'>
                      Email
                    </label>
                  </div>
                </div>

                <div className="input-wrapper w-full">
                  <input type='text' id='input' required className="w-full relative z-30 bg-transparent"></input>
                  <label htmlFor='input' className='placeholder'>
                    Customer Name
                  </label>
                </div>

                <div className="input-wrapper w-full">
                  <input type='text' id='input' required className="w-full relative z-30 bg-transparent"></input>
                  <label htmlFor='input' className='placeholder'>
                    Address
                  </label>
                </div>


                <div className="grid md:grid-cols-2 xl:gap-[30px] md:gap-[24px] gap-[10px]">
                  <div className="select-wrapper w-full">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="w-full appearance-none bg-white relative z-40 -mt-2.5 outline-none dark:bg-white dark:text-black rounded-[16px] border border-[#9A9EA6] dark:border-white font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[14px] py-[14px] pr-[40px]"
                    >
                      <option value="" className="dark:text-black">
                        Country
                      </option>
                      <option value="US" className="dark:text-black">
                        United States
                      </option>
                      <option value="UK" className="dark:text-black">
                        United Kingdom
                      </option>
                      <option value="CA" className="dark:text-black">
                        Canada
                      </option>
                    </select>
                    <label
                      htmlFor="country"
                      className={`placeholder ${isSelectFocused ? "focused" : ""}`}
                    >
                      Country
                    </label>
                    <span className="icon">
                      <IoMdArrowDropdown className="text-grayish" />
                    </span>
                  </div>

                  <div className="input-wrapper w-full">
                    <input type='number' id='input' required className="w-full relative z-30 bg-transparent"></input>
                    <label htmlFor='input' className='placeholder'>
                      Pin Code
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Overview */}
          <div data-aos="fade-left" className="lg:max-w-[467px] lg:min-w-[380px] md:border border-[#EEEEEE] rounded-[20px] md:shadow-lg md:px-[20px] md:py-[20px]">
            <h2 className="text-[28px] font-[400] mb-[20px] dark:text-white">Order Overview</h2>

            <div className="mb-[35px] flex items-center gap-[15px] relative">
              <div className="flex items-start">
                <span className="text-[22px] leading-[32.95px] text-[#2E2E2EE5] dark:text-white font-[500] mt-1">
                  $
                </span>
                <span className="text-[56px] leading-[56.49px] text-blackish dark:text-white font-bold">
                  20
                </span>
              </div>
              <div className="">
                <p className="text-blackish text-[18px] font-[500] dark:text-white">
                  Per month
                </p>
                <p className="text-grayish text-[16px] font-[400] dark:text-white/80">
                  10% off for yearly subscription
                </p>
              </div>
              <img
                src="/assets/pricing-curve.svg"
                alt="curve"
                className="absolute bottom-[-15px] w-[83px] left-0"
              />
            </div>

            <button className="w-full py-[10px] px-6 rounded-[16px] border border-greenish text-greenish hover:bg-green-50 text-[16px] md:text-[18px] md:leading-[24.2px] mb-[20px] transition">
              Change Basic Plan
            </button>

            <div className="space-y-[16px] md:space-y-[16px]">
              <div className="space-y-[16px] pb-[16px] md:pb-[14px] border-b border-[#E2E2E2]">
                <h3 className="text-[18px] md:text-[22px] font-[500] md:font-[600] text-blackish dark:text-white">
                  Payment Details
                </h3>
                <div className="space-y-[12px] md:space-y-[15px]">
                  <div className="flex justify-between gap-1 text-[14px] md:text-[16px]">
                    <span className="text-[#999999] font-[500] dark:text-white">
                      Subscription
                    </span>
                    <span className="font-[600] text-blackish dark:text-white/80">$ 3000</span>
                  </div>
                  <div className="flex justify-between gap-1 text-[16px]">
                    <span className="text-[#999999] font-[500] dark:text-white">VAT</span>
                    <span className="font-[600] text-blackish dark:text-white/80">$ 20</span>
                  </div>
                  <div className="flex justify-between gap-1 text-[16px]">
                    <span className="text-[#999999] font-[500] dark:text-white">
                      Total Devices
                    </span>
                    <span className="font-[600] text-blackish dark:text-white/80">2 Devices</span>
                  </div>
                  <div className="flex justify-between gap-1 text-[16px]">
                    <span className="text-[#999999] font-[500] dark:text-white">
                      Devices Name
                    </span>
                    <span className="font-[600] text-blackish dark:text-white/80">
                      Device Name | Device Name
                    </span>
                  </div>
                  <div className="flex justify-between gap-1 text-[16px] bg-white relative">
                    <input type="text" placeholder="Referral Code" className="w-full shadow-inner text-[#999999] font-[500] p-3 dark:text-white bg-transparent border-0 outline-none h-full" />
                    <button className="font-[600] text-blackish dark:text-white/80 absolute top-2.5 right-4 z-30 bg-white">Apply</button>
                  </div>
                </div>
              </div> 

              <div className="">
                <div className="flex justify-between items-center gap-1 mb-[20px] md:text-[20px] text-[18px]">
                  <span className="text-[#999999] font-[500] dark:text-white">Total</span>
                  <span className="font-[600] text-greenish">$3120</span>
                </div>

                <button className="w-full bg-greenish text-white py-[14px] rounded-[16px] text-[16px] md:text-[20px] leading-[19.36px] md:leading-[24.2px] font-[600] hover:bg-green-600 transition-colors">
                  Proceed with Payment
                </button>

                <p className="text-[#999999] dark:text-white/90 text-[12px] md:text-[14px] font-[500] mt-[20px]">
                  By continuing, you accept to our Terms of Services and privacy
                  policy. Please note that payments are non refundable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
