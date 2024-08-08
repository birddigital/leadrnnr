import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  // Please use 'useState()' to implement Navbar functionality
  return (
    <footer className="bg-white py-20">
      <div className="mx-auto max-w-screen-2xl overflow-hidden px-6 py-2 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
          <Link href="/" className="flex flex-col items-end gap-1.5 text-black">
            <Image
              src="https://pub-d6209fb2057b4e7cbf34355d9f0ee06b.r2.dev/LeadRnnR%20Logo.png"
              className="h-40 w-auto"
              height={400}
              width={400}
              alt="Lead RnnR Logo"
            />
          </Link>
          <nav
            aria-label="Footer"
            className="place-item-center mt-8 grid grid-cols-2 gap-6 sm:flex sm:justify-center md:mt-0"
          >
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-center text-sm text-gray-500 hover:text-gray-600"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              Contact Us
            </Link>
          </nav>
          <div className="mt-8 flex justify-center space-x-4 md:mt-0">
            <Link
              href="https://facebook.com"
              className="h-8 w-8 cursor-pointer rounded bg-gray-200 p-2 text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-full w-full"
                fill="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_qvcAWjC6EW"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991
              3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
              2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991
              22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              className="h-8 w-8 cursor-pointer rounded bg-gray-200 p-2 text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-full w-full"
                fill="currentColor"
                viewBox="0 0 24 24"
                id="Windframe__spOOYciDQT"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049
              1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465
              2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902
              4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772
              1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643
              0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0
              01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://x.com"
              className="h-8 w-8 cursor-pointer rounded bg-gray-200 p-2 text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">X</span>
              <svg
                className="h-full w-full"
                fill="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_kF74bSAGWjT"
              >
                <path
                  d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486
              3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819
              10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709
              11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
                />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              className="h-8 w-8 cursor-pointer rounded bg-gray-200 p-2 text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-full w-full"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="Windframe_wEWDZCI9lAW"
              >
                <path
                  d="M0 2.813C0 2.23578 0.202708 1.75959 0.608108 1.38443C1.01351 1.00924
              1.54055 0.821655 2.18919 0.821655C2.82626 0.821655 3.34169 1.00635 3.73552 1.37577C4.14092 1.75672 4.34363
              2.2531 4.34363 2.86494C4.34363 3.41906 4.14672 3.88081 3.7529 4.25023C3.3475 4.63118 2.81467 4.82165
              2.15444 4.82165H2.13707C1.49999 4.82165 0.984562 4.63118 0.590734 4.25023C0.196905 3.86927 0 3.39019 0
              2.813ZM0.225869 17.9645V6.39741H4.08301V17.9645H0.225869ZM6.22008 17.9645H10.0772V11.5056C10.0772 11.1016
              10.1236 10.7899 10.2162 10.5706C10.3784 10.1781 10.6245 9.84617 10.9546 9.5749C11.2847 9.30361 11.6988
              9.16797 12.1969 9.16797C13.4942 9.16797 14.1429 10.0395 14.1429 11.7827V17.9645H18V11.3325C18 9.62395
              17.5946 8.32815 16.7838 7.44503C15.973 6.56191 14.9015 6.12035 13.5695 6.12035C12.0753 6.12035 10.9112
              6.76105 10.0772 8.04243V8.07706H10.0598L10.0772 8.04243V6.39741H6.22008C6.24324 6.76681 6.25483 7.91544
              6.25483 9.8433C6.25483 11.7711 6.24324 14.4782 6.22008 17.9645Z"
                  fill="#8D8BA7"
                />
              </svg>
            </Link>
          </div>
        </div>
        <p className="mt-8 border-t pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Lead RnnR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
