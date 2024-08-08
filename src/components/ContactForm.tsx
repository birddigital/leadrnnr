import React from "react";

export const ContactForm = () => {
  return (
    <section className="relative isolate bg-black p-6 py-20 text-white">
      <span className="absolute inset-0 -z-10 inline-flex h-full w-full items-center justify-center opacity-40 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
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
        <p className="mb-2 text-center font-bold uppercase tracking-widest text-gray-500">
          contact us
        </p>
        <p className="text text-center text-4xl font-bold tracking-tight lg:text-6xl">
          We&apos;re committed to providing you with the best possible
          experience
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              placeholder="James Ghost"
              className="mt-1.5 rounded-xl border-none bg-[#171718] p-4 text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label>Email address</label>
            <input
              type="email"
              placeholder="jammieghost1@empire.co"
              className="mt-1.5 rounded-xl border-none bg-[#171718] p-4 text-white focus:outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label>Message</label>
            <textarea
              placeholder="Your message"
              rows={5}
              className="mt-1.5 w-full rounded-xl border-none bg-[#171718] p-4 text-white focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </section>
  );
};
