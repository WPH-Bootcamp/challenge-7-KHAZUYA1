import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactSection = () => {
  // 1. STATE UNTUK MENGATUR MODAL (none, success, failed)
  const [modalStatus, setModalStatus] = useState<'none' | 'success' | 'failed'>('none');
  
  // State untuk data input
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // 2. FUNGSI MENANGANI INPUT
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 3. FUNGSI SAAT TOMBOL SEND DITEKAN
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logika Sederhana: Jika Name atau Email kosong -> Failed
    if (!formData.name || !formData.email) {
      setModalStatus('failed');
    } else {
      // Jika terisi -> Success
      setModalStatus('success');
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Fungsi Tutup Modal
  const closeModal = () => setModalStatus('none');

  return (
    <section id="contact" className="px-6 py-10 lg:py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 relative">
      <div className="max-w-sm mx-auto lg:max-w-xl">
        
        <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-2 text-center text-black dark:text-white">
          Ready to Start? Let’s Talk.
        </h2>
        <p className="text-sm lg:text-lg mb-8 lg:mb-10 text-center text-gray-600 dark:text-gray-400">
          Tell us what you need, and we’ll get back to you soon.
        </p>
        
        {/* FORMULIR */}
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-black dark:text-white">Name</label>
            <input 
              type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" 
              className="w-full bg-transparent rounded-lg py-3 px-4 text-sm border border-gray-300 dark:border-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF5530] focus:ring-1 focus:ring-[#FF5530] transition-colors" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-black dark:text-white">Email</label>
            <input 
              type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" 
              className="w-full bg-transparent rounded-lg py-3 px-4 text-sm border border-gray-300 dark:border-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF5530] focus:ring-1 focus:ring-[#FF5530] transition-colors" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2 text-black dark:text-white">Message</label>
            <textarea 
              id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Enter your message" 
              className="w-full bg-transparent rounded-lg py-3 px-4 text-sm border border-gray-300 dark:border-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF5530] focus:ring-1 focus:ring-[#FF5530] transition-colors resize-none"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-3 text-black dark:text-white">Services</label>
            <div className="flex flex-col space-y-3">
              {['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions', 'Software Development', 'Other'].map((service) => (
                <label key={service} className="flex items-center space-x-3 cursor-pointer group w-fit">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input type="checkbox" className="peer appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#FF5530] checked:border-[#FF5530] transition-all cursor-pointer" />
                    <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full text-base py-3 bg-[#E4572E] hover:bg-[#cc4a26] text-white rounded-full font-bold transition-all">Send</Button>
          </div>
        </form>
      </div>

      {/* --- MODAL POPUP --- */}
      {modalStatus !== 'none' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
            
            {/* ICON AREA */}
            <div className="mb-6 flex justify-center">
              {modalStatus === 'success' ? (
                // --- ICON SUCCESS (Amplop + Ceklis Hijau) ---
                <div className="relative">
                   <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#FF8A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#FF8A3C" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                   <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 border-4 border-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                </div>
              ) : (
                // --- ICON FAILED (Amplop + Silang Merah) ---
                <div className="relative">
                   <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#FF8A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#FF8A3C" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                   <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 border-4 border-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                </div>
              )}
            </div>

            {/* TEXT CONTENT */}
            <h3 className="text-xl font-bold text-black mb-2">
              {modalStatus === 'success' ? 'Message Received!' : 'Oops! Something went wrong.'}
            </h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              {modalStatus === 'success' 
                ? 'Thanks for reaching out — we’ll get back to you as soon as possible.' 
                : 'We couldn’t send your message. Please try again or check your connection.'}
            </p>

            {/* BUTTON */}
            <button 
              onClick={closeModal}
              className={`w-full py-3 rounded-full font-bold text-white transition-all shadow-lg ${
                modalStatus === 'success' 
                  ? 'bg-[#FF5530] hover:bg-[#e04825] shadow-orange-500/30' 
                  : 'bg-[#FF5530] hover:bg-[#e04825] shadow-orange-500/30'
              }`}
            >
              {modalStatus === 'success' ? 'Back to Home' : 'Try Again'}
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;