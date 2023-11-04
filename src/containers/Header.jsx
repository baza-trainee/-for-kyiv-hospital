import Hero from './Hero';
import { CgMenuRound } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import Logo from 'assets/images/Header/Logo';

const Header = () => {
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

          {/* Tablet */}
          <button className="hidden md:flex items-center justify-center w-[200px] h-full px-[18px] md:mr-[166px] lg:mr-[0px] rounded-b-2xl shadow-donateBoxShadow bg-blue-sky hover:bg-active-btn focus:bg-active-btn transition-all">
            <p className="title text-[24px] leading-[18px] tracking-wider">
              Поділитися з друзями
            </p>
            <FiExternalLink className="w-[24px] h-[24px]" />
          </button>
          {/* ------- */}

          <button className="sm:inline-block w-[40px] h-[40px] lg:hidden">
            <CgMenuRound className="w-full h-full text-blue-sky" />
          </button>
        </div>
        {/* Menu */}
        <div className="lg:hidden absolute right-0 sm:top-[84px] md:top-[90px] w-[200px] md:w-[241px] h-[252px] md:h-[231px] px-[12px] py-[28px] md:p-[32px] bg-blue-sky rounded-2xl">
          <nav>
            <ul className="flex flex-col gap-[24px] md:gap-[40px]">
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
              <li>
                <a
                  className="flex md:hidden items-center justify-center w-fit title text-[24px] leading-[18px] tracking-wider"
                  href="/"
                >
                  <span>Поділитися з друзями</span>
                  <span>
                    <FiExternalLink className="w-[30px] h-[30px]" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Hero />
    </>
  );
};

export default Header;
