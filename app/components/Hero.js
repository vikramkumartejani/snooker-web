import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-br from-white to-[#f0fdf4]">
      {/* Decorative background curves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-[600px] w-[600px] transform translate-x-1/3 -translate-y-1/4 text-[#4DC488]/10"
          fill="none"
          viewBox="0 0 400 400"
        >
          <path
            d="M 100 100 C 150 50, 250 50, 300 100 S 400 200, 300 300"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="relative z-[3] pb-[70px]">
            <span className="inline-block px-4 py-1 bg-[#4DC488]/10 text-[#4DC488] rounded-full text-sm font-medium mb-6">
              SNOOKER CLUBS
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Lorem ipsum lorem dolor sit amet.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis viverra ante, quis condimentum ipsum. Phasellus bLorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                <FaGooglePlay className="h-6 w-6" />
                <span>Play Store</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                <FaApple className="h-6 w-6" />
                <span>App Store</span>
              </button>
            </div>
          </div>
          <div className="md:absolute md:block  right-0 bottom-4 z-[2]">
            <img
              src="/assets/hero-img.png"
              alt="Snooker Table Illustration"
              className="object-contain h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
