import { useThank } from 'hooks/ThankContext';

const Needs = () => {
  const { showModal } = useThank();
  return (
    <section
      id="needs"
      className="container mx-auto px-[16px] md:px-[40px] sLg:px-[60px] pt-[20px] pb-[60px] md:py-[100px] sLg:pb-[0px] sLg:pt-[40px]"
    >
      <div className="flex">
        <div className="sLg:w-[568px] sLg:pt-[40px] lg:pt-[45px] sLg:pb-[63px] lg:pb-[80px]">
          <h2 className="mb-[32px] lg:mb-[24px] text-center md:text-left title text-[56px] leading-1.2 text-blue-sky">
            Потреби
          </h2>
          <p className="sLg:mb-[24px] lg:mb-[25px] text text-[18px] leading-[21px] text-blue-sky text-left">
           Головний військовий клінічний госпіталь потребує допомоги в організації Центру крові.
          </p>

          <div className="remedy-photo sLg:hidden"></div>

          <p className="mb-[32px] md:mb-[60px] sLg:mb-[54px] lg:mb-[80px] text text-[18px] leading-[21px] text-blue-sky text-left">
            Військовослужбовці рятують наше життя щосекунди - врятуймо ми й
            їхнє, задонативши на потреби Госпіталя!
          </p>

          <a
            href="https://send.monobank.ua/jar/2XZVwHizxp"
            target="_blank"
            rel="noreferrer"
            onClick={showModal}
            className="block mx-auto sm:inline-flex justify-center items-center w-[250px] sm:w-[343px] md:w-[312px] h-[88px] p-4 bg-light-blue title hover:bg-active-btn focus:bg-active-btn text-black text-[40px] leading-1.2 rounded-2xl shadow-donateBoxShadow transition-all"
          >
            Зробити донат
          </a>
        </div>
        <div className="remedy-photo hidden sLg:block"></div>
      </div>
    </section>
  );
};

export default Needs;
