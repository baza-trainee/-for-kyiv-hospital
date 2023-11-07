import Hero from './Hero';
import ShareButton from '../components/ShareButton';
import Logo from 'assets/images/Header/Logo';
import { useState } from 'react';

import { CgMenuRound } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

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
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className="sm:inline-block w-[40px] h-[40px] lg:hidden"
          >
            {isMenu ? (
              <AiOutlineClose className="w-full h-full text-blue-sky" />
            ) : (
              <CgMenuRound className="w-full h-full text-blue-sky" />
            )}
          </button>
        </div>
        {/* Menu */}

        <div
          className={`lg:hidden absolute right-0 sm:top-[84px] md:top-[90px] w-[200px] md:w-[241px] h-[252px] md:h-[231px] px-[12px] py-[28px] md:p-[32px] bg-blue-sky rounded-2xl transition-all duration-200 ease-linear
            `}
          style={{
            opacity: isMenu ? 1 : 0,
            transform: isMenu ? 'scale(1)' : 'scale(0.5)',
          }}
        >
          <nav className="w-[200px]">
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
            <div className=" md:hidden  ">
              <ShareButton />
            </div>
          </nav>
        </div>
      </header>
      <Hero />
    </>
  );
};

export default Header;
