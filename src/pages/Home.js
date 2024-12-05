import React, { useEffect } from "react";
import "../App.css";
import "../assets/fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

/*Language switching*/
import "../locales/i18n";
import { useTranslation } from "react-i18next";

import useScrollAnimation from "../assets/Hooks/useScrollAnimation";

import Header from "../assets/components/Header";
import Navbar from "../assets/components/Navbar";
import Welcome from "../assets/components/sections/Welcome";
import Social from "../assets/components/sections/Social";
import Categ from "../assets/components/sections/Categ";
import Taste from "../assets/components/sections/Taste";

import bh from "../assets/img/bh.jpg";
import formula from "../assets/img/formula.jpg";
import ai from "../assets/img/ai.jpeg";
import ribon from "../assets/img/ribon.jpeg";
import royalBlueTshirt from "../assets/img/royalblueTshirt.png";
import airpods from "../assets/img/airpods.jpg";
import StickySliderButton from "../assets/components/StickySliderButton";
import Footer from "../assets/components/Footer";

const arrowElement = (
  <div className="d-flex flex-column justify-content-between pt-5 d-none d-sm-block d-sm-none d-md-block">
    <div className="d-flex flex-column text-center pt-5">
      <FontAwesomeIcon
        className="arrw"
        id="arrw_dwn"
        icon={faAngleDoubleDown}
        size="2x"
      />
    </div>
  </div>
);

const arrowMobileElement = (
  <div className="d-flex flex-column justify-content-between pt-5 d-block d-sm-block d-md-none text-center">
    <div className="d-flex flex-column text-center pt-4">
      <FontAwesomeIcon
        className="arrw"
        id="arrw_dwn"
        icon={faAngleDoubleDown}
        size="2x"
      />
    </div>
  </div>
);

function Home() {
  const { t } = useTranslation();

  // Scroll to the top on component render
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t("pageTitle");
  }, [t]);

  useScrollAnimation();

  return (
    <>
      <Header />
      <Navbar
        title={t("BazariaNav")}
        searchPlaceHolder={t("searchPlaceHolder")}
        offers={t("offers")}
        shoppingCart={t("shoppingCart")}
        logIn={t("logIn")}
        settings={t("settings")}
      />
      <Welcome
        id="think_creative"
        title={t("shopSmart")}
        titleSpan={t("BazariaTitle")}
        subTitle={t("everythingUnderOneRoof")}
        subTitleMobile={t("everythingUnderOneRoof")}
        arrow={arrowElement}
        arrowMobile={arrowMobileElement}
      />

      <Categ
        id="what_makes_us_unique"
        mainTitle={t("whatMakesUsUnique")}
        src1={bh}
        src2={formula}
        src3={ai}
        cardTitle1={t("supportLocalProducts")}
        cardP1={t("localProductSupportDescription")}
        btn1Body={t("awesome")}
        btn1Style="bn25c"
        cardTitle2={t("fastDeliveryAnywhere")}
        cardP2={t("fastDeliveryDescription")}
        btn2Body={t("really")}
        btn2Style="bn25w"
        cardTitle3={t("aiShopping")}
        cardP3={t("aiShoppingDescription")}
        btn3Body={t("tryIt")}
        btn3Style="bn25l"
        link1="/"
        link2="/"
        link3="/"
        showFavoriteButton={false}
      />

      <Taste title={t("productAndCategories")} />

      <Social
        id="products_and_categories"
        // products_offerpg

        //car parts
        firstCardTitle={t("firstCardTitle")}
        firstCardButton={t("firstCardButton")}
        firstCardLink={"/Offers#products_offerpg"}
        // electronics
        secondCardTitle={t("secondCardTitle")}
        secondCardButton={t("secondCardButton")}
        secondCardLink={"/Offers#rolx_gmng_mntr"}
        // clothes
        thirdCardTitle={t("thirdCardTitle")}
        thirdCardButton={t("thirdCardButton")}
        thirdCardLink={"/Offers#most_selling_offerpg"}
        // new arrivals
        fourthCardTitle={t("fourthCardTitle")}
        fourthCardButton={t("fourthCardButton")}
        fourthCardMdTitle={t("fourthCardMdTitle")}
        fourthCardMdButton={t("fourthCardMdButton")}
        fourthCardLink={"/Offers#new_arrival"}
      />

      <Categ
        id="most_selling"
        mainTitle={t("mostSelling")}
        src1={ribon}
        src2={royalBlueTshirt}
        src3={airpods}
        cardTitle1={t("product1Title")}
        cardP1={t("product1Description")}
        cardP1_detail={t("product1Details")}
        show_cardP1_detail={true}
        btn1Body="9.99$"
        btn1BodyFvrt={t("addToFavorites")}
        btn1Style="bn25c"
        btn1StyleFvrt="bn24"
        cardTitle2={t("product2Title")}
        cardP2={t("product2Description")}
        cardP2_detail={t("product2Details")}
        show_cardP2_detail={true}
        btn2Body="34.99$"
        btn2BodyFvrt={t("addToFavorites")}
        btn2Style="bn25c"
        btn2StyleFvrt="bn24"
        cardTitle3={t("product3Title")}
        cardP3={t("product3Description")}
        cardP3_detail={t("product3Details")}
        show_cardP3_detail={true}
        btn3Body="299$"
        btn3BodyFvrt={t("addToFavorites")}
        btn3Style="bn25c"
        btn3StyleFvrt="bn24"
        link1="/concorde"
        link2="/budget-airlines"
        link3="/flight-record"
        showFavoriteButton={true}
      />

      <StickySliderButton />

      <Footer />
    </>
  );
}

export default Home;
