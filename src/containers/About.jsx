import React, { useState, useEffect } from 'react';
import '../index.css';
import { hospital, hospitalx2, more } from '../assets/images/About';
import { useThank } from 'hooks/ThankContext';
import MoreModal from 'containers/MoreModal';

const About = () => {
  const { showModal } = useThank();
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);
  const [isMoreVisible, setIsMoreVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setIsParagraphVisible(false);
        setIsMoreVisible(true);
      } else {
        setIsParagraphVisible(true);
        setIsMoreVisible(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      className="container mx-auto md:pb-[60px] pt-[60px] px-[16px] md:pt-[102px] md:px-[40px] lg:pt-[80px] lg:px-[60px] mb-[80px]"
    >
      <h2 className=" text-sky-100 text-center md:text-start leading-[67.20px] mb-[24px] md:mb-[32px]  lg:mb-[24px] title text-[56px]">
        Про госпіталь
      </h2>
      <div className="lg:flex lg:flex-row-reverse">
        <picture>
          <source srcSet={`${hospital} 1x, ${hospitalx2} 2x`} />
          <img
            src={hospital}
            alt="hospital"
            width="343"
            height="257"
            className="rounded-[16px] mb-[32px] md:w-[664px] md:h-[347px] lg:mb-[0px] lg:w-[648px] lg:ml-[24px]"
          />
        </picture>
        <div>
          <p className=" text text-[16px] md:text-[18px] wm-[343px] md:w-[664px] md:h-[352px] lg:w-[648px] text-sky-100 text-base font-normal leading-tight mb-[40px] lg:mb-[40px] lg:mr-[24px]">
            Національний військово-медичний клінічний центр «Головний військовий
            клінічний госпіталь» — медичний заклад у Києві, провідна установа
            охорони здоров'я Міністерства оборони України.
            <br />
            <br />
            Госпіталь є вагомим структурним підрозділом військової медицини,
            одним з найважливіших військово-медичних закладів України у
            загальнодержавній системі. Є багатопрофільним клінічним,
            лікувально-діагностичним та науковим центром, в якому лікуються
            військовослужбовці та ветерани Збройних Сил.
            <br />
            <br />
            {isParagraphVisible && (
              <span className="text-sky-100 text-base font-normal">
                До штату центру входять: 26 клінік (понад 40 відділень), клініка
                лабораторної діагностики, сучасна клініка променевої діагностики
                і терапії, 4 реанімаційні підрозділи (хірургічний,
                нейрохірургічний, кардіологічний та для інфекційних хворих),
                відділення функціональної діагностики і фарм-центр. Шпиталь
                розрахований на 1125 ліжок.
              </span>
            )}
          </p>
          {isMoreVisible && (
            <div
              className="mb-[40px] sm:mb-[40px] flex justify-end cursor-pointer"
              onClick={openModal}
            >
              <img src={more} alt="more" />
            </div>
          )}

          <button
            onClick={showModal}
            className="w-[100%] md:w-[312px] h-[88px] p-4 title bg-light-blue hover:bg-active-donate-btn focus:bg-active-donate-btn rounded-2xl shadow-donateBoxShadow transition-all justify-center items-center gap-2 inline-flex  text-stone-950 text-[40px] font-normal line-height-extra cursor-pointer"
          >
            Зробити донат
          </button>
          <MoreModal isVisible={isModalVisible} closeHandler={closeModal} />
        </div>
      </div>
    </section>
  );
};

export default About;
