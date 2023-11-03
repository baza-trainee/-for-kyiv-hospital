import React from 'react';
import { useNavigate } from 'react-router-dom';
import { error, errorx2, arrow, errorm } from 'assets/images/Error';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <section className='bg-sky-100 min-h-screen flex items-center'>
      <div className="container mx-auto px-[56px] py-[102px] md:py-[80px] lg:py-[60px] ">
        <div className="lg:flex items-center">
          <div className='flex justify-center items-center'>
            <picture>
              <source srcSet={`${error} 1x, ${errorx2} 2x`} />
              <img src={error} alt="blood" width="500" height="500" className="" />
            </picture>
          </div>
          <div className="flex flex-col justify-center lg:items-start md:items-center md:text-center md:justify-start lg:justify-start md:ml-100">
            <span className="">
              <img src={errorm} alt="404" width="278" height="200" className="md:mt-30 md:ml-15 text-stone-950 text-[200px] title text-left lg:mt-[170px] md:block absolute top-0" />
            </span>
            <div className="md:w-[536px] lg:text-left md:text-center">
              <p className="md:mb-[23px] text text-[32px] md:text-[32px] lg:w-[536px] h-[100px] text-stone-950 text-base font-normal leading-tight ">
                Нам дуже шкода, але виникли проблеми із завантаженням сайту...
              </p>
              <div className="align-items:flex-start gap-2 inline-flex text-center">
                <p className="text text-[18px] md:text-[18px] md:h-[22px] text-stone-950 leading-tight">
                  Щоб спробувати ще раз, натисни кнопку
                </p>
                <img src={arrow} alt="close" />
              </div>
            </div>
            <div
              onClick={goHome}
              className="cursor-pointer w-[343px] h-20 p-4 md:mt-[27px] lg:mt-[45px] bg-blue-300 rounded-2xl shadow justify-center items-center gap-4 text-center md:justify-start lg:justify-start hover:shadow-back active:shadow-backInsert">
              <button className=" text-stone-950 text-[40px] font-normal title leading-[48px]">Повернутися назад
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
