import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = () => {
  // Please use 'useState()' to implement Navbar functionality
  return (
    <div className="bg-white pt-4 pr-8 pb-4 pl-8">
      <nav className="w-full">
        <div className="flex w-full justify-between max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
          <div className="flex flex-row bg-white justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex">
            <a
              href="#"
              fontfamily="Raleway"
              className="text-gray-600 text-center mr-6 font-medium text-base"
            >
              Services
            </a>
            <a
              href="#"
              fontfamily="Raleway"
              className="text-gray-600 text-center mr-6 font-medium text-base"
            >
              About Us
            </a>
            <a
              href="#"
              fontfamily="Raleway"
              className="text-gray-600 text-center font-medium text-base"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-row justify-center items-center order-first md:order-none">
            <Image
              src="https://pub-d6209fb2057b4e7cbf34355d9f0ee06b.r2.dev/LeadRnnR%20Logo.png"
              className="w-12 md:w-16"
              height={48}
              width={48}
            />
          </div>
          <div className="flex flex-row bg-white justify-center items-center md:m-0 hidden md:flex">
            <Link
              href="#"
              fontfamily="Raleway"
              className="text-gray-600 text-center mr-6 font-medium text-base"
            >
              <button
                className="transition duration-200 hover:bg-blue-900 focus:shadow-outline focus:outline-none bg-blue-700
          text-white inline-flex font-semibold tracking-wide h-12 rounded-md shadow-md items-center justify-center
          pr-6 pl-6 mr-6"
              >
                Get Started
              </button>
            </Link>
            <Link
              href="#"
              fontfamily="Raleway"
              className="text-gray-600 text-center mr-6 font-medium text-lg"
            >
              Sign In
            </Link>
            <Link
              href="#"
              fontfamily="Raleway"
              className="text-gray-600 text-center font-medium text-lg"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden flex ml-auto items-center">
            <div className="outline-none mobile-menu-button">
              <svg
                id="Windframe_WY4-RbRa7b"
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 hover:text-green-500"
              >
                <path id="Windframe_2G0jOEm-Efl" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden mobile-menu">
          <div>
            <div className="flex flex-col">
              <Link
                href="#"
                fontfamily="Raleway"
                className="text-gray-600 text-center mt-2 font-medium text-base"
              >
                Product
              </Link>
              <Link
                href="#"
                fontfamily="Raleway"
                className="text-gray-600 text-center mt-2 font-medium text-base"
              >
                Features
              </Link>
              <Link
                href="#"
                fontfamily="Raleway"
                className="text-gray-600 text-center mt-2 font-medium text-base"
              >
                Pricing
              </Link>
              <Link
                href="#"
                fontfamily="Raleway"
                className="text-gray-600 text-center mt-2 font-medium text-base"
              >
                About Us
              </Link>
              <Link
                href="#"
                fontfamily="Raleway"
                className="text-gray-600 text-center mt-2 font-medium text-lg"
              >
                Sign In
              </Link>
              <Link
                href="#"
                fontfamily="Raleway"
                className="text-gray-600 text-center mt-2 font-medium text-lg"
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