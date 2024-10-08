import React from 'react';
import styles from '../assets/css/LogIn.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (
        <>
        <section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              
            <div className={styles.LogIn__contact_box}>
                <Link id='bazariaImgLink' to="/">
                <div className={styles.LogIn__left}><h3 className={styles.LogIn__lefth3}>Bazaria™</h3></div>
                </Link>            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>سجّل وعيش تجربة تسوّق فريدة</h2>
                    <form data-netlify="true">
                        <input
                            type="text"
                            name="name"
                            className={styles.LogIn__field}
                            placeholder="الإسم الكريم"
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
                            name="message"
                            className={`${styles.LogIn__field} ${styles.LogIn__f1}`}
                            placeholder="شنو المنتجات اللي تفضلها؟ "
                            required
                        />
                        <button className={`${styles.LogIn__btn1} mt-3`}>تسجيل الدخول</button>
                        <div className={`${styles.LogIn__rowDiv} mt-3`}>
                          <button className={`${styles.LogIn__btn2} mt-3`}>إنشاء حساب بازاريا</button>
                          <button className={`${styles.LogIn__btn2} mt-3`}>نسيت كلمة المرور؟</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}
