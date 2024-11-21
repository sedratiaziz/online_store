import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.hidden');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
};

export default useScrollAnimation;
