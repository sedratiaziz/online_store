import React from 'react'
import styles from '../../../assets/css/LogIn.module.css'
import { Link } from 'react-router-dom'

export default function SuccesMessage() {
  return (
    <section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              
            <div className={styles.LogIn__contact_box}>                            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>!تم حفظ التغييرات بنجاح</h2>
                    <form data-netlify="true">
                        
                       
                       <Link to={'/'}>
                        <button className={`${styles.LogIn__btn1} mt-3`}>الصفحة الرئيسية</button>
                        </Link>
                        <div className={`${styles.LogIn__rowDiv} mt-3`}>                        
                        </div>                        
                    </form>
                   
                </div>
            </div>
        </section>
  )
}
