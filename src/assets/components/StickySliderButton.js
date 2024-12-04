import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../App.css"; // Create and import this CSS file
import CartItems from "./CartItems";

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
      <div className={`slider ${isSliderOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSlider}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
        <CartItems
          id="new_arrival"
          mainTitle="سلتك"
          cardTitle3="عدة المساعدة في الطريق"
          cardP3_detail="عدد القطع:  | رسوم الشحن: $6.89"
          show_cardP3_detail={true}
          btn3Body="49.99$"
          btn3BodyFvrt={"إضافة للمفضلة"}
          btn3Style={"bn24"}
          btn3StyleFvrt={"bn24"}
          link3=""
          cardTitle4="رايبون 02 أمريكي"
          cardP4_detail="عدد القطع:  | رسوم الشحن: لا يوجد"
          show_cardP4_detail={true}
          btn4Body="9.99$"
          btn4BodyFvrt={"إضافة للمفضلة"}
          btn4Style={"bn24"}
          btn4StyleFvrt={"bn24"}
          link4=""
          continueButton={"المتابعة"}
          showHomeButton={"الصفحة الرئيسية"}
          showFavoriteButton={true}
        />
      </div>
    </>
  );
};

export default StickySliderButton;
