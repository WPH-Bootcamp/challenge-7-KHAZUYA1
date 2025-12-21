const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="flex flex-col items-center px-6 py-14 lg:py-24 text-center overflow-x-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <h2 className="text-xl lg:text-4xl font-semibold mb-3">
        What Partners Say About<br />Working With Us
      </h2>
      <p className="text-sm lg:text-lg mb-10 lg:mb-16 max-w-xs lg:max-w-xl text-gray-600 dark:text-gray-400">
        Trusted voices. Real experiences. Proven results.
      </p>

      <div className="w-full lg:max-w-6xl lg:mx-auto flex justify-center items-center">
        
        {/* Kiri (Hidden Mobile) */}
        <article className="hidden lg:block bg-gray-100 dark:bg-[#121212] rounded-2xl p-6 w-full max-w-sm text-left shadow-lg lg:opacity-50 lg:scale-90 transition-colors">
          <div className="mt-3">
            <div className="flex space-x-1 mb-3 text-[#FF7A00]">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-sm mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              “Their communication was excellent and they exceeded our expectations. Their expertise is unmatched.”
            </p>
            <p className="font-semibold text-sm text-black dark:text-white">James Lee</p>
            <p className="text-[#FF7A00] text-xs">CEO at Corporate Corp</p>
          </div>
        </article>

        {/* Tengah (Main) */}
        <article className="relative rounded-2xl p-6 max-w-sm text-left shadow-lg z-10 lg:mx-[-40px] bg-gray-100 dark:bg-[#121212] transition-colors">
          <div className="absolute -top-4 left-6 text-[#FF7A00] text-4xl font-bold">“</div>
          <div className="mt-3">
            <div className="flex space-x-1 mb-3 text-[#FF7A00]">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-sm mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              “The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”
            </p>
            <p className="font-semibold text-sm text-black dark:text-white">Sarah Tan</p>
            <p className="text-[#FF7A00] text-xs">Product Manager at Finovate</p>
          </div>
          <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2">
            <img src="/image/Sarah Tan testimonial.svg" alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white dark:border-black" />
          </div>
        </article>

        {/* Kanan (Hidden Mobile) */}
        <article className="hidden lg:block rounded-2xl p-6 w-full max-w-sm text-left shadow-lg lg:opacity-50 lg:scale-90 bg-gray-100 dark:bg-[#121212] transition-colors">
           <div className="mt-3">
            <div className="flex space-x-1 mb-3 text-[#FF7A00]">
               {[...Array(4)].map((_, i) => <span key={i}>★</span>)}
               <span className="text-gray-400 dark:text-gray-600">★</span>
            </div>
            <p className="text-sm mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              “A reliable partner for all our tech needs. The team is knowledgeable and always delivers great results.”
            </p>
            <p className="font-semibold text-sm text-black dark:text-white">Emily Chen</p>
            <p className="text-[#FF7A00] text-xs">Marketing Head at NextBiz</p>
          </div>
        </article>

      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-10 lg:mt-16">
        <div className="w-2 h-2 rounded-full bg-[#FF7A00]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;