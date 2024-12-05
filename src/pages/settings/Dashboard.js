import React from 'react'
import { Link } from 'react-router-dom';

import revenue from '../../assets/img/revenue.webp'
import reviews from '../../assets/img/reviews.jpg'
import revenueDollar from '../../assets/img/revenue_dollar.avif'

import styles from '../../assets/css/LogIn.module.css'

import '../../locales/i18n';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import Navbar from '../../assets/components/Navbar'
import Welcome from '../../assets/components/sections/Welcome';
import CategWithoutBtn from '../../assets/components/sections/CategWithoutBtn';

export default function Dashboard() {
  const { t } = useTranslation();
  
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
<Welcome
        id="think_creative"
        title={"تصفح أداء منتجاتك"}        
        subTitle={"🤖 معزز بالذكاء الاصطناعي"}
        subTitleMobile={"🤖 معزز بالذكاء الاصطناعي"}
        arrow={arrowElement}
        arrowMobile={arrowMobileElement}
      />
<CategWithoutBtn
        id="what_makes_us_unique"
      
src1={revenue}
src2={reviews}
src3={revenueDollar}

        mainTitle="في آخر 3 أشهر"
        cardTitle1={"زيادة 23.6% في المشاهدات"}
        cardP1={"زيادة رائعة مقارنة بالفترة الماضية، حيث كانت 11%، لمتابعة الزيادة والإنتاجية ينصح ذكاء بازاريا الاصطناعي بإنشاء إعلانات عبر بازاريا تلفت انتباه العملاء"}
        btn1Body={t("awesome")}
        btn1Style="bn25c"
        cardTitle2={t("حصلت على 518 تقييم")}
        cardP2={"معظم التقييمات إيجابية، أُعجب الزبائن كثيرا بطريقة وصفك للمنتجات، خصوصا في منتج ساعة رولكس ومنتج رايبون 02 أمريكي"}
        btn2Body={t("really")}
        btn2Style="bn25w"
        cardTitle3={t("صافي الأرباح $5035.49")}
        cardP3={"زيادة الأرباح في الربع الثاني من عام الفين واربعة وعشرين بنسبة خمسة وثلاثين بالمئة، ويتوقع الذكاء الاصطناعي زيادة محتملة باربعين بالمئة"}
        btn3Body={t("tryIt")}
        btn3Style="bn25l"       
        showFavoriteButton={false}
      />


<section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              
            <div className={styles.LogIn__contact_box}>                            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>المخزون الحالي</h2>
                    <form data-netlify="true">
                        
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="شاشة اي او سي: نفدت الكمية، قم بإعادة التخزين"
                            readOnly
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="نظارة راي بان الشمسية: 3 قطع فقط، قم بإعادة التخزين"
                            readOnly
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="أبل إيربودز برو: 15 قطعة "
                            readOnly
                        />
                        
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="تي شيرت بولو أزرق ملكي: 12 قطعة"
                            readOnly
                        />                      
                       
                                               
                    </form>
                   
                </div>
            </div>
        </section>



        <section
      className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}
    >
      <div className={styles.LogIn__contact_box}>
        <div className={styles.LogIn__right}>
          <h2 className={styles.LogIn__h2}>منتج جديد؟</h2>
          <form data-netlify="true">
            <input
              type="text"
              name="name"
              className={styles.LogIn__field}
              placeholder="الإسم المنتج"
              required
            />
            <input
              type="text"
              name="name"
              className={styles.LogIn__field}
              placeholder="الوصف"
              required
            />
            <input
              type="text"
              name="email"
              className={styles.LogIn__field}
              placeholder="صنف المنتج: ملابس، الكترونيات، ..الخ"
              required
            />            
            <input
              type="text"
              name="email"
              className={styles.LogIn__field}
              placeholder="السعر"
              required
            />            
            <Link to={"/Settings/SuccesMessagePrdct"}>
              <button className={`${styles.LogIn__btn1} mt-3`}>
                إضافة المنتج
              </button>
            </Link>
            <div className={`${styles.LogIn__rowDiv} mt-3`}></div>
          </form>         
        </div>
      </div>
    </section>
    </>     
  )
}
