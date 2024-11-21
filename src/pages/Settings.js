import React from 'react'
import Categ from '../assets/components/sections/Categ'

import '../locales/i18n';
import { useTranslation } from 'react-i18next';

import profilePic from '../assets/img/profile.png'
import OrderTracking from '../assets/img/Mohamed_a_Rahman.png'
import language from '../assets/img/language.png'
import payment from '../assets/img/payment.png'
import Notifications from '../assets/img/bell.webp'
import Dashboard from '../assets/img/sellerDashboard.svg'

export default function Settings() {
  const { t } = useTranslation();
  
  return (
    <>
      <Categ 
        id="what_makes_us_unique"      
      
        src1={profilePic}
        src2={OrderTracking}
        src3={language}

        cardTitle1={t("Proqfile")}
        cardP1={t("")}
        btn1Body={t("awesome")}
        btn1Style="bn25c"

        cardTitle2={t("Order History & Tracking")}
        cardP2={t("")}
        btn2Body={t("really")}
        btn2Style="bn25w"

        cardTitle3={t("Language")}
        cardP3={t("aiShoppingDescription")}
        btn3Body={t("tryIt")}
        btn3Style="bn25l"

        link1="/"
        link2="/"
        link3="/"
        showFavoriteButton={false}
      /> 
      <Categ 
        id="what_makes_us_unique"      

        src1={payment}
        src2={Notifications}
        src3={Dashboard}

        cardTitle1={t("Payment Methods")}
        cardP1={t("localProductSupportDescription")}
        btn1Body={t("awesome")}
        btn1Style="bn25c"

        cardTitle2={t("Notifications")}
        cardP2={t("fastDeliveryDescription")}
        btn2Body={t("really")}
        btn2Style="bn25w"

        cardTitle3={t("Seller Dashboard")}
        cardP3={t("aiShoppingDescription")}
        btn3Body={t("tryIt")}
        btn3Style="bn25l"

        link1="/"
        link2="/"
        link3="/"
        showFavoriteButton={false}
      />
    </>     
  )
}
