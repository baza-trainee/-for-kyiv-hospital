import React from 'react';
import { moreclose } from 'assets/images/About';

const ModalContent = ({ isVisible, closeHandler }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
      <div className="w-[419px] bg-cyan-950 px-[38px]">
        <span className="relative">
          <img src={moreclose} alt="close" className="cursor-pointer" onClick={closeHandler} />
        </span>
        <p className="mb-[40px] mt-[124px] text text-[16px] text-sky-100 text-base font-normal leading-tight">
          До штату центру входять: 26 клінік (понад 40 відділень), клініка лабораторної діагностики, сучасна клініка
          променевої діагностики і терапії, 4 реанімаційні підрозділи (хірургічний, нейрохірургічний, кардіологічний та для
          інфекційних хворих), відділення функціональної діагностики і фарм-центр. Шпиталь розрахований на 1125 ліжок.
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
