import '../index.css';
import { goal, goalx2 } from '../assets/images/Goal';

const Goal = () => {
  return (
    <div
      id="goal"
      className=" container mx-auto pt-[60px] px-[16px] md:pt-[102px] md:px-[40px] sLg:pt-[80px] sLg:px-[62px] lg:px-[60px]"
    >
      <h2 className=" text-sky-100 text-center md:text-start text-[56px]   leading-[67.20px] mb-[24px] md:mb-[32px]  sLg:mb-[32px] lg:mb-[24px] title ">
        Мета
      </h2>
      <div className="sLg:flex">
        <picture>
          <source srcSet={`${goal} 1x, ${goalx2} 2x`} />

          <img
            src={goal}
            alt="hospital team"
            width="343"
            height="257"
            className="rounded-[16px] mb-[32px] md:w-[664px] md:h-[416px] sLg:mb-[0px] sLg:w-[568px] lg:w-[648px] sLg:mr-[24px]"
          />
        </picture>

        <div>
          <p className=" text text-[16px] md:text-[18px] wm-[343px] md:w-[664px] md:h-[176px] sLg:w-[568px] lg:w-[648px] text-sky-100 text-base font-normal  leading-tight ">
            Національний військово-медичний клінічний центр постійно потребує
            антибіотиків та протизапальних ліків для боротьби з інфекціями і
            запаленнями, які можуть виникнути після поранень у військових.
            <br /> <br />
            Тому цю сторінку створено задля збору коштів на потреби шпиталя.
            Адже його працівники мужньо стоять на варті життя та здоров’я наших
            захисників.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
