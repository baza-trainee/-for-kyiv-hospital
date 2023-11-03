import '../index.css';
import { goal, goalx2 } from '../assets/images/Goal';
import { useThank } from 'hooks/ThankContext';

const Goal = () => {
  const { showModal } = useThank();
  return (
    <div className=" container mx-auto pt-[60px] px-[16px] md:pt-[102px] md:px-[40px] lg:pt-[80px] lg:px-[60px]">
      <h2 className=" text-sky-100 text-center md:text-start text-[56px]   leading-[67.20px] mb-[24px] md:mb-[32px]  lg:mb-[24px] title ">
        Мета
      </h2>
      <div className="lg:flex">
        <picture>
          <source srcSet={`${goal} 1x, ${goalx2} 2x`} />

          <img
            src={goal}
            alt="hospital team"
            width="343"
            height="257"
            className="rounded-[16px] mb-[32px] md:w-[664px] md:h-[416px] lg:mb-[0px] lg:w-[648px] lg:mr-[24px]"
          />
        </picture>

        <div>
          <p className=" text text-[16px] md:text-[18px] wm-[343px] md:w-[664px] md:h-[176px] lg:w-[648px] text-sky-100 text-base font-normal  leading-tight  mb-[40px] lg:mb-[56px]">
            Національний військово-медичний клінічний центр постійно потребує
            антибіотиків та протизапальних ліків для боротьби з інфекціями і
            запаленнями, які можуть виникнути після поранень у військових.
            <br /> <br />
            Тому цю сторінку створено задля збору коштів на потреби шпиталя.
            Адже його працівники мужньо стоять на варті життя та здоров’я наших
            захисників.
          </p>
          <button
            onClick={showModal}
            className="w-[100%] md:w-[312px] h-[88px] p-4 bg-blue-200 hover:bg-blue-300 focus:bg-blue-300  rounded-2xl shadow justify-center items-center gap-2 inline-flex  text-stone-950 text-[40px] font-normal title cursor-pointer"
          >
            Зробити донат
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
