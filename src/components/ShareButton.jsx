import { FiExternalLink } from 'react-icons/fi';

const ShareButton = () => {
  return (
    <>
      <button className=" flex items-center justify-center w-[160px]  md:w-[200px] h-[40px] md:h-[90px]  md:px-[18px]  md:rounded-b-2xl md:shadow-donateBoxShadow bg-blue-sky hover:bg-active-btn focus:bg-active-btn transition-all">
        <p className="title text-start text-[24px] leading-[18px] tracking-wider ">
          Поділитися з друзями
        </p>
        <div className="w-[24px] h-[24px]">
          <FiExternalLink className="w-[24px] h-[24px]" />
        </div>
      </button>
    </>
  );
};

export default ShareButton;
