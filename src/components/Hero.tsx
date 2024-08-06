import Image from 'next/image';

export const Hero = () => {
  return (
    <div
      className="bg-white pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto flex flex-col items-center relative lg:flex-row lg:py-32
  xl:py-48 md:px-8"
    >
      <div
        className="flex justify-center items-center w-full h-full lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0
    lg:items-center"
      >
        <Image
          src="https://i.imgur.com/DBK8aAb.png"
          className="object-contain object-top w-full h-auto lg:w-auto lg:h-full"
          height={500}
          width={500}
        />
      </div>
      <div className="mr-auto ml-auto flex justify-end relative max-w-xl xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="mb-6 max-w-xl">
            <p
              className="inline-block pt-1 pr-3 pb-1 pl-3 mb-4 text-pink-200 bg-pink-500 rounded-2xl uppercase text-xs
          font-semibold tracking-wider"
            >
              Brand new
            </p>
            <div className="text-3xl font-bold tracking-tight text-gray-900 max-w-lg sm:text-4xl sm:leading-none mb-6">
              <p className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                Lead RnnR is changing
              </p>
              {/* <p
                className="inline-block text-gray-900 text-3xl font-bold tracking-tight mr-2 sm:text-4xl
            sm:leading-none"
              >
                changing
              </p> */}
              <p
                className="inline-block text-blue-700 text-3xl font-bold tracking-tight sm:text-4xl
            sm:leading-none"
              >
                the game
              </p>
            </div>
            <p className="text-gray-700 text-base md:text-lg">
              At Lead RnnR, we&apos;re committed to integrity and excellence.
              Our mission is clear: to be the most trusted marketing partner in
              the industry. You work hard and deserve a marketing firm that
              shares your values. With our personalized approach and exclusive
              territories, we deliver the results you need.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              fontamily="Raleway"
              placeholder="Email Address"
              className="md:mr-2 focus:border-blue-700
          focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none text-black
          bg-white font-normal w-full h-12 text-xs rounded-md pt-3 pr-4 pb-3 pl-4 mb-2 border-2 shadow-sm
          border-gray-300"
            />
          </div>
          <div className="flex items-center mt-4 mr-0 mb-0 ml-0">
            <button
              className="transition duration-200 hover:bg-blue-900 focus:shadow-outline focus:outline-none bg-blue-700
          text-white inline-flex font-semibold tracking-wide h-12 rounded-md shadow-md items-center justify-center
          pr-6 pl-6 mr-6"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
