

const Hero = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      
      <div className="mx-auto grid w-11/12 max-w-7xl grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-12">
        
      
        <div className="min-w-0 space-y-4 text-left sm:space-y-6">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

     
          <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4 sm:pt-2">
            <button
              className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:opacity-95 sm:px-6 sm:py-3"
            >
              Explore Technologies
            </button>

            <button
              className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:text-gray-900 sm:px-6 sm:py-3"
            >
              Learn More
            </button>
          </div>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/banner-stack.png"
            alt="Development Stack Banner"
            className="w-full max-w-xs object-contain sm:max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;