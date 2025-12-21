import { useState, useEffect } from 'react';
import Button from '../../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav className={`flex justify-between items-center px-6 lg:px-12 py-4 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center space-x-2">
            <img src="/image/logo-symbol kotak orange2x.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg text-black dark:text-white">Your Logo</span>
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center space-x-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-700 hover:text-[#FF7A00] dark:text-gray-300 dark:hover:text-white transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* TOMBOL KANAN & HAMBURGER */}
        <div className="flex-shrink-0 flex items-center space-x-4">
          <div className="hidden lg:block"><a href="#contact"><Button>Let's Talk</Button></a></div>
          
          {/* HAMBURGER BUTTON (Warna Hitam) */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden p-2 text-black dark:text-white focus:outline-none"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY (BACKGROUND PUTIH) --- */}
      <div 
        className={`fixed inset-0 z-50 bg-white dark:bg-black flex flex-col p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Menu Mobile */}
        <div className="flex justify-between items-center mb-10">
           <div className="flex items-center space-x-2">
              <img src="/image/logo-symbol kotak orange2x.svg" alt="Logo" className="w-8 h-8" />
              {/* Logo Text Hitam di Mobile */}
              <span className="font-bold text-xl text-black dark:text-white">Your Logo</span>
           </div>
           
           {/* Tombol Close (X) - Warna Hitam */}
           <button onClick={() => setIsOpen(false)} className="text-black dark:text-white hover:text-gray-500 transition">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </button>
        </div>

        {/* Link Menu Mobile - Teks Hitam */}
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-medium text-black dark:text-white hover:text-[#FF7A00] transition-colors"
              >
                {link.name}
              </a>
          ))}
        </nav>
        
        {/* Tombol Mobile */}
        <div className="mt-8">
           <a href="#contact" onClick={() => setIsOpen(false)}>
             <Button className="w-full text-lg py-4">Let's Talk</Button>
           </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;