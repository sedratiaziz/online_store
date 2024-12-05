import React from "react";
import Categ from "../../assets/components/sections/Categ";

import "../../locales/i18n";
import { useTranslation } from "react-i18next";

import Navbar from "../../assets/components/Navbar";

import accInfo from '../../assets/img/accInfo.png'
import delvAddress from '../../assets/img/delvAddress.jpg'
import bio from '../../assets/img/bio.jpg'


export default function Profile() {
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
      
src1={bio}
src2={delvAddress}
src3={accInfo}

        mainTitle="!حسابك، على مزاجك"
        cardTitle1={"بايو"}
        btn1Body={"اختر"}
        btn1Style="bn25w"
        cardTitle2={"عنوان التوصيل"}
        btn2Body={"اختر"}
        btn2Style="bn25turqoise"
        cardTitle3={"معلومات الحساب"}
        btn3Body={"اختر"}
        btn3Style="bn25turqoise"
        link1="/Settings/Bio"
        link2="/Settings/ProfileSetting"
        link3="/Settings/YourName"
        showFavoriteButton={false}
      />
    </>
  );
}
