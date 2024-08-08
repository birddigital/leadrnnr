import React from "react";

export const Pricing = () => {
  return (
    <section className="relative isolate bg-white py-16 text-black">
      <div className="ml-auto mr-auto bg-white pb-16 pl-4 pr-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="mb-10 ml-auto mr-auto max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div>
            <p className="mb-4 inline-block rounded-full bg-pink-500 pb-3 pl-3 pr-3 pt-3 text-xs font-semibold uppercase tracking-wider text-pink-200">
              Our Pricing
            </p>
          </div>
          <div className="mb-6 ml-auto mr-auto max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <div className="relative">
              <span className="absolute left-0 top-0 z-0 -ml-20 -mt-8 flex hidden w-32 items-center justify-center text-blue-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="h-full w-full"
                >
                  <defs>
                    <pattern
                      id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>
              <p className="inline font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Affordable Pricing
              </p>
            </div>
            <p className="inline font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Focus on growing your business
            </p>
          </div>
          <p className="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="ml-auto mr-auto grid max-w-screen-md gap-10 sm:mx-auto md:grid-cols-2">
          <div className="flex flex-col justify-between rounded border bg-white pb-8 pl-8 pr-8 pt-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center">
            <div className="text-center">
              <p className="text-lg font-semibold">Start</p>
              <div className="mt-2 flex items-center justify-center">
                <p className="mr-1 text-5xl font-bold">Nothin&apos;s Free</p>
              </div>
              <div className="mt-2 space-y-2">
                <p className="text-gray-700">0 leads per day</p>
                <p className="text-gray-700">No representative</p>
                <p className="text-gray-700">0 Territories</p>
              </div>
            </div>
            <div>
              <button className="mt-6 w-full bg-gray-800 hover:bg-gray-900">
                Start for free
              </button>
              <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-between rounded border border-purple-700 bg-white pb-8 pl-8 pr-8 pt-8 shadow-sm transition-shadow duration-300 hover:shadow sm:items-center">
            <div className="absolute inset-x-0 top-0 -mt-3 flex justify-center">
              <p className="inline-block rounded bg-blue-700 pb-1 pl-3 pr-3 pt-1 text-xs font-medium uppercase tracking-wider text-white">
                Most Popular
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Pro</p>
              <div className="mt-2 flex items-center justify-center">
                <p className="mr-1 text-5xl font-bold">$500</p>
                <p className="text-gray-700">/ mo</p>
              </div>
              <div className="mt-2 space-y-2">
                <p className="text-gray-700">100 leads</p>
                <p className="text-gray-700">Dedicated Representative</p>
                <p className="text-gray-700">One Territory</p>
              </div>
            </div>
            <div>
              <button className="mt-6 w-full bg-blue-700 hover:bg-blue-900">
                Buy Pro
              </button>
              <p className="mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-center sm:text-sm">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
