"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Checkout() {
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
    <main className="min-h-screen bg-white dark:bg-black pt-[110px] px-4 sm:px-6 lg:px-8 pb-[60px] md:pb-[110px]">
      <section className="max-w-[1200px] mx-auto">
        <h1 className="lg:pt-[35px] pb-[32px] md:pb-[50px] lg:pb-[70px] text-[24px] md:text-[40px] lg:text-[50px] text-blackish dark:text-white font-[700]">
          Checkout
        </h1>
        <div className="flex lg:flex-row flex-col xl:gap-[50px] md:gap-4 gap-[50px]">
          {/* Left Column */}
          <div className="flex-grow flex-shrink space-y-[24px] overflow-x-auto">
            {/* Automation Section */}
            <div>
              <h2 className="text-[18px] md:text-[30px] dark:text-white/90 font-[500] md:font-[600] mb-[12px] md:mb-[24px]">
                Automation
              </h2>
              <div className="flex gap-[16px] md:gap-[24px] overflow-x-auto flex-grow flex-shrink md:pb-[24px] pb-[30px]">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className="bg-white rounded-[12px] overflow-hidden md:min-w-[290px] min-w-[240px] md:w-[290px] w-[240px]"
                    style={{ boxShadow: "2px 8px 24px 0px #0000000F" }}
                  >
                    <div className="relative h-[173px] w-full">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="p-[13.24px] md:p-[16px] text-center">
                      <h3 className="text-[14px] md:text-[16px] font-[400] md:font-[600] text-blackish">
                        {device.name}
                      </h3>
                      <p className="text-[#999999] text-[10px] md:text-[16px] mt-[8px]">
                        {device.controller}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Information */}
            <div>
              <h2 className="md:block hidden text-[18px] md:text-[30px] dark:text-white  font-[500] md:font-[600] mb-[12px] md:mb-[24px]">
                Store Information
              </h2>
              <form className="md:space-y-[20px] space-y-[16px]">
                <input
                  type="text"
                  name="storeName"
                  placeholder="Store Name"
                  value={formData.storeName}
                  onChange={handleInputChange}
                  className="w-full rounded-[16px] outline-none border dark:bg-transparent dark:border-white dark:text-white border-[#9A9EA6] font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px]"
                />

                <div className="grid md:grid-cols-2 xl:gap-[35px] md:gap-[24px] gap-[10px]">
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-[16px] outline-none dark:bg-transparent dark:border-white dark:text-white border border-[#9A9EA6] font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-[16px] outline-none dark:bg-transparent dark:border-white dark:text-white border border-[#9A9EA6] font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px]"
                  />
                </div>

                <input
                  type="text"
                  name="customerName"
                  placeholder="Customer Name"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full rounded-[16px] outline-none dark:bg-transparent dark:border-white dark:text-white border border-[#9A9EA6] font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px]"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-[16px] outline-none dark:bg-transparent dark:border-white dark:text-white border border-[#9A9EA6] font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px]"
                />

                <div className="grid md:grid-cols-2 xl:gap-[35px] md:gap-[24px] gap-[10px]">
                  <div className="relative w-full">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full appearance-none outline-none dark:bg-transparent dark:text-white rounded-[16px] border border-[#9A9EA6] dark:border-white font-[400] ${
                        formData.country === "" &&
                        "text-grayish md:text-[16px] text-[14px]"
                      } placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px] pr-[40px]`}
                    >
                      <option value="" className=" dark:text-black">Country</option>
                      <option value="US" className=" dark:text-black">United States</option>
                      <option value="UK" className=" dark:text-black">United Kingdom</option>
                      <option value="CA" className=" dark:text-black">Canada</option>
                    </select>
                    <span className="absolute inset-y-0 right-[20px] flex items-center pointer-events-none">
                      <IoMdArrowDropdown className="text-grayish" />
                    </span>
                  </div>

                  <input
                    type="text"
                    name="pinCode"
                    placeholder="Pin Code"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    className="w-full rounded-[16px] outline-none dark:bg-transparent dark:text-white border dark:border-white border-[#9A9EA6] font-[400] placeholder:text-[14px] md:placeholder:text-[16px] px-[20px] md:py-[20px] py-[16px]"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Overview */}
          <div className="lg:max-w-[467px] lg:min-w-[380px] md:border border-[#EEEEEE] rounded-[20px] md:shadow-lg md:px-[30px] md:py-[34px]">
            <h2 className="text-[28px] font-[400] mb-[30px] dark:text-white">Order Overview</h2>

            <div className="mb-[48px] flex items-center gap-[15px] relative">
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

            <button className="w-full py-[16px] px-6 rounded-[16px] border border-greenish text-greenish hover:bg-green-50 text-[16px] md:text-[20px] md:leading-[24.2px] mb-[32px] transition">
              Change Basic Plan
            </button>

            <div className="space-y-[16px] md:space-y-[32px]">
              <div className="space-y-[30px] pb-[16px] md:pb-[20px] border-b border-[#E2E2E2]">
                <h3 className="text-[18px] md:text-[22px] font-[500] md:font-[600] text-blackish dark:text-white">
                  Payment Details
                </h3>
                <div className="space-y-[12px] md:space-y-[18px]">
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
                  <div className="flex justify-between gap-1 text-[16px]">
                    <span className="text-[#999999] font-[500] dark:text-white">
                      Referral Code
                    </span>
                    <span className="font-[600] text-blackish dark:text-white/80">239d</span>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex justify-between items-center gap-1 mb-[25px] md:text-[20px] text-[18px]">
                  <span className="text-[#999999] font-[500] dark:text-white">Total</span>
                  <span className="font-[600] text-greenish">$3120</span>
                </div>

                <button className="w-full bg-greenish text-white py-[18px] rounded-[16px] text-[16px] md:text-[20px] leading-[19.36px] md:leading-[24.2px] font-[600] hover:bg-green-600 transition-colors">
                  Proceed with Payment
                </button>

                <p className="text-[#999999] dark:text-white/90 text-[12px] md:text-[14px] font-[500] mt-[24px]">
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
