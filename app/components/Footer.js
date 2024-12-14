import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4DC488] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
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
            <p className="mt-4 text-white/90 text-sm md:text-base">
              Reinventing the way of creating website, we aim to create the most
              master-peached these types of web abailavle on the market.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-2 text-white/90 text-sm md:text-base">
              <p>202 Helga Spring Rd, Crawford, TN 38554</p>
              <p>Call Us: 123456789</p>
              <p>my@company.com</p>
            </div>
          </div>

          {/* Email Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              SIGN UP FOR EMAIL UPDATES
            </h3>
            <form className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-[#4DC488] rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
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
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm">
              Copyright 2023 abc. All rights reserved.
            </p>
            <nav className="flex gap-8">
              <a href="/" className="text-sm hover:text-white/80">
                Home
              </a>
              <a href="/why-choose-us" className="text-sm hover:text-white/80">
                Why Choose Us
              </a>
              <a href="/features" className="text-sm hover:text-white/80">
                Features
              </a>
              <a href="/pricing" className="text-sm hover:text-white/80">
                Pricing
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
