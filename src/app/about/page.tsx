import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-1 flex-col leading-7 text-neutral-800">
      <header
        className="relative h-64 w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x400')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">OUR COMPANY</h1>
        </div>
      </header>

      <section className="flex flex-col items-center px-4 pb-12 pt-20 leading-7 text-neutral-800">
        <div className="w-6/12 leading-7 text-neutral-800">
          <h2 className="mb-6 text-4xl font-bold">Where It All Began</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            arcu aliquet, elementum nisi quis, condimentum nibh. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui. Curabitur
            non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
        <div className="mt-12 flex w-8/12 items-center justify-center leading-7 text-neutral-800">
          <div className="md:w-1/2">
            <Image
              src="https://via.placeholder.com/800x600"
              alt="Company Image"
              width={800}
              height={600}
              className="border-none align-middle leading-7 text-neutral-800"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              arcu aliquet, elementum nisi quis, condimentum nibh. Vestibulum ac
              diam sit amet quam vehicula elementum sed sit amet dui. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus. Nulla
              quis lorem ut libero malesuada feugiat. Proin eget tortor risus.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center px-4 pb-12 pt-20 leading-7 text-neutral-800">
        <div className="container mx-auto w-8/12 px-4">
          <h2 className="mb-6 text-center text-4xl font-bold">
            Built By Contractors For Contractors
          </h2>
          <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide text-neutral-800">
            Our team is made up of veteran contractors who have captured the
            attention of industry giants. We are dedicated to providing the best
            service possible to our clients, and pooling their ideas and
            feedback to build technology that is designed by contractors for
            contractors. Our mission is to empower contractors with the best
            estimating and lead generation tools for their websites.
          </article>
        </div>
      </section>
      <section
        className="mx-auto my-0 w-full overflow-hidden px-4 py-12 leading-7 text-neutral-800"
        style={{ maxWidth: "1172px" }}
      >
        <article className="mb-8 break-words text-center text-3xl font-medium leading-8 tracking-wide">
          Meet Our Leaders
        </article>
        <div className="hidden text-neutral-800" dir="ltr">
          <div className="">
            <div
              className="flex opacity-100"
              style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                data-index="-1"
                tabIndex={-1}
                className="mx-4 my-0 w-0"
                aria-hidden="true"
                style={{ width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/mike.jpg"
                      alt="Mike Goldenstein"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Mike Goldenstein
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Revenue Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        30+ years in the roofing industry, with 18 years as an
                        installer/company owner, 12 years as manufacturer rep
                        with GAF. Trains contractors nationwide on storm
                        restoration and code compliance.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="0"
                className="mx-4 my-0 w-0"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/travis.jpg"
                      alt="Travis Harvego"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Travis Harvego
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Executive Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        10+ years of hands on field experience, customer
                        relationship management, sales, sales management,
                        project management, labor relations. Deeply understands
                        what contractors need.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="1"
                className="mx-4 my-0 w-0"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/matthew.jpg"
                      alt="Matthew McDaniel"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Matthew McDaniel
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Marketing Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        10+ years of experience creating marketing campaigns,
                        and handbuilt an industry-leading digital marketing
                        platform driving year-over-year growth for 9 years
                        counting.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="2"
                className="mx-4 my-0 w-0"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/brad.jpg"
                      alt="Brad Greenwald"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Brad Greenwald
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Technology Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        15+ years of experience building web applications,
                        websites, and developing web and marketing technologies
                        for agencies, technology startups, and the remodeling
                        industry.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="3"
                className="mx-4 my-0 w-0"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/mike.jpg"
                      alt="Mike Goldenstein"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Mike Goldenstein
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Revenue Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        30+ years in the roofing industry, with 18 years as an
                        installer/company owner, 12 years as manufacturer rep
                        with GAF. Trains contractors nationwide on storm
                        restoration and code compliance.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="4"
                tabIndex={-1}
                className="mx-4 my-0 w-0"
                aria-hidden="true"
                style={{ width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/travis.jpg"
                      alt="Travis Harvego"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Travis Harvego
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Executive Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        10+ years of hands on field experience, customer
                        relationship management, sales, sales management,
                        project management, labor relations. Deeply understands
                        what contractors need.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="5"
                tabIndex={-1}
                className="mx-4 my-0 w-0"
                aria-hidden="true"
                style={{ width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/matthew.jpg"
                      alt="Matthew McDaniel"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Matthew McDaniel
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Marketing Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        10+ years of experience creating marketing campaigns,
                        and handbuilt an industry-leading digital marketing
                        platform driving year-over-year growth for 9 years
                        counting.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="6"
                tabIndex={-1}
                className="mx-4 my-0 w-0"
                aria-hidden="true"
                style={{ width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/brad.jpg"
                      alt="Brad Greenwald"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Brad Greenwald
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Technology Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        15+ years of experience building web applications,
                        websites, and developing web and marketing technologies
                        for agencies, technology startups, and the remodeling
                        industry.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="7"
                tabIndex={-1}
                className="mx-4 my-0 w-0"
                aria-hidden="true"
                style={{ width: "0px" }}
              >
                <div className="">
                  <div
                    tabIndex={-1}
                    className="mt-4 inline-block w-full items-center"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <Image
                      src="https://assets.roofle.com/cms/about/mike.jpg"
                      alt="Mike Goldenstein"
                      className="w-64 border-none align-middle"
                      height={300}
                      width={300}
                    />
                    <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
                      <article className="mb-4 break-words text-3xl font-medium leading-8">
                        Mike Goldenstein
                      </article>
                      <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                        Chief Revenue Officer
                      </article>
                      <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                        30+ years in the roofing industry, with 18 years as an
                        installer/company owner, 12 years as manufacturer rep
                        with GAF. Trains contractors nationwide on storm
                        restoration and code compliance.
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul
            className="mx-0 mb-0 mt-6 block h-2 p-0 text-center"
            style={{ display: "block" }}
          >
            <li className="mx-2 my-0 inline-block h-2">
              <button
                className="m-0 h-2 w-2 cursor-default overflow-visible bg-orange-400 p-0 normal-case text-transparent"
                style={{ borderRadius: "50%" }}
              >
                1
              </button>
            </li>
            <li className="mx-2 my-0 inline-block h-2">
              <button
                className="m-0 h-2 w-2 cursor-default overflow-visible bg-stone-300 bg-opacity-[0.2] p-0 normal-case text-transparent"
                style={{ borderRadius: "50%" }}
              >
                2
              </button>
            </li>
            <li className="mx-2 my-0 inline-block h-2">
              <button
                className="m-0 h-2 w-2 cursor-default overflow-visible bg-stone-300 bg-opacity-[0.2] p-0 normal-case text-transparent"
                style={{ borderRadius: "50%" }}
              >
                3
              </button>
            </li>
            <li className="mx-2 my-0 inline-block h-2">
              <button
                className="m-0 h-2 w-2 cursor-default overflow-visible bg-stone-300 bg-opacity-[0.2] p-0 normal-case text-transparent"
                style={{ borderRadius: "50%" }}
              >
                4
              </button>
            </li>
          </ul>
        </div>
        <div className="block text-neutral-800">
          <div className="mt-4 flex items-center">
            <Image
              src="https://assets.roofle.com/cms/about/travis.jpg"
              alt="Travis Harvego"
              className="w-64 border-none align-middle"
              height={300}
              width={300}
            />
            <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
              <article className="mb-4 break-words text-3xl font-medium leading-8">
                Travis Harvego
              </article>
              <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                Chief Executive Officer
              </article>
              <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                10+ years of hands on field experience, customer relationship
                management, sales, sales management, project management, labor
                relations. Deeply understands what contractors need.
              </article>
            </div>
          </div>
          <div className="mt-4 flex flex-row-reverse items-center">
            <Image
              src="https://assets.roofle.com/cms/about/matthew.jpg"
              alt="Matthew McDaniel"
              className="w-64 border-none align-middle"
              height={300}
              width={300}
            />
            <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
              <article className="mb-4 break-words text-3xl font-medium leading-8">
                Matthew McDaniel
              </article>
              <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                Chief Marketing Officer
              </article>
              <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                10+ years of experience creating marketing campaigns, and
                handbuilt an industry-leading digital marketing platform driving
                year-over-year growth for 9 years counting.
              </article>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <Image
              src="https://assets.roofle.com/cms/about/brad.jpg"
              alt="Brad Greenwald"
              className="w-64 border-none align-middle"
              height={300}
              width={300}
            />
            <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
              <article className="mb-4 break-words text-3xl font-medium leading-8">
                Brad Greenwald
              </article>
              <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                Chief Technology Officer
              </article>
              <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                15+ years of experience building web applications, websites, and
                developing web and marketing technologies for agencies,
                technology startups, and the remodeling industry.
              </article>
            </div>
          </div>
          <div className="mt-4 flex flex-row-reverse items-center">
            <Image
              src="https://assets.roofle.com/cms/about/mike.jpg"
              alt="Mike Goldenstein"
              className="w-64 border-none align-middle"
              height={300}
              width={300}
            />
            <div className="mx-6 my-0" style={{ maxWidth: "392px" }}>
              <article className="mb-4 break-words text-3xl font-medium leading-8">
                Mike Goldenstein
              </article>
              <article className="mb-4 break-words font-semibold uppercase leading-5 tracking-wide">
                Chief Revenue Officer
              </article>
              <article className="mx-0 mb-0 mt-4 break-words leading-6 tracking-wide">
                30+ years in the roofing industry, with 18 years as an
                installer/company owner, 12 years as manufacturer rep with GAF.
                Trains contractors nationwide on storm restoration and code
                compliance.
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
