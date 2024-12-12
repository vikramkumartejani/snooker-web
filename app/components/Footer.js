import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4DC488] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">arekeeper</span>
            </Link>
            <p className="mt-4 text-white/90">
              Reinventing the way of creating website, we aim to create the most
              master-peached these types of web abailavle on the market.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-3" />
                <span>202 Helga Spring Rd, Crawford, TN 38554</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3" />
                <span>Call Us: 123456789</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <span>my@company.com</span>
              </div>
            </div>
          </div>

          {/* Email Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              SIGN UP FOR EMAIL UPDATES
            </h3>
            <form className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-[#4DC488] rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white/90">
                Sign up with your email address to receive news & updates
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/90">
            Copyright 2023 abc. All rights reserved.
          </p>
          <nav className="flex gap-8">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <Link href="/why-choose-us" className="hover:text-white/80">
              Why Choose Us
            </Link>
            <Link href="/features" className="hover:text-white/80">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-white/80">
              Pricing
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
