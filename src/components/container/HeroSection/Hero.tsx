const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 lg:flex lg:items-center lg:min-h-screen">
      
      {/* 1. KONTEN TEKS */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-6 lg:w-1/2 lg:max-w-none lg:mx-0 lg:px-0 lg:pl-12 xl:pl-24 text-left">
        
        {/* Heading */}
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug text-left text-black dark:text-white">
          Your Tech Partner for <br />
          <span className="text-[#FF7A00]">Smarter Growth</span>
        </h1>
        
        {/* Deskripsi */}
        <p className="mt-4 lg:mt-6 text-sm lg:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg lg:mx-0">
          We deliver tailored IT solutions to help you scale with speed and confidence.
        </p>
        
        {/* Tombol CTA ( RATA TENGAH) */}
        {/* flex justify-center = Tombol di Tengah */}
        {/* lg:justify-start = Tombol di Kiri (khusus layar Laptop) */}
        <div className="py-10 flex justify-center lg:justify-start">
          <a
            href="#contact"
            className="inline-block w-full max-w-xs py-4 rounded-full text-white font-bold text-base bg-gradient-to-r from-[#FF8A3C] to-[#E4572E] hover:opacity-90 transition-opacity shadow-md text-center"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      {/* 2. GAMBAR MOBILE (Hanya muncul di HP) */}
      <div className="mt-10 lg:hidden px-6">
        <img
          src="/image/Image Hero HP light mode.svg"
          alt="Tech Illustration Light"
          className="w-full block dark:hidden"
        />
        <img
          src="/image/Image Hero HP dark mode.svg"
          alt="Tech Illustration Dark"
          className="w-full hidden dark:block"
        />
      </div>

      {/* 3. GAMBAR DESKTOP (Hanya muncul di Laptop/PC) */}
      <div className="hidden lg:flex items-center justify-center absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none">
        <img
          src="/image/Image Hero HP light mode.svg"
          alt="Hero Desktop Light"
          className="w-full h-auto block dark:hidden object-cover"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
          }}
        />
        <img
          src="/image/Image Hero HP dark mode.svg"
          alt="Hero Desktop Dark"
          className="w-full h-auto hidden dark:block object-cover"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;