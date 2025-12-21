import { useState } from 'react';

const IndustrySection = () => {
  // State untuk menyimpan tab mana yang sedang aktif (Default: fintech)
  const [activeTab, setActiveTab] = useState('fintech');

  // Data konten untuk setiap tab
  const tabContent = {
    fintech: {
      text: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
      img: "Fintech.svg"
    },
    ecommerce: {
      text: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
      img: "e-commerce.svg"
    },
    healthcare: {
      text: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
      img: "healthcare.svg"
    }
  };

  return (
    <section className="flex flex-col items-center px-6 py-14 lg:py-24 text-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="w-full lg:max-w-6xl lg:mx-auto">
        <h2 className="text-xl lg:text-4xl font-semibold mb-3">Built for Your Industry</h2>
        <p className="text-sm lg:text-lg mb-8 lg:mb-16 max-w-xs lg:max-w-lg mx-auto text-gray-600 dark:text-gray-400">
          We’ve helped companies across industries launch smarter, faster, and more securely.
        </p>

        <div className="flex flex-col lg:flex-row lg:gap-16 w-full max-w-sm lg:max-w-none mx-auto text-left">
          
          {/* === KOLOM KIRI (TOMBOL TABS) === */}
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col items-start text-left w-full space-y-3 mb-6 lg:mb-0">
              {['fintech', 'ecommerce', 'healthcare'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`industry-tab pl-2 lg:text-lg transition-all border-l-2 text-left capitalize ${
                    activeTab === tab
                      ? "text-[#FF7A00] font-semibold border-[#FF7A00]"
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white border-gray-300 dark:border-gray-700"
                  }`}
                >
                  {tab === 'ecommerce' ? 'E-Commerce' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* === KOLOM KANAN (KONTEN GAMBAR & TEKS) === */}
          <div className="w-full lg:w-2/3">
            <div className="industry-content animate-in fade-in zoom-in duration-300">
              <p className="text-sm lg:text-base leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                {/* Mengambil teks berdasarkan tab yang aktif */}
                {tabContent[activeTab as keyof typeof tabContent].text}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={`/image/${tabContent[activeTab as keyof typeof tabContent].img}`}
                  alt={`${activeTab} illustration`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrySection;