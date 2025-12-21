import { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What services do you offer?", a: "We provide custom web/app development, cloud solutions, UX/UI design, and more." },
    { q: "How do I know if this is right for my business?", a: "Our team will assess your goals and recommend the right solution for your business." },
    { q: "How much does a project cost?", a: "It depends on scope and features. We offer flexible pricing for every project size." },
    { q: "How long does it take?", a: "Timelines vary based on project scope — small projects take weeks, large ones months." },
    { q: "Can I start with a small project first?", a: "Yes — you can start with a pilot or MVP to validate before scaling up." },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-6 py-10 lg:py-24 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-sm mx-auto lg:max-w-6xl lg:flex lg:flex-row lg:gap-16">
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl lg:text-4xl font-semibold leading-tight mb-2">Need Help? Start Here.</h2>
          <hr className="border-gray-300 dark:border-gray-800 mb-4" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 dark:border-gray-800 pb-3">
                <button className="w-full flex justify-between items-center py-3 text-left font-medium" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div className={`${openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"} overflow-hidden transition-all`}>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-[#E4572E] rounded-2xl p-10 text-center text-white">
            <h3 className="text-lg font-semibold mb-1">Let’s talk it through</h3>
            <p className="text-white/90 text-sm mb-4">Book a free consultation with our team.</p>
            <div className="rounded-xl overflow-hidden mb-4 bg-white/20 h-40 flex items-center justify-center">
               
               {/* --- GAMBAR CONSULTATION --- */}
               {/* Pastikan nama file "Consultation Image.svg" ada di public/image */}
               <img 
                 src="/image/Consultation Image.svg" 
                 alt="Meeting" 
                 className="w-full h-full object-cover" 
               />

            </div>
            <button className="bg-white text-black py-2 px-6 rounded-full font-medium w-full hover:bg-gray-100 transition">Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;