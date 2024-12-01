import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'; // Create and import this CSS file

const StickySliderButton = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <>
      <button className="cartBtn" onClick={toggleSlider}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <div className={`slider ${isSliderOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSlider}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
        <center><h1>محتوى العربة</h1></center>
      </div>
    </>
  );
};

export default StickySliderButton;
