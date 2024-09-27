import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../assets/components/Navbar';
import Categ from '../assets/components/sections/Categ';
import Taste from '../assets/components/sections/Taste';

import ribon from '../assets/img/ribon.jpeg';
import royalBlueTshirt from '../assets/img/royalblueTshirt.png'
import airpods from '../assets/img/airpods.jpg';

export default function Offers() {
  return (
    <>
      <Navbar 
        title={'Bazaria'}
        logoLink={"/"}
      />

      <section className="py-5 text-light d-flex align-items-center" id="sec1">
        <div className="container">
          <div className="py-4 d-flex align-items-evenly justify-content-center flex-column pt-5">
            <div className="py-3 d-flex align-items-center justify-content-center" id="sec1_h1">
              <h1 id="title" className="lh-base text-center">! عروض رائعة لا تقاوم</h1>
            </div>

            <div className="text-center py-4 d-none d-sm-block d-sm-none d-md-block">
              <h4 className="px-md-2 px-sm-4 lh-base" id="sec1_h4">.سارع قبل نفاد الكمية</h4>
            </div>

            <div className="text-center pb-4 pt-2 d-block d-sm-block d-md-none text-center">
              <h4 id="sec1_mobile">.سارع قبل نفاد الكمية</h4>
            </div>

            <div className="pt-5 pt-lg-5 mt-lg-3 pt-md-3 pt-sm-3 text-center">
              <a href='#Categories'>
                <button
                  id="salesbtn"
                  className={`bn632-hoversales bn25sales`}
                  style={{ fontSize: "1.1rem" }}
                >
                  تسوق الآن
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Categ 
        mainTitle={"الأكثر مبيعا"}

        src1={ribon}
        src2={royalBlueTshirt}
        src3={airpods}

        cardTitle1="رايبون 02 أمريكي"        
        cardP1="طبقة الحماية من الشمس للسيارة توفر حماية فعالة من الأشعة فوق البنفسجية، وتقلل من حرارة السيارة، مما يزيد من راحة القيادة"      
        cardP1_detail="القطع المتبقية: 3 | التقييمات: 10/9.5"
        btn1Body={"9.99$"}
        btn1Style={"bn25c"}
        
        cardTitle2="تي شيرت بولو - أزرق ملكي "
        cardP2=" مصنوع من قماش قطن ناعم وقابل للتنفس. يتميز بقصة تناسب جميع الأجسام، ويأتي بلون أزرق ملكي يتناسب مع جميع المناسبات"      
        cardP2_detail="القطع المتبقية: 12 | التقييمات: 10/7"
        btn2Body={"34.99$"}
        btn2Style={"bn25c"}
        
        cardTitle3="أبل إيربودز برو 2"
        cardP3="محرك مخصص بتمدد عالٍ من تصميم Apple مع مضخم صوت مخصص بنطاق ديناميكي عالٍ وميزة إلغاء الضجيج النشط."      
        cardP3_detail="القطع المتبقية: 15 | التقييمات: 10/8"
        btn3Body="299$"
        btn3Style={"bn25c"}
        
        link1="/concorde"
        link2="/budget-airlines"
        link3="/flight-record"
      />

      <Taste 
        title={"عروض إضافية"}
      />

      <Categ 
        mainTitle={""}
        src1={ribon}
        src2={ribon}
        src3={ribon}
        cardTitle1="ds"
        cardTitle2="شركات الطيران الاقتصادية"
        cardTitle3="تحطيم الأرقام القياسية في الطيران"
        link1="/concorde"
        link2="/budget-airlines"  
        link3="/flight-record"
      />

      <Categ 
        mainTitle={""}
        src1={ribon}
        src2={ribon}
        src3={ribon}
        cardTitle1="ds"
        cardTitle2="شركات الطيران الاقتصادية"
        cardTitle3="تحطيم الأرقام القياسية في الطيران"
        link1="/concorde"
        link2="/budget-airlines"
        link3="/flight-record"
      />
    </>
  );
}
