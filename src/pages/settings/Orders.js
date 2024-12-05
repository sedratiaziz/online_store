import React from 'react'
import styles from '../../assets/css/LogIn.module.css'
import { Link } from 'react-router-dom';
import '../../locales/i18n';
import { useTranslation } from 'react-i18next';

import Navbar from '../../assets/components/Navbar'

export default function Orders() {
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


<section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              
            <div className={styles.LogIn__contact_box}>                            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>لديك 3 طلبات حالية</h2>
                    <form data-netlify="true">
                        
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="رايبون 02 أمريكي: وصل المنتج لميناء الشحن، أمس في الساعة 5 مساءاََ"
                            readOnly
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="ساعة رولكس: خرج المنتج للتو من مركز فرز البضائع"
                            readOnly
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="!عدة المساعدة في الطريق: المنتج في طريقه إليك"
                            readOnly
                        />
                       
                        <Link to={'/'}>
                        <button className={`${styles.LogIn__btn1} mt-3`}>الصفحة الرئيسية</button>
                        </Link>
                        <div className={`${styles.LogIn__rowDiv} mt-3`}>                        
                        </div>                        
                    </form>
                   
                </div>
            </div>
        </section>
     
    </>     
  )
}
