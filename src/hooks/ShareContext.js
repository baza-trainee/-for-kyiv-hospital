import { createContext, useContext, useEffect, useState } from 'react';

const ShareModalContext = createContext();

export const useShareModal = () => useContext(ShareModalContext);

export const ShareProvider = ({ children }) => {
  const [isShowShareModal, setIsShowShareModal] = useState(false);

  const backdrop = document.querySelector('#backdrop');

  function showShareModal() {
    setIsShowShareModal(true);
    document.body.style.overflow = 'hidden';
  }

  function closeShareModal() {
    setIsShowShareModal(false);
    document.body.style.overflow = 'auto';
  }

  function checkButton(event) {
    if (event.code === 'Escape') {
      setIsShowShareModal(false);
    }
  }

  useEffect(() => {
    if (isShowShareModal) {
      document.body.addEventListener('keyup', event => checkButton(event));
    }
    return () => {
      window.removeEventListener('keyup', event => checkButton(event));
    };
  }, [isShowShareModal, backdrop]);

  return (
    <ShareModalContext.Provider
      value={{ isShowShareModal, showShareModal, closeShareModal }}
    >
      {children}
    </ShareModalContext.Provider>
  );
};
