import React, { useState } from 'react';
import { BiChevronUp } from 'react-icons/bi';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className={`fixed bottom-6 right-7 ${showButton ? 'block' : 'hidden'}`}>
      <button
        onClick={scrollToTop}
        className="bg-blue-sky text-blue-300 p-2 rounded-full">
        <BiChevronUp size={34} />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
