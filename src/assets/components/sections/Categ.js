import React from 'react';
import { Link } from 'react-router-dom';

import cncr from '../../img/cncr.jpg';
import wizz from '../../img/wizz2.png';
import longflight from '../../img/longflight.jpg';

// In your React component file, e.g., App.js
import '../../fonts/fonts.css';



function Categ() {
    return (
    <section id="Categories" class="py-5">
        <div class="container">   
            <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-0 py-md-2 py-lg-2">
                <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={cncr} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">الكونكورد</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">تحفة هندسية بريطانية-فرنسية، تتجاوز سرعتها ضعف سرعة الصوت (2.04 ماخ)، تجمع بين الفن والتقنية بتناغم فريد</p>
                            <Link to={"/concorde"}>
                                <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25c">أكمل القراءة</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={wizz} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">الطيران الاقتصادي</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">ما هو السر وراء الاسعار المغرية التي تقدمها الشركات الاقتصادية؟ وهل ستستمر؟ أم انها مجرد "ترند"؟</p>
                            <Link to={"/cheap-flights"}>
                                <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25w">أكمل القراءة</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={longflight} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">أطول رحلة في التاريخ</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">بدأ الأمر كإعلان لفندق في لاس فيغاس! اكتشف كيف حطم روبرت تيم و جون كوك الرقم القياسي لزمن الطيران في 1959</p>
                            <Link to={"/longest-flight"}>
                                <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25l">أكمل القراءة</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Categ;