const Needs = () => {
  return (
    <section
      id="needs"
      className="container mx-auto sm:px-[16px] md:px-[40px] sLg:px-[60px] sm:pt-[20px] sm:pb-[60px] md:py-[100px] sLg:py-[80px]"
    >
      <h2 className="mb-[32px] lg:mb-[24px] text-center sLg:text-left title text-[56px] leading-1.2 text-blue-sky">
        Потреби
      </h2>
      <p className="sLg:hidden sm:mb-[32px] text text-[18px] leading-[21px] text-blue-sky text-left">
        Щодня на придбання Омепразол - порошок для р-ну д/інф. по 40 мг №1 у
        флаконі потрібно більше 50 000 гривень. Тому наша мета зібрати 2 000 000
        гривень для забезпечення госпіталя необхідною кількістю Омепразолу для
        збереження життя українським бійцям та поліпшення їхнього здоров’я.{' '}
      </p>

      <div className="sLg:hidden mb-[32px]">
        <div className="w-full h-[60px] rounded-2xl bg-blue-sky">
          <div className="w-[30%] h-full rounded-tl-2xl rounded-bl-2xl bg-active-btn"></div>
        </div>
        <div className="flex justify-between md:justify-center md:gap-[120px] items-center px-[6px]">
          <p className="text text-[16px] leading-[19px] text-blue-sky">
            Наша мета
          </p>
          <p className="flex items-center text text-[16px] leading-[19px] text-blue-sky">
            {' '}
            <span className="title text-[32px] leading-[38px]">2 000 000</span>
            <span className="ml-[8px]">грн.</span>
          </p>
        </div>
      </div>
      <p className="sLg:hidden text text-[18px] leading-[21px] mb-[40px] text-blue-sky text-left">
        Військовослужбовці рятують наше життя щосекунди - врятуймо ми й їхнє,
        задонативши на потреби Госпіталя!
      </p>
      <button className="sLg:hidden inline-block sm:w-[343px] md:w-[312px] h-[88px] p-4 bg-light-blue title hover:bg-active-btn focus:bg-active-btn text-black text-[40px] leading-1.2 rounded-2xl shadow-donateBoxShadow transition-all">
        Зробити донат
      </button>
      {/* Deskop */}
      <div className="hidden sLg:flex">
        <div className="left-side w-[648px] mr-[25px]">
          <p className="mb-[40px] lg:mb-[24px] text text-[18px] leading-[21px] text-blue-sky text-left">
            Щодня на придбання Омепразол - порошок для р-ну д/інф. по 40 мг №1 у
            флаконі потрібно більше 50 000 гривень. Тому наша мета зібрати 2 000
            000 гривень для забезпечення госпіталя необхідною кількістю
            Омепразолу для збереження життя українським бійцям та поліпшення
            їхнього здоров’я.{' '}
          </p>
          <div>
            <div className="w-full h-[60px] rounded-2xl bg-blue-sky">
              <div className="w-[30%] h-full rounded-tl-2xl rounded-bl-2xl bg-active-btn"></div>
            </div>
            <div className="flex justify-between md:justify-center md:gap-[120px] items-center px-[6px]">
              <p className="text text-[16px] leading-[19px] text-blue-sky">
                Наша мета
              </p>
              <p className="flex items-center text text-[16px] leading-[19px] text-blue-sky">
                {' '}
                <span className="title text-[32px] leading-[38px]">
                  2 000 000
                </span>
                <span className="ml-[8px]">грн.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="right-side w-[647px] text-center">
          <p className="mb-[56px] text text-[18px] leading-[21px] text-blue-sky text-left">
            Військовослужбовці рятують наше життя щосекунди - врятуймо ми й
            їхнє, задонативши на потреби Госпіталя!
          </p>
          <button className="inline-block w-[312px] h-[86px] p-4 bg-light-blue title hover:bg-active-btn focus:bg-active-btn text-black text-[40px] leading-1.2 rounded-2xl shadow-donateBoxShadow transition-all">
            Зробити донат
          </button>
        </div>
      </div>
    </section>
  );
};

export default Needs;
