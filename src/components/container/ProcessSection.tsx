const ProcessSection = () => {
  const steps = [
    { title: "Discovery & Consultation", desc: "Understand Your Needs & Goals" },
    { title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
    { title: "Design & Prototyping", desc: "Craft UX That Converts" },
    { title: "Development & Implementation", desc: "Deliver With Speed & Precision" },
    { title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
    { title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
  ];

  return (
    <section id="our-process" className="py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <header className="mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-3 text-black dark:text-white">Our Process</h2>
          <p className="text-sm lg:text-lg max-w-sm lg:max-w-lg mx-auto text-gray-600 dark:text-gray-400">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </header>

        {/* --- MOBILE LAYOUT --- */}
        <div className="lg:hidden">
          <ol className="relative max-w-sm mx-auto text-left border-l border-gray-300 dark:border-gray-800">
            {steps.map((step, idx) => (
              <li key={idx} className={`${idx !== steps.length - 1 ? 'mb-10' : ''} ml-6`}>
                <span className="absolute flex items-center justify-center w-7 h-7 bg-[#FF7A00] rounded-full -left-3 ring-8 text-white text-xs font-bold ring-white dark:ring-black">
                  {idx + 1}
                </span>
                <div className="bg-gray-100 dark:bg-[#121212] p-5 rounded-xl transition-colors duration-300">
                  <h3 className="font-semibold text-sm mb-1 text-black dark:text-white">{step.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* --- DESKTOP LAYOUT (ZIG-ZAG) --- */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-x-12 lg:gap-y-8 lg:max-w-5xl lg:mx-auto items-center relative">
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-300 dark:bg-gray-800 -translate-x-1/2" aria-hidden="true"></div>
          
          {steps.map((step, idx) => (
            <>
              {idx % 2 === 0 ? (
                 <>
                   <article className="bg-gray-100 dark:bg-[#121212] p-5 rounded-xl w-full flex justify-between items-start text-left transition-colors duration-300">
                      <div><h3 className="font-semibold text-base mb-1 text-black dark:text-white">{step.title}</h3><p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p></div>
                   </article>
                   <span className="flex items-center justify-center w-8 h-8 bg-[#FF7A00] rounded-full text-white text-xs font-bold z-10">{idx + 1}</span>
                   <div></div>
                 </>
              ) : (
                 <>
                   <div></div>
                   <span className="flex items-center justify-center w-8 h-8 bg-[#FF7A00] rounded-full text-white text-xs font-bold z-10">{idx + 1}</span>
                   <article className="bg-gray-100 dark:bg-[#121212] p-5 rounded-xl w-full flex justify-between items-start text-left transition-colors duration-300">
                      <div><h3 className="font-semibold text-base mb-1 text-black dark:text-white">{step.title}</h3><p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p></div>
                   </article>
                 </>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;