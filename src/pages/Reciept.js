import React from "react";
import styles from '../assets/css/LogIn.module.css'
import { Link } from "react-router-dom";

export default function Reciept() {
  const printPage = ()=>{
    window.print();
  }
  
  return (
     <section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              
            <div className={styles.LogIn__contact_box}>                            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>الفاتورة</h2>
                    <form>
                        <h5>إسم العميل</h5>
                        <p>Mohammed Ali Klay</p>

                        <h5>عنوان التوصيل</h5>
                        <p>Manama, Bahrain</p>

                        <h5>طريقة الدفع</h5>
                        <p>MasterCard Debit</p>

                        <h5>رقم الهاتف</h5>
                        <p>+973 35543345</p>
                        
                       
                       
                        <button onClick={printPage} className={`${styles.LogIn__btn1} mt-3`}>طباعة</button>
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
