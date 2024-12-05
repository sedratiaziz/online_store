import React from "react";
import styles from "../../../assets/css/LogIn.module.css";
import { Link } from "react-router-dom";


export default function Bio() {
  return (
    <section
      className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}
    >
      <div className={styles.LogIn__contact_box}>
        <div className={styles.LogIn__right}>
          <h2 className={styles.LogIn__h2}>بايو</h2>
          <form data-netlify="true">
            <input
              type="text"
              name="name"
              className={styles.LogIn__field}
              placeholder="!مساحة رائعة للتعبير عن نفسك"
              required
            />

            <Link to={"/Settings/SuccesMessage"}>
              <button className={`${styles.LogIn__btn1} mt-3`}>
                حفظ التغييرات
              </button>
            </Link>
            <div className={`${styles.LogIn__rowDiv} mt-3`}></div>
          </form>
          <Link to={"/"}>
            <button className={`${styles.LogIn__btn2} mt-3`}>
              الصفحة الرئيسية
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
