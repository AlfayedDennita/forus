import React, { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', handleButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleButtonVisibility);
    };
  }, []);

  const onButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      type="button"
      className={`fixed right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-400 text-3xl text-white transition-all hover:bg-primary-500 ${
        isVisible ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      onClick={onButtonClick}
      title="Scroll to Top"
    >
      <IoArrowUp /> <span className="sr-only">Scroll to Top</span>
    </button>
  );
}

export default ScrollToTopButton;
