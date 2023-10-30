const Modal = ({ children }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-gray-800/50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-56 h-1/5 md:w-2/4 inset-x-2/4 inset-y-2/4 translate-y-[-50%] bg-white">
        <div className="absolute py-5 px-7 h-1/5 flex justify-center items-center shadow-slate-200 flex-col">
          <botton className="absolute top-4 w-7 h-7 flex justify-center items-center cursor-pointer">
            <span className="block">&#10006;</span>
          </botton>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
