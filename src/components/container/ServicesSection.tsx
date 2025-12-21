const ServicesSection = () => {
  const services = [
    { title: "Web Development", desc: "Build fast, scalable, and SEO-friendly websites.", icon: "web dev.svg" },
    { title: "Mobile App Development", desc: "Native & cross-platform apps tailored to user needs.", icon: "mobile app.svg" },
    { title: "UI/UX Design", desc: "Delight users with intuitive and beautiful interfaces.", icon: "UI & UX.svg" },
    { title: "Cloud Solutions", desc: "Secure and flexible cloud infrastructure for your growth.", icon: "cloud.svg" },
    { title: "Software Development", desc: "Custom solutions built around your business logic.", icon: "soft dev.svg" },
    { title: "IT Infrastructure", desc: "Scale your backend with reliable tech foundations.", icon: "IT infra.svg" },
    { title: "Cybersecurity Services", desc: "Stay protected with enterprise-grade security.", icon: "cyber sec.svg" },
    { title: "QA Solutions", desc: "Ensure performance with rigorous testing frameworks.", icon: "QA solution.svg" },
    { title: "IT Consulting & Support", desc: "Make smarter tech decisions with expert guidance.", icon: "IT consul & suport.svg" },
  ];

  return (
    <section id="services" className="flex flex-col items-center px-6 py-10 lg:py-24 text-center bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <h2 className="text-xl lg:text-4xl font-semibold mb-3 leading-snug">
        Smart IT Solutions That<br />Grow With You
      </h2>
      <p className="text-sm lg:text-lg mb-10 lg:mb-16 max-w-xs lg:max-w-lg text-gray-600 dark:text-gray-400">
        Tailored tech to boost efficiency, security, and results.
      </p>

      <div className="flex flex-col w-full max-w-sm space-y-4 overflow-visible mt-2 lg:grid lg:grid-cols-3 lg:gap-8 lg:max-w-6xl lg:space-y-0">
        {services.map((service, idx) => (
          <article key={idx} className="relative bg-white dark:bg-[#121212] rounded-2xl p-5 pt-8 overflow-visible lg:h-full transition-colors duration-300">
            <div className="absolute -top-5 left-5 pointer-events-none">
              <img src={`/image/${service.icon}`} alt="Icon" className="w-10 h-10 rounded-lg drop-shadow-xl" />
            </div>
            <div className="ml-1 text-left">
              <h3 className="font-semibold text-sm lg:text-base mb-1">{service.title}</h3>
              <p className="text-xs lg:text-sm leading-relaxed text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;