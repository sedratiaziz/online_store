import React from 'react'
import Categ from '../../assets/components/sections/Categ'

import '../../locales/i18n';
import { useTranslation } from 'react-i18next';

import france from '../../assets/img/france.png'
import uk from '../../assets/img/uk.png'
import ksa from '../../assets/img/ksa.png'

import Navbar from '../../assets/components/Navbar'

export default function Language() {
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

      <Categ 
        id="what_makes_us_unique"      
      
        src1={france}
        src2={uk}
        src3={ksa}

        cardTitle1={t("french")}
        btn1Body={t("goToSetting")}
        btn1Style="bn25c"

        cardTitle2={t("english")}
        btn2Body={t("goToSetting")}
        btn2Style="bn25c"

        cardTitle3={t("arabic")}
        btn3Body={t("goToSetting")}
        btn3Style="bn25c"

        link1="/"
        link2="/"
        link3="/"
        showFavoriteButton={false}
      /> 
    </>     
  )
}
