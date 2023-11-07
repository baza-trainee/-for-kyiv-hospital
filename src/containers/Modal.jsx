const Modal = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-gray-800/50 backdrop-blur-sm flex justify-center md:items-center overflow-y-auto">
      <div className="w-[375px] h-[812px] relative bg-sky-100 py-[80px] flex flex-col items-center">
        <div>
          <span>
            <svg>
              <use></use>
            </svg>
          </span>
        </div>
        <h2 className="text-stone-950 text-5xl font-normal font-['Mona-Lisa'] leading-[57.60px] mb-8">
          Дякуємо за донат!
        </h2>
        <div className="w-[343px] text-center text-stone-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">
          Завдяки тобі військові мають можливість бути здоровими!
        </div>
        <div>
          <img
            srcset="./images/thanks1X.png 1x,
                            ./images/thanks2X.png 2x"
            src="./images/thanks1X.png"
            alt="thank you for donate"
          />
        </div>
        <div className="w-[343px] h-20 p-4 bg-blue-300 rounded-2xl shadow justify-center items-center gap-4 inline-flex">
          <div className="text-stone-950 text-[40px] font-normal font-['Mona-Lisa'] leading-[48px]">
            Повернутися назад
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
