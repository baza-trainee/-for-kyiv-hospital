const Hero = () => {
  return (
    <section className="overlay sm:h-[812px] md:h-[1130px] lg:h-[700px]">
      <div className="container mx-auto px-[16px] md:px-[40px] lg:px-[60px]">
        <div className="sm:text-center md:text-start">
          <h1 className="sm:w-[343px] md:w-[664px] lg:w-[653px] title sm:text-[56px] md:text-[88px] text-white leading-none">
            Зроби внесок у Перемогу!
          </h1>
          <p className="sm:w-[343px] md:w-[578px] lg:w-[648px] text text-white sm:mt-[48px] md:mt-[75px] lg:mt-[24px] sm:text-[24px] md:text-[32px] leading-tight">
            Медики Головного військового клінічного госпіталю мужньо боряться за
            життя наших захисників, але без твоєї допомоги вони безкрилі.
          </p>
          <button className="inline-block sm:w-[343px] md:w-[312px] sm:h-[88px] md:h-[110px] lg:h-[88px] p-4 sm:mt-[145px] md:mt-[127px] lg:mt-[42px] bg-light-blue title hover:bg-active-donate-btn focus:bg-active-donate-btn text-black text-[40px] line-height-extra rounded-2xl shadow-donateBoxShadow transition-all">
            Зробити донат
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
