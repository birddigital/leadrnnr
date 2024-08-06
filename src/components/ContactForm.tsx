import React from 'react';

export const ContactForm = () => {
  return (
    <section className="bg-black py-20 text-white p-6 relative isolate">
      <span
        className="h-full w-full items-center justify-center inline-flex absolute inset-0 -z-10 opacity-40
    [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full
      h-full"
        >
          <defs>
            <pattern
              id="b-streaming-template"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="scale(12) rotate(0)"
            >
              <rect x="0" y="0" width="100%" height="100%" />
              <path
                d="M15
      5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5
      25H5v30H-5zM-5-15H5v30H-5z"
                stroke-width="0.1"
                className="stroke-white"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#b-streaming-template)"
          />
        </svg>
      </span>
      <div className="mx-auto max-w-3xl p-6">
        <p className="text-center font-bold tracking-widest text-gray-500 mb-2 uppercase">
          contact us
        </p>
        <p className="text-center text-4xl lg:text-6xl font-bold tracking-tight text">
          We&apos;re committed to providing you with the best possible
          experience
        </p>
        <div className="mt-12 lg:grid-cols-2 grid gap-10">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              placeholder="James Ghost"
              className="p-4 focus:outline-none border-none mt-1.5 rounded-xl
          bg-[#171718] text-white"
            />
          </div>
          <div className="flex flex-col">
            <label>Email address</label>
            <input
              type="email"
              placeholder="jammieghost1@empire.co"
              className="p-4 focus:outline-none border-none mt-1.5
          rounded-xl bg-[#171718] text-white"
            />
          </div>
          <div className="lg:col-span-2">
            <label>Message</label>
            <textarea
              type="textarea"
              placeholder="Your message"
              rows="5"
              className="mt-1.5 w-full rounded-xl bg-[#171718]
          text-white border-none p-4 focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="mt-12 justify-center flex">
          <button
            type="submit"
            fontfamily="Arial"
            className="rounded-md bg-[#171718] px-8 py-4 text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};
