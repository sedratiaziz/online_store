import React from 'react'
import Categ from '../assets/components/sections/Categ'

import '../locales/i18n';
import { useTranslation } from 'react-i18next';

import profilePic from '../assets/img/profile.png'
import OrderTracking from '../assets/img/Mohamed_a_Rahman.png'
import language from '../assets/img/language.png'
import payment from '../assets/img/payment.png'
import Notifications from '../assets/img/bell.png'
import Dashboard from '../assets/img/sellerDashboard.svg'
import Navbar from '../assets/components/Navbar'

export default function Settings() {
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

        src1={payment}
        src2={Notifications}
        src3={Dashboard}

        cardTitle1={t("payment")}
        cardP1={t("paymentMethodsDescription")}
        btn1Body={t("goToSetting")}
        btn1Style="bn25c"

        cardTitle2={t("notifications")}
        cardP2={t("notificationsDescription")}
        btn2Body={t("goToSetting")}
        btn2Style="bn25red"

        cardTitle3={t("dashboard")}
        cardP3={t("dashboardDescription")}
        btn3Body={t("goToSetting")}
        btn3Style="bn25l"

        link1="/Settings/Payment"
        link2="/Settings/Notifications"
        link3="/Settings/Dashboard"
        showFavoriteButton={false}
      />
      <Categ 
        id="what_makes_us_unique"      
      
        src1={profilePic}
        src2={OrderTracking}
        src3={language}

        cardTitle1={t("profile")}
        cardP1={t("profileDescription")}
        btn1Body={t("goToSetting")}
        btn1Style="bn25c"

        cardTitle2={t("orderHistory")}
        cardP2={t("orderHistoryDescription")}
        btn2Body={t("goToSetting")}
        btn2Style="bn25w"

        cardTitle3={t("language")}
        cardP3={t("languageDescription")}
        btn3Body={t("goToSetting")}
        btn3Style="bn25turqoise"

        link1="/Settings/Profile"
        link2="/Settings/Orders"
        link3="/Settings/Language"
        showFavoriteButton={false}
      /> 
      
    </>     
  )
}
