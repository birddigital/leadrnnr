import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative ml-auto mr-auto flex flex-col items-center bg-white pb-16 pl-4 pr-4 pt-16 md:px-8 lg:flex-row lg:py-32 xl:py-48">
      <div className="flex h-full w-full items-center justify-center lg:bottom-0 lg:left-0 lg:w-1/2 lg:items-center lg:justify-end">
        <Image
          src="https://i.imgur.com/DBK8aAb.png"
          className="h-auto w-full object-contain object-top lg:h-full lg:w-auto"
          height={500}
          width={500}
          alt="Lead RnnR Ipad"
        />
      </div>
      <div className="relative ml-auto mr-auto flex max-w-xl justify-end lg:max-w-screen-xl xl:pr-32">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="mb-6 max-w-xl">
            <p className="mb-4 inline-block rounded-2xl bg-pink-500 pb-1 pl-3 pr-3 pt-1 text-xs font-semibold uppercase tracking-wider text-pink-200">
              Brand new
            </p>
            <div className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Lead RnnR is changing
              </p>
              <p className="inline-block text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl sm:leading-none">
                the game
              </p>
            </div>
            <p className="text-base text-gray-700 md:text-lg">
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
              placeholder="Email Address"
              className="focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded-md border-2 border-gray-300 bg-white pb-3 pl-4 pr-4 pt-3 text-xs font-normal text-black shadow-sm transition duration-200 focus:border-blue-700 focus:outline-none md:mr-2"
            />
          </div>
          <div className="mb-0 ml-0 mr-0 mt-4 flex items-center">
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
