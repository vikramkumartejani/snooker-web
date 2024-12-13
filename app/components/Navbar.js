import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo.png" alt="logo" width={172} height={52} />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#4DC488]">
              Home
            </Link>
            <Link
              href="/why-choose-us"
              className="text-gray-700 hover:text-[#4DC488]"
            >
              Why Choose Us
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-[#4DC488]"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-[#4DC488]"
            >
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="md:flex hidden items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-[#4DC488]">
              <FaShoppingCart className="h-5 w-5" />
              <span className="ml-2">Cart</span>
            </button>
            <button className="flex items-center text-[#4DC488] hover:text-[#3da36e]">
              <FaWhatsapp className="h-5 w-5" />
              <span className="ml-2">Contact Us</span>
            </button>
            <button className="bg-[#4DC488] text-white px-4 py-2 rounded-md hover:bg-[#3da36e]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
