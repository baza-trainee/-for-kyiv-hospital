import { FiExternalLink } from 'react-icons/fi';
import ShareButton from 'components/ShareButton';
import { useShareModal } from '../hooks/ShareContext';
import { facebook } from 'assets/images/ShareModal';
import Logo from 'assets/images/Footer/Logo';

const Footer = () => {
  const { showShareModal } = useShareModal();
  return (
    <>
      <footer className=" bg-footer-color shadow-footerShadow relative ">
        <div className="container py-[32px] mx-auto px-[16px] md:px-[40px] lg:px-[60px] h-full">
          <div className="flex-wrap sLg:flex-nowrap flex md:flex-row  lg:pb-[0px] justify-between ">
            <div className="order-1  text-blue-sky  mb-[24px] md:mb-[0px]">
              <Logo />
              <div className="flex gap-[24px] items-center md:hidden mt-[16px]">
                <div className="text-blue-sky lg:block md:text-lg leading-1.2">
                  Київ, вул. Госпітальна, 18
                </div>
                <a
                  href="https://www.facebook.com/GVKG.KYIV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="facebook" />
                </a>
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

            <div className=" order-3 sLg:order-2 mt-[32px] sLg:mt-[0px] text-blue-sky text-center text-[18px] self-end grow">
              Розробка Baza Trainee Ukraine 2023. Всі права захищені
            </div>

            <div className="order-2 sLg:order-3 flex flex-col items-start  md:gap-[32px] ">
              <div className=" flex flex-col lg:pr-[24px] items-center justify-start">
                <div className="gap-[24px] items-center hidden md:flex">
                  <div className="text-blue-sky lg:block md:text-lg">
                    Київ, вул. Госпітальна, 18
                  </div>
                  <a
                    href="https://www.facebook.com/GVKG.KYIV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="hidden md:flex">
                  <ShareButton />
                </div>
                <button onClick={showShareModal} className="p-[8px] md:hidden">
                  <div className="w-[24px] h-[24px]">
                    <FiExternalLink className="w-[24px] h-[24px] text-blue-sky" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
