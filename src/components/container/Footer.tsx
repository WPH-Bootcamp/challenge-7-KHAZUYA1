const Footer = () => {
  return (
    // Section pembungkus
    <section className="px-6 py-10 lg:py-16 mt-8 bg-white dark:bg-black transition-colors duration-300">
      
      {/* Container Footer Utama (Background Abu-abu/Ungu Muda) */}
      <footer className="bg-[#e4e4ee] max-w-6xl mx-auto rounded-[2.5rem] p-8 lg:p-12 text-black">
        
        {/* --- BAGIAN ATAS (LOGO & HEADING) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6 lg:mb-0 lg:order-2">
            <img src="/image/logo-symbol kotak orange2x.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-lg text-black">Your Logo</span>
          </div>
          
          {/* Heading Besar */}
          <h3 className="font-bold text-2xl lg:text-4xl leading-tight uppercase lg:order-1">
            Let’s Discuss Your<br />Ideas
          </h3>
        </div>

        {/* --- GARIS PEMBATAS --- */}
        <hr className="border-gray-400/50 mb-8" />

        {/* --- BAGIAN BAWAH (LINK & SOSMED) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Navigasi Link */}
          <ul className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:gap-x-8 font-semibold text-base text-black">
            {['About', 'Service', 'Projects', 'Testimonials', 'FAQ'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Social Media Icons (DIPERBAIKI UKURANNYA) */}
          <div className="flex gap-4">
             {['Social Media.svg', 'Social Media (1).svg', 'Social Media (2).svg', 'Social Media (3).svg'].map((icon, i) => (
                // Container Lingkaran (Ukuran w-12 h-12 = 48px)
                <div key={i} className="w-12 h-12 bg-transparent border border-black/10 rounded-full flex items-center justify-center hover:bg-black transition-all cursor-pointer group">
                  {/* PERBAIKAN DISINI:
                      Ukuran gambar diperbesar dari w-6 h-6 menjadi w-8 h-8 (32px)
                      agar terlihat lebih pas dan besar di dalam lingkaran.
                  */}
                  <img 
                    src={`/image/${icon}`} 
                    alt="Social" 
                    className="w-8 h-8 opacity-80 group-hover:invert transition-all" 
                  />
                </div>
             ))}
          </div>

        </div>
      </footer>
    </section>
  );
};

export default Footer;