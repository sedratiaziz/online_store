import React from "react";
import styles from '../../../assets/css/LogIn.module.css'
import { Link } from "react-router-dom";

export default function ProfileSetting() {
  return (
     <section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              
            <div className={styles.LogIn__contact_box}>                            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>عنوان التوصيل</h2>
                    <form data-netlify="true">
                        <input
                            type="text"
                            name="name"
                            className={styles.LogIn__field}
                            placeholder="الإسم الأول والأخير"
                            required
                        />
                        <input
                            type="text"
                            name="name"
                            className={styles.LogIn__field}
                            placeholder="رقم الهاتف"
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="البريد الإلكتروني ( الإيميل )"
                            required
                        />                       
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="العنوان: شقة - منزل - طريق - مجمع"
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder="وسيلة الدفع:  كاش \ بطاقة ائتمانبة \ دفع عند الإستلام"
                            required
                        />
                       
                       <Link to={'/Settings/SuccesMessage'}>
                        <button className={`${styles.LogIn__btn1} mt-3`}>حفظ التغييرات</button>
                        </Link>
                        <div className={`${styles.LogIn__rowDiv} mt-3`}>                        
                        </div>                        
                    </form>
                    <Link to={'/'}>
                        <button className={`${styles.LogIn__btn2} mt-3`}>الصفحة الرئيسية</button>
                        </Link>
                </div>
            </div>
        </section>
  );
}
