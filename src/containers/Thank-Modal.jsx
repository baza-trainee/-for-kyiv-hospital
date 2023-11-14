import { thank, thankX2, close } from 'assets/images/ThankModal';
import { useThank } from '../hooks/ThankContext';

const Thank = () => {
  const { closeModal } = useThank();
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-gray-800/50 backdrop-blur-sm flex justify-center md:items-center overflow-y-auto md:p-4">
      <div className="w-[375px] h-max md:w-[744px] sLg:w-[1044px] bg-sky-100 relative">
        <span className="absolute top-8 right-4 md:right-10 sLg:right-[60px] cursor-pointer">
          <img src={close} alt="close" onClick={closeModal} />
        </span>
        <div className="py-[80px] md:pt-[60px] md:pb-[120px] sLg:pt-[87px] sLg:pb-[218px] flex flex-col items-center md:justify-center">
          <h2 className="z-10 text-stone-950 text-5xl md:text-6xl font-normal title leading-[57.60px] md:leading-[72px] mb-8 md:mb-[60px] sLg:mb-8">
            Дякуємо за донат!
          </h2>
          <div className="z-10 w-[343px] md:w-[542px] z-2 text-center text-stone-950 text-2xl md:text-[32px] font-normal text leading-[28.80px] md:leading-[38.40px] sLg:leading-10">
            Завдяки тобі військові мають можливість бути здоровими!
          </div>
          <div className="mt-[-12%] md:mt-[-21%] sLg:absolute sLg:left-0 sLg:mt-[13%]">
            <picture>
              <source srcSet={`${thank} 1x, ${thankX2} 2x`} />
              <img
                src={thank}
                alt="thank you for donate"
                className="w-[375px] h-[421px] md:w-[658px] md:h-[658px] "
              />
            </picture>
          </div>
          <div
            onClick={closeModal}
            className="z-10 cursor-pointer w-[343px] h-20 p-4 md:mt-[162px] sLg:mt-24 bg-blue-300 rounded-2xl shadow justify-center items-center gap-4 inline-flex hover:shadow-back active:shadow-backInsert"
          >
            <button className="text-stone-950 text-[40px] font-normal title leading-[48px]">
              Повернутися назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thank;
