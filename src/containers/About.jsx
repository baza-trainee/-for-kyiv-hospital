import React, { useState, useEffect } from 'react';
import '../index.css';
import { hospital, hospitalx2, hospitalx1, hospitalx3, more } from '../assets/images/About';
import MoreModal from 'containers/MoreModal';

const About = () => {
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
      className="container mx-auto px-[16px] md:px-[40px] lg:pt-[21px] sLg:pt-[16px] md:mb-[100px] sm:mb-[60px] sLg:mb-[80px] lg:px-[60px] sLg:px-[60px]">
      <h2 className=" text-sky-100 text-center md:text-start leading-[67.20px] sLg:mb-[32px] mb-[24px] md:mb-[32px]  lg:mb-[24px] title text-[56px]">
        Про госпіталь
      </h2>
      <div className="sLg:flex lg:flex-wrap sLg:flex-wrap lg:flex lg:flex-row-reverse sLg:flex-row-reverse">
        <picture className="sLg:w-full lg:w-full">
          <source
            media="(min-width: 1440px)"
            srcSet={`${hospitalx1} 1x`}
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`${hospitalx3} 1x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${hospital} 1x, ${hospitalx2} 2x`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${hospital} 1x`}
          />
          <img
            src={hospitalx1}
            alt="hospital"
            className="rounded-[16px] mb-[32px] sLg:w-full md:w-[664px] md:h-[347px] lg:mb-[0px] lg:w-full  "
          />
        </picture>
        <div className="sLg:w-full">
          <div className="lg:flex sLg:flex text-column lg:mt-[16px]">
            <span className="lg:mr-[24px] sLg:mr-[24px] text text-[16px] md:text-[18px] wm-[343px] md:w-[664px] text-blue-sky leading-[21px]">
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
            </span>
            {isParagraphVisible && (
              <span className="text text-[16px] md:text-[18px] wm-[343px] md:w-[664px] text-blue-sky leading-[21px]">
                До штату центру входять: 26 клінік (понад 40 відділень), клініка
                лабораторної діагностики, сучасна клініка променевої діагностики
                і терапії, 4 реанімаційні підрозділи (хірургічний,
                нейрохірургічний, кардіологічний та для інфекційних хворих),
                відділення функціональної діагностики і фарм-центр. Шпиталь
                розрахований на 1125 ліжок.
              </span>
            )}
          </div>
            {isMoreVisible && (
            <div
              className="mb-[40px] sm:mb-[40px] flex justify-end cursor-pointer"
              onClick={openModal}>
              <img src={more} alt="more" />
            </div>
          )}
          <MoreModal isVisible={isModalVisible} closeHandler={closeModal} />
        </div>
      </div>
    </section>
  );
};

export default About;
