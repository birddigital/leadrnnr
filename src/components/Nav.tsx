import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  // Please use 'useState()' to implement Navbar functionality
  return (
    <div className="bg-white pb-4 pl-8 pr-8 pt-4">
      <nav className="w-full">
        <div className="mb-auto ml-auto mr-auto mt-auto flex w-full max-w-screen-2xl justify-between md:flex-row">
          <div className="mb-2 mt-2 hidden flex-row items-center justify-between space-x-5 bg-white md:m-0 md:flex lg:flex">
            <Link href="/">
              <Image
                src="https://pub-d6209fb2057b4e7cbf34355d9f0ee06b.r2.dev/LeadRnnR%20Logo.png"
                className="h-20 md:w-auto"
                height={400}
                width={400}
                alt="Lead RnnR Logo"
              />
            </Link>

            <Link
              href="/services"
              className="mr-6 text-center text-base font-medium text-gray-600"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="mr-6 text-center text-base font-medium text-gray-600"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-center text-base font-medium text-gray-600"
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden flex-row items-center justify-center bg-white md:m-0 md:flex lg:flex">
            <Link
              href="/contact"
              className="mr-6 text-center text-base font-medium text-gray-600"
            >
              <button>Get Started</button>
            </Link>
            <Link
              href="#"
              className="mr-6 text-center text-lg font-medium text-gray-600"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="text-center text-lg font-medium text-gray-600"
            >
              Sign Up
            </Link>
          </div>
          <div className="ml-auto flex items-center md:hidden">
            <div className="mobile-menu-button outline-none">
              <svg
                id="Windframe_WY4-RbRa7b"
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 hover:text-green-500"
              >
                <path id="Windframe_2G0jOEm-Efl" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <div>
            <div className="flex flex-col">
              <Link
                href="#"
                className="mt-2 text-center text-base font-medium text-gray-600"
              >
                Product
              </Link>
              <Link
                href="#"
                className="mt-2 text-center text-base font-medium text-gray-600"
              >
                Features
              </Link>
              <Link
                href="#"
                className="mt-2 text-center text-base font-medium text-gray-600"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="mt-2 text-center text-base font-medium text-gray-600"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="mt-2 text-center text-lg font-medium text-gray-600"
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="mt-2 text-center text-lg font-medium text-gray-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
