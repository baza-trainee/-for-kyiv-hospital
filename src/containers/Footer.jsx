import Logo from 'assets/images/Footer/Logo';
import '../index.css';
import { FiExternalLink } from 'react-icons/fi';
import Facebook from 'assets/images/Footer/Facebook';

const Footer = () => {
  return (
    <>
      <footer className="pt-[32px] pb-[106px] md:pb-[82px] lg:pb-[46px] bg-footer-color shadow-footerShadow relative ">
        <div className="container mx-auto px-[16px] md:px-[40px] lg:px-[60px] h-full">
          <div className="flex md:flex-row  lg:pb-[0px] justify-between ">
            <div className=" text-blue-sky  mb-[24px] md:mb-[0px]">
              <Logo />
              <div className="flex gap-[24px] items-center md:hidden mt-[16px]">
                <div className="text-blue-sky lg:block md:text-lg leading-1.2">
                  Київ, вул. Госпітальна, 18
                </div>
                <Facebook />
              </div>

              <ul className="footer-menu flex gap-[24px] items-start md:items-center md:mt-[32px] sm:flex-col text-center mt-[20px] ">
                <li>
                  <a
                    href="#goal"
                    className="md:text-[24px] text-[20px] font-medium"
                  >
                    Мета
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="md:text-[24px] text-[20px] font-medium"
                  >
                    Про госпіталь
                  </a>
                </li>
                <li>
                  <a
                    href="#needs"
                    className="md:text-[24px] text-[20px] font-medium"
                  >
                    Потреби
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start  md:gap-[32px] ">
              <div className=" flex flex-col lg:pr-[24px] items-center justify-start">
                <div className="gap-[24px] items-center hidden md:flex">
                  <div className="text-blue-sky lg:block md:text-lg">
                    Київ, вул. Госпітальна, 18
                  </div>
                  <Facebook />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="p-[8px] flex md:px-[18px] md:items-center mdjustify-center md:w-[200px] md:h-[90px] md:rounded-b-2xl md:shadow-donateBoxShadow md:bg-blue-sky md:hover:bg-active-btn md:focus:bg-active-btn md:transition-all ">
                  <p className=" hidden md:flex title text-[24px] leading-[18px] tracking-wider">
                    Поділитися з друзями
                  </p>
                  <FiExternalLink className="w-[24px] h-[24px] text-blue-sky md:text-black" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-blue-sky text-center md:w-full absolute bottom-[32px] lg:bottom-[56px] right-[50%] translate-x-[50%]">
            Розробка Baza Trainee Ukraine 2023. Всі права захищені
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
