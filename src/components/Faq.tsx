import React from 'react';

export const Faq = () => {
  return (
    <div className="bg-white pt-20 pr-4 pb-24 pl-4 md:px-2">
      <div className="mr-auto ml-auto max-w-7xl">
        <p className=" text-black mt-0 mr-0 mb-12 ml-0 text-xl font-bold text-left md:text-3xl md:text-center">
          Frequently Asked Questions
        </p>
        <div className="mt-0 mr-0 mb-12 ml-0 flex items-start justify-start">
          <p>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M8.228
          9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0
          3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
          <div>
            <p className="font-semibold text-gray-900 mb-3">
              What is accessibility?
            </p>
            <p className="text-gray-600">
              This article starts off the module with a good look at what
              accessibility is — this includes what groups of people we need to
              consider and why, what tools different people use to interact with
              the web, and how we can make accessibility part of our web
              development workflow.
            </p>
          </div>
        </div>
        <div className="mt-0 mr-0 mb-12 ml-0 flex items-start justify-start">
          <p>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M8.228
          9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0
          3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
          <div>
            <p className="font-semibold text-gray-900 mb-3">
              CSS and JavaScript accessibility best practices?
            </p>
            <p className="text-gray-600">
              CSS and JavaScript, when used properly, also have the potential to
              allow for accessible web experiences, but if misused they can
              significantly harm accessibility. This article outlines some CSS
              and JavaScript best practices that should be considered to ensure
              that even complex content is as accessible as possible.
            </p>
          </div>
        </div>
        <div className="mt-0 mr-0 mb-12 ml-0 flex items-start justify-start">
          <p>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M8.228
          9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0
          3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
          <div>
            <p className="font-semibold text-gray-900 mb-3">
              WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA
              basics?
            </p>
            <p className="text-gray-600">
              Following on from the previous article, sometimes making complex
              UI controls that involve unsemantic HTML and dynamic
              JavaScript-updated content can be difficult. WAI-ARIA is a
              technology that can help with such problems by adding in further
              semantics that browsers and assistive technologies can recognize
              and use to let users know what is going on. Here we&rsquo;ll show
              how to use it at a basic level to improve accessibility.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div
            className="pt-2 pr-3 pb-2 pl-3 inline-flex items-center justify-center bg-gray-200 rounded-md text-gray-900
        transition cursor-pointer hover:bg-gray-400"
          >
            <p className="inline font-semibold">Learn more on the MDN docs</p>
            <p className="inline-flex items-center justify-center w-10 h-10">
              <svg viewBox="0 0 20 20" fill="currentColor" className="ml-3">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0
            011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0
            010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
