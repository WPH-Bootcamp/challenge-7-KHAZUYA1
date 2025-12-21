const StatsSection = () => {
  return (
    <section className="text-center py-16 lg:py-24 transition-colors duration-300">
      <div className="px-6 lg:max-w-6xl lg:mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 leading-snug text-black dark:text-white">
          End-to-End IT Solutions<br />That Drive Results
        </h2>
        <p className="mb-10 lg:mb-16 px-6 text-sm lg:text-lg lg:max-w-xl lg:mx-auto text-gray-600 dark:text-gray-400">
          From strategy to execution, we deliver solutions that grow your business.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-6 max-w-xs lg:max-w-4xl mx-auto">
          {/* Statistik 1 */}
          <div className="bg-gray-100 dark:bg-[#121212] rounded-full w-36 h-36 lg:w-48 lg:h-48 flex flex-col justify-center items-center mx-auto transition-colors duration-300">
            <span className="text-[#FF7A00] text-3xl lg:text-5xl font-bold">50+</span>
            <span className="text-xs lg:text-sm mt-1 text-gray-600 dark:text-gray-400">Projects Delivered</span>
          </div>
          {/* Statistik 2 */}
          <div className="bg-gray-100 dark:bg-[#121212] rounded-full w-36 h-36 lg:w-48 lg:h-48 flex flex-col justify-center items-center mx-auto transition-colors duration-300">
            <span className="text-[#FF7A00] text-3xl lg:text-5xl font-bold">5+</span>
            <span className="text-xs lg:text-sm mt-1 text-gray-600 dark:text-gray-400">Years Experience</span>
          </div>
          {/* Statistik 3 */}
          <div className="bg-gray-100 dark:bg-[#121212] rounded-full w-36 h-36 lg:w-48 lg:h-48 flex flex-col justify-center items-center mx-auto transition-colors duration-300">
            <span className="text-[#FF7A00] text-3xl lg:text-5xl font-bold">10+</span>
            <span className="text-xs lg:text-sm mt-1 text-gray-600 dark:text-gray-400">Awards Won</span>
          </div>
          {/* Statistik 4 */}
          <div className="bg-gray-100 dark:bg-[#121212] rounded-full w-36 h-36 lg:w-48 lg:h-48 flex flex-col justify-center items-center mx-auto transition-colors duration-300">
            <span className="text-[#FF7A00] text-3xl lg:text-5xl font-bold">100%</span>
            <span className="text-xs lg:text-sm mt-1 text-gray-600 dark:text-gray-400">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;