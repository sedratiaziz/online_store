import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "../assets/components/Navbar";
import Categ from "../assets/components/sections/Categ";
import Taste from "../assets/components/sections/Taste";

import ribon from "../assets/img/ribon.jpeg";
import royalBlueTshirt from "../assets/img/royalblueTshirt.png";
import airpods from "../assets/img/airpods.jpg";

import asus from "../assets/img/asus_disc.png";
import blender from "../assets/img/blender_disc.jpeg";
import oilFilter from "../assets/img/oil_disc.jpeg";

import rolexYM from "../assets/img/rolexYM.png";
import gaming_chair from "../assets/img/gaming_chair.jpg";
import monitor from "../assets/img/monitor.jpg";

import rayban from "../assets/img/rayban.jpg";
import rubiks from "../assets/img/rubiks.jpg";
import logitech_kbd from "../assets/img/logitech_kbd.jpg";

export default function Offers() {
  const location = useLocation();
  const { t } = useTranslation();
  //IMPORTANT: ADD IN EVERY COMPONENT THE FOLLOWING CODE:
  /* Scroll to the top on component render */
  useEffect(() => {
    window.scrollTo(0, 0);

    // Change the tab title when Home component is loaded
    document.title = "Bazaria | !المكان الأمثل للتسوق";
  }, []);
  /* Scroll to the top on component render */

  useEffect(() => {
    // Scroll to the element specified in the URL hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the '#' character
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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

      <section className="py-5 text-light d-flex align-items-center sec1" id="">
        <div className="container">
          <div className="py-4 d-flex align-items-evenly justify-content-center flex-column pt-5">
            <div
              className="py-3 d-flex align-items-center justify-content-center"
              id="sec1_h1"
            >
              <h1 id="title" className="lh-base text-center">
                ! عروض رائعة لا تقاوم
              </h1>
            </div>

            <div className="text-center py-4 d-none d-sm-block d-sm-none d-md-block">
              <h4 className="px-md-2 px-sm-4 lh-base" id="sec1_h4">
                .سارع قبل نفاد الكمية
              </h4>
            </div>

            <div className="text-center pb-4 pt-2 d-block d-sm-block d-md-none text-center">
              <h4 id="sec1_mobile">.سارع قبل نفاد الكمية</h4>
            </div>

            <div className="pt-5 pt-lg-5 mt-lg-3 pt-md-3 pt-sm-3 text-center">
              <a href="#most_selling_offerpg">
                <button
                  id="salesbtn"
                  className={`bn632-hoversales bn25sales`}
                  style={{ fontSize: "1.1rem" }}
                >
                  تسوق الآن
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Categ
        id="most_selling_offerpg"
        mainTitle={"الأكثر مبيعا"}
        src1={ribon}
        src2={royalBlueTshirt}
        src3={airpods}
        cardTitle1="رايبون 02 أمريكي"
        cardP1="طبقة الحماية من الشمس للسيارة توفر حماية فعالة من الأشعة فوق البنفسجية، وتقلل من حرارة السيارة، مما يزيد من راحة القيادة"
        cardP1_detail="القطع المتبقية: 3 | التقييمات: 10/9.5"
        show_cardP1_detail={true}
        btn1Body={"9.99$"}
        btn1BodyFvrt={"إضافة للمفضلة"}
        btn1Style={"bn25c"}
        btn1StyleFvrt={"bn24"}
        cardTitle2="تي شيرت بولو - أزرق ملكي "
        cardP2=" مصنوع من قماش قطن ناعم وقابل للتنفس. يتميز بقصة تناسب جميع الأجسام، ويأتي بلون أزرق ملكي يتناسب مع جميع المناسبات"
        cardP2_detail="القطع المتبقية: 12 | التقييمات: 10/7"
        show_cardP2_detail={true}
        btn2Body={"34.99$"}
        btn2BodyFvrt={"إضافة للمفضلة"}
        btn2Style={"bn25c"}
        btn2StyleFvrt={"bn24"}
        cardTitle3="أبل إيربودز برو 2"
        cardP3="محرك مخصص بتمدد عالٍ من تصميم Apple مع مضخم صوت مخصص بنطاق ديناميكي عالٍ وميزة إلغاء الضجيج النشط."
        cardP3_detail="القطع المتبقية: 15 | التقييمات: 10/8"
        show_cardP3_detail={true}
        btn3Body="299$"
        btn3BodyFvrt={"إضافة للمفضلة"}
        btn3Style={"bn25c"}
        btn3StyleFvrt={"bn24"}
        link1="/ShoppingCart"
        link2="/ShoppingCart"
        link3="/ShoppingCart"
        showFavoriteButton={true}
      />

      <Taste title={"عروض إضافية"} />

      <Categ
        id="products_offerpg"
        src1={oilFilter}
        src2={blender}
        src3={asus}
        cardTitle1="فلتر زيت تويوتا"
        cardP1="فلتر زيت تويوتا الأصلي توفر حماية فعالة من التآكل، وتوفر تجربة قيادة ليس لها مثيل. بلد المنشأ: الإمارات "
        cardP1_detail="خصم 25% | التقييمات: 10/8.5"
        show_cardP1_detail={true}
        btn1Body={"6.99$"}
        btn1BodyFvrt={"إضافة للمفضلة"}
        btn1Style={"bn25c"}
        btn1StyleFvrt={"bn24"}
        cardTitle2="خلاط كهربائي متنقل"
        cardP2=" مصنوع من معدن المنيوم صلب وقوي. يتميز ببطارية قابلة لإعادة الشحن، ويأتي بألوان مختلفة تتناسب مع جميع الأذواق"
        cardP2_detail="خصم 25% | التقييمات: 10/10"
        show_cardP2_detail={true}
        btn2Body={"14.50$"}
        btn2BodyFvrt={"إضافة للمفضلة"}
        btn2Style={"bn25c"}
        btn2StyleFvrt={"bn24"}
        cardTitle3="لابتوب أسوس زيفايروس"
        cardP3="شاشة 16 بوصة بدقة كيو إتش دي ومعدل تحديث 240 هرتز مع حواف رفيعة جدًا، مزود بإنتل كور آي 7 و إنفيديا آر تي إكس 4060"
        cardP3_detail="خصم 25% | التقييمات: 10/8"
        show_cardP3_detail={true}
        btn3Body="1,925$"
        btn3BodyFvrt={"إضافة للمفضلة"}
        btn3Style={"bn25c"}
        btn3StyleFvrt={"bn24"}
        link1="/concorde"
        link2="/ShoppingCart"
        link3="/ShoppingCart"
        showFavoriteButton={true}
      />

      <Categ
        mainTitle={""}
        src1={rayban}
        src2={rubiks}
        src3={logitech_kbd}
        cardTitle1="نظارة راي بان شمسية"
        cardP1="نظارات راي بان، تصميم كلاسيكي وأنيق مع حماية مثالية من الشمس. خيارك المثالي للأناقة والجودة!"
        cardP1_detail="القطع المتبقية: 3 | التقييمات: 10/9.5"
        show_cardP1_detail={true}
        btn1Body={"49.99$"}
        btn1BodyFvrt={"إضافة للمفضلة"}
        btn1Style={"bn25c"}
        btn1StyleFvrt={"bn24"}
        cardTitle2="مكعب روبيك"
        cardP2="مكعب روبيك التحدي المثالي لتنشيط العقل وتطوير مهارات التفكير. متعة بلا حدود للجميع!"
        cardP2_detail="القطع المتبقية: 12 | التقييمات: 10/7"
        show_cardP2_detail={true}
        btn2Body={"4.99$"}
        btn2BodyFvrt={"إضافة للمفضلة"}
        btn2Style={"bn25c"}
        btn2StyleFvrt={"bn24"}
        cardTitle3="كيبورد لوجيتيك جي برو "
        cardP3="كيبورد ميكانيكي متوفر بتقنية ار جي بي لالوان رائعة، جودة لا توصف وإحساس مدهش أثناء اللعب"
        cardP3_detail="القطع المتبقية: نفدت الكمية | التقييمات: 10/6"
        show_cardP3_detail={true}
        btn3BodyFvrt={"إضافة للمفضلة"}
        btn3Body="99.90$"
        btn3Style={"bn25c"}
        btn3StyleFvrt={"bn24"}
        link1="/concorde"
        link2="/ShoppingCart"
        link3="/ShoppingCart"
        showFavoriteButton={true}
      />

      <Categ
        mainTitle={""}
        src1={rolexYM}
        src2={gaming_chair}
        src3={monitor}
        cardTitle1="رولكس يخت ماستر"
        cardP1="رولكس يخت ماستر، مزيج مثالي من الفخامة والأداء. تصميم أنيق ومتين لعشاق المغامرة!"
        cardP1_detail="القطع المتبقية: 2 | التقييمات: 10/9.5"
        show_cardP1_detail={true}
        btn1Body={"21,000$"}
        btn1BodyFvrt={"إضافة للمفضلة"}
        btn1Style={"bn25c"}
        btn1StyleFvrt={"bn24"}
        cardTitle2="كرسي قيمنق - اصفر"
        cardP2="كرسي ألعاب مريح وعالي الجودة، مصمم لدعمك خلال جلسات اللعب الطويلة. تجربة فاخرة تجمع بين الراحة والأناقة!"
        cardP2_detail="القطع المتبقية: 12 | التقييمات: 10/1"
        show_cardP2_detail={true}
        btn2Body={"34.99$"}
        btn2BodyFvrt={"إضافة للمفضلة"}
        btn2Style={"bn25c"}
        btn2StyleFvrt={"bn24"}
        cardTitle3="شاشة اي او سي - 180 هيرتز - 23 بوصة"
        cardP3="شاشة ألعاب 180 هرتز: أداء سلس وسرعة استجابة فائقة لتجربة لعب احترافية. دقة مذهلة وتصميم عصري!"
        cardP3_detail="القطع المتبقية: نفدت الكمية | التقييمات: 10/8"
        show_cardP3_detail={true}
        btn3Body="299$"
        btn3BodyFvrt={"إضافة للمفضلة"}
        btn3Style={"bn25c"}
        btn3StyleFvrt={"bn24"}
        link1="/concorde"
        link2="/ShoppingCart"
        link3="/ShoppingCart"
        showFavoriteButton={true}
      />
    </>
  );
}
