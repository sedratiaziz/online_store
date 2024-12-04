import React from 'react'

import '../../locales/i18n';
import { useTranslation } from 'react-i18next';

import Navbar from '../../assets/components/Navbar'

export default function Payment() {
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
      
      {/* <section id="" className="py-5">
  <div className="container">
   
    <div className="row d-flex justify-content-center row-whith-wide-cards text-center pt-4 py-md-2 py-lg-2">
      <div id="h10" className="hidden col col-6 col-lg-3 col-md-4 py-3">
        <div className="card h-100 shadow" id="action">
          <img alt="anotherimg"  id="action_img" className="card-img-top" style={{ height: "14rem" }} />
          <div className="card-body">
            <h3 className="card-title py-3"></h3>
            <hr />
            <Link to="">
              <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn28"></button>
            </Link>
          </div>
        </div>
      </div>

      <div id="h10" className="hidden col col-6 col-lg-3 col-md-4 py-3">
        <div className="card h-100 shadow" id="action">
          <img alt="anotherimg"  id="action_img" className="card-img-top" style={{ height: "14rem" }} />
          <div className="card-body">
            <h3 className="card-title py-3"></h3>
            <hr />
            <Link to="">
              <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25snp"></button>
            </Link>
          </div>
        </div>
      </div>

      <div id="h10" className="hidden col col-6 col-lg-3 col-md-4 py-3">
        <div className="card h-100 shadow" id="action">
          <img alt="anotherimg"  id="action_img" className="card-img-top" style={{ height: "14rem" }} />
          <div className="card-body">
            <h3 className="card-title py-3"></h3>
            <hr />
            <Link to="">
              <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25"></button>
            </Link>
          </div>
        </div>
      </div>

      <div id="h10" className="hidden d-md-none d-lg-block d-sm-block col col-6 col-lg-3 col-md-4 py-3">
        <div className="card h-100 shadow" id="kids">
          <img alt="anotherimg"  id="kids_img" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title py-3 telegram_h3"></h3>
            <hr id="hr_kids" />
            <Link to="">
              <button style={{ fontSize: "1.1rem" }} className="bn632-hover islamic"></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-2">
      <div id="h10" className="hidden d-none d-lg-none d-md-block col col-6 col-lg-3 col-md-6 py-3">
        <div className="card h-100 shadow" id="kids">
          <img alt="anotherimg"  id="sci-fi_img" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title py-3 telegram_h3"></h3>
            <hr id="hr_sci-fi" />
            <Link to="">
              <button style={{ fontSize: "1.1rem" }} className="bn632-hover islamic"></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

    </>     
  )
}
