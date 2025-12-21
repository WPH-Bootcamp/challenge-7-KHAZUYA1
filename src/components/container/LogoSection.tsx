const LogoSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-black text-gray-500 dark:text-gray-400 text-center py-16 lg:py-24 transition-colors duration-300">
      <div className="px-6 lg:max-w-6xl lg:mx-auto">
        <p className="mb-10 text-sm lg:text-base uppercase tracking-widest opacity-80">
          Trusted by Global Innovators & Leading Brands
        </p>
        
        {/* --- Mobile View --- */}
        <div className="flex justify-center items-center gap-x-8 lg:hidden">
          {/* Pastikan nama file sesuai dengan yang ada di folder public/image */}
          <img src="/image/postman.svg" alt="Postman" className="h-5 w-auto opacity-70" />
          <img src="/image/databricks.svg" alt="Databricks" className="h-5 w-auto opacity-70" />
          <img src="/image/airbnb.svg" alt="Airbnb" className="h-5 w-auto opacity-70" />
        </div>

        {/* --- Desktop View --- */}
        <div className="hidden lg:block relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-100 to-transparent dark:from-black"></div>
          
          <div className="flex flex-nowrap justify-between items-center gap-10">
            {/* List gambar logo */}
            {['adobe.svg', 'upwork.svg', 'zoom.svg', 'postman.svg', 'databricks.svg', 'airbnb.svg', 'dropbox.svg', 'paypal.svg', 'netflix.svg'].map((logo, index) => (
              <img 
                key={index} 
                src={`/image/${logo}`} 
                alt="Partner Logo" 
                className="h-5 lg:h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" 
              />
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-100 to-transparent dark:from-black"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;