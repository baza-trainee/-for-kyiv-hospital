import { createContext, useContext, useState } from 'react';

const ThankModalContext = createContext();

export const useThank = () => useContext(ThankModalContext);

export const ThankProvider = ({ children }) => {
  const [isShowThank, setIsShowThank] = useState(false);

  const showModal = () => {
    setIsShowThank(true);
  };

  const closeModal = () => {
    setIsShowThank(false);
  };

  return (
    <ThankModalContext.Provider value={{ isShowThank, showModal, closeModal }}>
      {children}
    </ThankModalContext.Provider>
  );
};
