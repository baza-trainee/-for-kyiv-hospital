import {
  close,
  facebook,
  linkedin,
  telegram,
  viber,
} from 'assets/images/ShareModal';
import { useShareModal } from '../hooks/ShareContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  ViberShareButton,
} from 'react-share';

const ShareModal = () => {
  const { closeShareModal } = useShareModal(); // eslint-disable-next-line
  const [isCopied, setIsCopied] = useState(false);

  const notify = () =>
    toast.success('Посилання на сайт скопійоване', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  // const pageLink = ' після деплою тут буде посилання';
  const pageLink =
    'https://www.figma.com/file/FNGAvyZ7AJjIWWvfmMoHh7/%D0%97%D0%B1%D1%96%D1%80_%D0%B3%D0%BE%D1%81%D0%BF%D1%96%D1%82%D0%B0%D0%BB%D1%8C-(Copy)?node-id=201%3A1497&mode=dev';
  const title = 'Зроби внесок у Перемогу!';
  const closeOnBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeShareModal();
    }
  };

  return (
    <div
      onClick={closeOnBackdropClick}
      className="fixed w-full h-full top-0 left-0 bg-gray-800/50 backdrop-blur-sm flex justify-center  overflow-y-auto "
    >
      <div className="w-[375px] h-[812px] md:w-[744px] md:h-[664px] sLg:w-[1044px] sLg:h-[665px] bg-blue-grey relative px-[16px] bg-customModal  bg-contain bg-no-repeat sLg:rounded-2xl my-auto">
        <span className="absolute top-[32px] right-[16px] md:right-[40px] sLg:right-[60px] cursor-pointer">
          <img
            className="w-[32px]"
            src={close}
            alt="close"
            onClick={closeShareModal}
          />
        </span>
        <ul className="mt-[235px] md:mt-[72px] flex flex-col gap-[32px] ">
          <li className="md:flex ">
            <FacebookShareButton
              url={pageLink}
              quote={title}
              className="md:mx-auto w-full"
            >
              <div className="w-full h-[80px] md:w-[555px] sLg:w-[541px] md:mx-auto px-[40px]   rounded-2xl shadow-shareModalButtonShadow border-[3px] border-dark-blue justify-center items-center gap-[24px] inline-flex font-medium  text-white text text-[20px] hover:bg-active-share-btn focus:bg-active-share-btn transition-all hover:border-0 focus:border-0">
                Поділитися y
                <div>
                  <img src={facebook} alt="facebook" className="w-[32px]" />
                </div>
              </div>
            </FacebookShareButton>
          </li>
          <li className="md:flex ">
            <LinkedinShareButton
              url={pageLink}
              quote={title}
              className="md:mx-auto w-full"
            >
              <div className="w-full h-[80px] md:w-[555px] md:mx-auto px-[40px]  rounded-2xl shadow-shareModalButtonShadow border-[3px] border-dark-blue justify-center items-center gap-[24px] inline-flex font-medium  text-white text text-[20px] hover:bg-active-share-btn focus:bg-active-share-btn transition-all hover:border-0 focus:border-0">
                Поділитися y
                <div>
                  <img src={linkedin} alt="facebook" className="w-[32px]" />
                </div>
              </div>
            </LinkedinShareButton>
          </li>
          <li className="md:flex ">
            <TelegramShareButton
              url={pageLink}
              quote={title}
              className="md:mx-auto w-full"
            >
              <div className="w-full h-[80px] md:w-[555px] md:mx-auto px-[40px] rounded-2xl shadow-shareModalButtonShadow border-[3px] border-dark-blue justify-center items-center gap-[24px] inline-flex font-medium  text-white text text-[20px] hover:bg-active-share-btn focus:bg-active-share-btn transition-all hover:border-0 focus:border-0">
                Поділитися y
                <div>
                  <img src={telegram} alt="facebook" className="w-[32px]" />
                </div>
              </div>
            </TelegramShareButton>
          </li>
          <li className="md:flex ">
            <ViberShareButton
              url={pageLink}
              quote={title}
              className="md:mx-auto w-full"
            >
              <div className="w-full h-[80px] md:w-[555px] md:mx-auto px-[40px]   rounded-2xl shadow-shareModalButtonShadow border-[3px] border-dark-blue justify-center items-center gap-[24px] inline-flex font-medium  text-white text text-[20px] hover:bg-active-share-btn focus:bg-active-share-btn transition-all hover:border-0 focus:border-0">
                Поділитися y
                <div>
                  <img src={viber} alt="facebook" className="w-[32px]" />
                </div>
              </div>
            </ViberShareButton>
          </li>
          <li className="md:flex ">
            <CopyToClipboard
              text={pageLink}
              onCopy={() => {
                setIsCopied(true);
              }}
            >
              <button
                type="button"
                onClick={notify}
                className="w-full h-[80px] md:w-[555px] md:mx-auto    rounded-2xl shadow-shareModalButtonShadow border-[3px] border-dark-blue justify-center items-center gap-[24px] inline-flex font-medium  text-white text text-[20px] hover:bg-active-share-btn focus:bg-active-share-btn transition-all hover:border-0 focus:border-0"
              >
                Скопіювати посилання на сайт
              </button>
            </CopyToClipboard>
          </li>
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ShareModal;
