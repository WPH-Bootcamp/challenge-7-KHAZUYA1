const PortfolioSection = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center px-6 py-14 lg:py-24 text-center bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <h2 className="text-xl lg:text-4xl font-semibold mb-3 leading-snug">
        From Vision to Launch!<br />Projects We’re Proud Of
      </h2>
      <p className="text-sm lg:text-lg mb-10 lg:mb-16 max-w-xs lg:max-w-xl text-gray-600 dark:text-gray-400">
        Take a closer look at our recent work powering startups, enterprises, and everything in between.
      </p>

      <div className="flex flex-col w-full max-w-sm space-y-10 lg:flex-row lg:max-w-6xl lg:space-y-0 lg:gap-8">
        {[1, 2, 3].map((num) => (
          <article key={num} className="flex flex-col items-center lg:items-start lg:flex-1">
            <img
              src={`/image/portofolio ${num}.svg`}
              alt={`Portfolio ${num}`}
              className="rounded-2xl shadow-lg mb-3 w-full"
            />
            <span className="text-[#FF7A00] text-xs mb-1">Landing Page</span>
            <h3 className="font-semibold text-sm lg:text-base">Portfolio {num}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;