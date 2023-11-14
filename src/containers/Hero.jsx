import { useThank } from 'hooks/ThankContext';

const Hero = () => {
  const { showModal } = useThank();
  return (
    <section className="overlay">
      <div className="container mx-auto px-[16px] md:px-[40px] sLg:px-[60px]">
        <div className="text-center md:text-start">
          <h1 className="w-[290px] mx-auto sm:mx-[0px] sm:w-[343px] md:w-[664px] sLg:w-[667px] lg:w-[653px] title text-[56px] md:text-[88px] text-white leading-none">
            Зроби внесок у Перемогу!
          </h1>
          <p className="w-[290px] mx-auto sm:mx-[0px] sm:w-[343px] md:w-[578px] sLg:w-[667px] lg:w-[648px] text text-white mt-[48px] md:mt-[75px] sLg:mt-[40px] lg:mt-[24px] text-[24px] md:text-[32px] leading-tight">
            Медики Головного військового клінічного госпіталю мужньо боряться за
            життя наших захисників, але без твоєї допомоги вони безкрилі.
          </p>
          <a
            href="https://send.monobank.ua/jar/2XZVwHizxp"
            target="_blank"
            rel="noreferrer"
            onClick={showModal}
            className="inline-flex justify-center items-center  w-[250px] sm:w-[343px] md:w-[312px] h-[88px] md:h-[110px] sLg:h-[88px] p-4 mt-[145px] md:mt-[127px] sLg:mt-[58px] lg:mt-[42px] bg-light-blue title hover:bg-active-btn focus:bg-active-btn text-black text-[40px] leading-1.2 rounded-2xl shadow-donateBoxShadow transition-all"
          >
            Зробити донат
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
