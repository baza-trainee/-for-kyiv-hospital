import Hero from './Hero';
import ShareButton from '../components/ShareButton';
import Logo from 'assets/images/Header/Logo';
import { useState } from 'react';

import { CgMenuRound } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <header className="absolute top-0 bg-header-color sm:h-[84px] md:h-[90px] w-full">
        <div className="container mx-auto sm:px-[16px] md:px-[40px] lg:px-[60px] flex h-full justify-between items-center">
          <Logo />

          {/* Deskop */}
          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-[40px]">
                <li>
                  <a
                    className="text text-[24px] text-blue-sky font-medium leading-1.2"
                    href="#goal"
                  >
                    Мета
                  </a>
                </li>
                <li>
                  <a
                    className="text text-[24px] text-blue-sky font-medium leading-1.2"
                    href="#about"
                  >
                    Про Госпіталь
                  </a>
                </li>
                <li>
                  <a
                    className="text text-[24px] text-blue-sky font-medium leading-1.2"
                    href="#needs"
                  >
                    Потреби
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* ------ */}

          <div className=" hidden md:block md:mr-[166px] lg:mr-[0px]">
            <ShareButton />
          </div>

          <button
            type="button"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className="inline-block w-[40px] h-[40px] lg:hidden"
          >
            <CgMenuRound className="w-full h-full text-blue-sky" />
          </button>
        </div>
        {/* Menu */}
        <div
          className={`lg:hidden absolute top-0 left-0 md:top-[90px] w-full h-[252px] md:h-[231px] px-[12px] py-[28px] md:p-[32px] bg-blue-sky rounded-2xl transition-all duration-200
            `}
          style={{
            // opacity: isMenu ? 1 : 0,
            // transform: isMenu ? 'scale(1)' : 'scale(0.5)',
            top: isMenu ? 0 : -252,
          }}
        >
          <button
            type="button"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className="absolute top-[10px] right-[10px] w-[35px] h-[35px]"
          >
            <AiOutlineCloseCircle className="w-[35px] h-[35px] text-black" />
          </button>
          <nav className="w-[200px] mx-auto text-center">
            <ul className="flex flex-col gap-[24px] md:gap-[40px] mb-[24px] md:mb-[0px] ">
              <li>
                <a
                  className="text text-[20px] md:text[24px] font-medium leading-1.2"
                  href="#goal"
                >
                  Мета
                </a>
              </li>
              <li>
                <a
                  className="text text-[20px] md:text[24px] font-medium leading-1.2"
                  href="#about"
                >
                  Про Госпіталь
                </a>
              </li>
              <li>
                <a
                  className="text text-[20px] md:text[24px] font-medium leading-1.2"
                  href="#needs"
                >
                  Потреби
                </a>
              </li>
            </ul>
            <div className="md:hidden w-[160px] mx-auto">
              <ShareButton />
            </div>
          </nav>
        </div>
        {/* Test */}
        <div
          className="hidden md:block lg:hidden absolute z-50 top-0 bg-red-400 h-full rounded-2xl transition-all duration-200"
          style={{ width: isMenu ? '100%' : '10%', right: isMenu ? 0 : 100 }}
        >
          <button
            type="button"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className="absolute top-[10px] right-[10px] w-[35px] h-[35px] lg:hidden"
          >
            <AiOutlineCloseCircle className="w-full h-full text-blue-sky" />
          </button>
        </div>
      </header>
      <Hero />
    </>
  );
};

export default Header;
