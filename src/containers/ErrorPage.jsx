import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { error, errorx2, arrow, errorm } from 'assets/images/Error';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setContentVisible(true);
  }, []);

  const goHome = () => {
    navigate('/');
  };

  return (
    <section className={`overflow-y-auto bg-sky-100 min-h-screen flex flex-col items-center transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 md:px-[56px] py-[102px] md:py-[80px] lg:py-[60px] sm:pb-[100px]">
        <div className="lg:flex items-center">
          <div className='flex justify-center items-center lg:mr-[150px]'>
            <picture>
              <source srcSet={`${error} 1x, ${errorx2} 2x`} />
              <img src={error} alt="blood" width="500" height="500" className="" />
            </picture>
          </div>
          <div className={`flex flex-col lg:mt-[120px] justify-center lg:items-start md:items-center md:text-center md:justify-start lg:justify-start md:ml-0 ${isMobile() ? 'text-center' : ''}`}>
            <span>
              <img src={errorm} alt="404" className={`lg:w-[278px] md:w-[278px] ${isMobile() ? 'w-[139px] md:mt-30 md:ml-15 lg:mt-[170px] top-[40px] right-[10px] sm:block' : ''} md:block absolute top-[10px]`} />
            </span>
            <div className={`md:w-full lg:text-left md:text-center ${isMobile() ? 'text-center' : ''}`}>
              <div className={`text lg:text-[32px] sm:text-[20px] md:text-[32px] lg:w-full ${isMobile() ? 'text-center' : ''} lg:h-[120px] md:h-[114px] sm:h-[72px] text-stone-950 text-base font-normal leading-tight `}>
                Нам дуже шкода, але виникли проблеми із завантаженням сайту...
              </div>
              <div className="align-items:flex-start gap-2 inline-flex text-center sm:mt-[45px] sm:mb-[17px]">
                <div className="text text-[18px] sm:text-[14px] md:text-[18px] md:h-[22px] text-stone-950 leading-tight">
                  Щоб спробувати ще раз, натисни кнопку
                </div>
                <img src={arrow} alt="close" />
              </div>
            </div>
            <div
              onClick={goHome}
              className={`cursor-pointer w-full md:w-[343px] h-20 p-4 md:mt-[27px] lg:mt-[45px] bg-blue-300 rounded-2xl shadow justify-center items-center gap-4 text-center ${isMobile() ? 'md:justify-start lg:justify-start' : ''} hover:shadow-back active:shadow-backInsert`}>
              <button className={`text-stone-950 text-[40px] font-normal title leading-[48px]`}>Повернутися назад
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function isMobile() {
  return window.innerWidth < 768;
}

export default ErrorPage;
