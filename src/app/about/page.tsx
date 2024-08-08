import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
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

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-6 text-4xl font-bold">Where It All Began</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu
          aliquet, elementum nisi quis, condimentum nibh. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="https://via.placeholder.com/800x600"
              alt="Company Image"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
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

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-bold">
            Built By Contractors For Contractors
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            arcu aliquet, elementum nisi quis, condimentum nibh. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui. Curabitur
            non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-6 text-4xl font-bold">Meet Our Leaders</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <Image
              src="https://via.placeholder.com/300"
              alt="Leader Image"
              width={300}
              height={300}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">Lorem Ipsum</h3>
            <p className="text-gray-600">Chief Executive Officer</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="https://via.placeholder.com/300"
              alt="Leader Image"
              width={300}
              height={300}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">Lorem Ipsum</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="https://via.placeholder.com/300"
              alt="Leader Image"
              width={300}
              height={300}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">Lorem Ipsum</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="https://via.placeholder.com/300"
              alt="Leader Image"
              width={300}
              height={300}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">Lorem Ipsum</h3>
            <p className="text-gray-600">Chief Revenue Officer</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-bold">Our Partners</h2>
          <div className="flex flex-wrap justify-around">
            <Image
              src="https://via.placeholder.com/150"
              alt="Partner Logo"
              width={150}
              height={75}
              className="m-4"
            />
            <Image
              src="https://via.placeholder.com/150"
              alt="Partner Logo"
              width={150}
              height={75}
              className="m-4"
            />
            <Image
              src="https://via.placeholder.com/150"
              alt="Partner Logo"
              width={150}
              height={75}
              className="m-4"
            />
            <Image
              src="https://via.placeholder.com/150"
              alt="Partner Logo"
              width={150}
              height={75}
              className="m-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
