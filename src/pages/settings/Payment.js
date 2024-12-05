import React from "react";

import "../../locales/i18n";
import { useTranslation } from "react-i18next";

import Navbar from "../../assets/components/Navbar";
import Categ from "../../assets/components/sections/Categ";

import cash from '../../assets/img/cash.jpg'
import masterCard from '../../assets/img/mastercard.png'
import visa from '../../assets/img/visa.png'

export default function Payment() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar
        logoLink={"/"}
        title={t("BazariaNav")}
        searchPlaceHolder={t("searchPlaceHolder")}
        offers={t("offers")}
        shoppingCart={t("shoppingCart")}
        logIn={t("logIn")}
        settings={t("settings")}
      />

      <br></br>
      <br></br>

      <Categ
        id="what_makes_us_unique"

        src1={cash}
        src2={masterCard}
        src3={visa}

        mainTitle="اختر طريقة الدفع"
        cardTitle1={"كاش"}        
        btn1Body={"اختر"}
        btn1Style="bn25w"
        cardTitle2={"ماستر كارد"}
        
        btn2Body={"اختر"}
        btn2Style="bn25turqoise"
        cardTitle3={"فيزا"}
        
        btn3Body={"اختر"}
        btn3Style="bn25turqoise"
        link1="/Settings/SuccesMessage"
        link2="/Settings/SuccesMessage"
        link3="/Settings/SuccesMessage"
        showFavoriteButton={false}
      />
    </>
  );
}
