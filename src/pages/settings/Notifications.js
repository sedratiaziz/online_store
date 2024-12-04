import React from 'react'
import '../../locales/i18n';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from '../../assets/css/LogIn.module.css'

import Navbar from '../../assets/components/Navbar'


export default function Notifications() {
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
                    <h2 className={styles.LogIn__h2}>لديك 2 من الإشعارات</h2>
                    <form data-netlify="true">
                        
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="يرجى تحديث عنوانك من أجل التوصيل"
                            readOnly
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="بطاقتك البنكية منتهية، يرجى تحديثها"
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
