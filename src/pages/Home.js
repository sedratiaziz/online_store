import React, { useEffect } from 'react';
import '../App.css'; // Import your CSS styles
// In your React component file, e.g., App.js
import '../assets/fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'; 

import useScrollAnimation from '../assets/Hooks/useScrollAnimation'

import Header from '../assets/components/Header';
import Navbar from '../assets/components/Navbar';
import Welcome from '../assets/components/sections/Welcome';
import Social from '../assets/components/sections/Social';
import Categ from '../assets/components/sections/Categ';
import Taste from '../assets/components/sections/Taste';

import bh from '../assets/img/bh.jpg';
import formula from '../assets/img/formula.jpg';
import ai from '../assets/img/ai.jpeg';
import ribon from '../assets/img/ribon.jpeg';
import royalBlueTshirt from '../assets/img/royalblueTshirt.png'
import airpods from '../assets/img/airpods.jpg';


const arrowElement = (
  <div className="d-flex flex-column justify-content-between pt-5 d-none d-sm-block d-sm-none d-md-block">
    <div className="d-flex flex-column text-center pt-5">
      <FontAwesomeIcon className="arrw" id="arrw_dwn" icon={faAngleDoubleDown} size="2x" />
    </div>     
  </div>
);

const arrowMobileElement = (
  <div className="d-flex flex-column justify-content-between pt-5 d-block d-sm-block d-md-none text-center">
    <div className="d-flex flex-column text-center pt-4">
      <FontAwesomeIcon className='arrw' id='arrw_dwn' icon={faAngleDoubleDown} size='2x'/>
    </div>     
  </div>
);



function Home() {
  
  
  //IMPORTANT: ADD IN EVERY COMPONENT THE FOLLOWING CODE:
  /* Scroll to the top on component render */
  useEffect(() => {
    window.scrollTo(0, 0);  
  
    // Change the tab title when Home component is loaded
    document.title = "Bazaria | !المكان الأمثل للتسوق";

  }, []);
  /* Scroll to the top on component render */

  useScrollAnimation();
  
  return (
    <>
      <Header />
      <Navbar title={"Bazaria"} />      
      <Welcome 
      id={"think_creative"}
      title={"تسوق بذكاء في"}
      titleSpan={"بازاريا"}
      subTitle={"! كل ما تحتاجه تحت سقفٍ واحد"}
      subTitleMobile={"! كل ما تحتاجه تحت سقفٍ واحد"}
      arrow={arrowElement}
      arrowMobile={arrowMobileElement}
      />
            
      <Categ 
        id="what_makes_us_unique"

        mainTitle={"ماذا يميز بازاريا؟"}
        src1={bh}
        src2={formula}
        src3={ai}

        cardTitle1="دعم المنتجات المحلية"        
        cardP1="في بازاريا، نؤمن بأهمية دعم المنتجات المحلية. اكتشف منتجات مصنوعة بحب من المبدعين البحرينيين، وكن جزءًا من تعزيز الاقتصاد ودعم المشاريع الصغيرة"      
        cardP1_detail={""}           
        show_cardP1_detail={false}     
        btn1Body={"! والله كفو"}
        btn1Style={"bn25c"}
        
        cardTitle2="توصيل صاروووخ وين ما كنت"
        cardP2="خدمة التوصيل السريعة في بازاريا تضمن وصول أغراضك بأسرع وقت، مهما كانت المسافة. نؤمن لك السرعة والأمان في كل عملية توصيل"      
        cardP2_detail={""}
        show_cardP2_detail={false}
        btn2Body={"معقولة ؟"}
        btn2Style={"bn25w"}
        
        cardTitle3="التسوق بالذكاء الاصطناعي"
        cardP3="بازاريا يستخدم الذكاء الاصطناعي لمساعدتك في العثور على أفضل العروض وتقديم توصيات تناسب أسلوب تسوقك. اجعل الذكاء الاصطناعي مستشارك الشخصي"            
        cardP3_detail={""}
        show_cardP3_detail={false}
        btn3Body={"!يلا نجرب"}
        btn3Style={"bn25l"}
        
        link1="/"
        link2="/"
        link3="/"

        showFavoriteButton={false}
      />
      
      <Taste 
        title={"قائمة الأصناف و المنتجات"}
      />
      <Social
      id="products_and_categories"
      />
      <Categ 
        id="most_selling"

        mainTitle={"الأكثر مبيعا"}

        src1={ribon}
        src2={royalBlueTshirt}
        src3={airpods}

        cardTitle1="رايبون 02 أمريكي"        
        cardP1="طبقة الحماية من الشمس للسيارة توفر حماية فعالة من الأشعة فوق البنفسجية، وتقلل من حرارة السيارة، مما يزيد من راحة القيادة"      
        cardP1_detail="القطع المتبقية: 3 | التقييمات: 10/9.5"
        show_cardP1_detail={true}
        btn1Body={"9.99$"}
        btn1BodyFvrt={"إضافة للمفضلة"}
        btn1Style={"bn25c"}
        btn1StyleFvrt={"bn24"}  
        
        cardTitle2="تي شيرت بولو - أزرق ملكي "
        cardP2=" مصنوع من قماش قطن ناعم وقابل للتنفس. يتميز بقصة تناسب جميع الأجسام، ويأتي بلون أزرق ملكي يتناسب مع جميع المناسبات"      
        cardP2_detail="القطع المتبقية: 12 | التقييمات: 10/7"
        show_cardP2_detail={true}
        btn2Body={"34.99$"}
        btn2BodyFvrt={"إضافة للمفضلة"}
        btn2Style={"bn25c"}
        btn2StyleFvrt={"bn24"} 
        
        cardTitle3="أبل إيربودز برو 2"
        cardP3="محرك مخصص بتمدد عالٍ من تصميم Apple مع مضخم صوت مخصص بنطاق ديناميكي عالٍ وميزة إلغاء الضجيج النشط."      
        cardP3_detail="القطع المتبقية: 15 | التقييمات: 10/8"
        show_cardP3_detail={true}
        btn3Body="299$"
        btn3BodyFvrt={"إضافة للمفضلة"}
        btn3Style={"bn25c"}
        btn3StyleFvrt={"bn24"} 
        
        link1="/concorde"
        link2="/budget-airlines"
        link3="/flight-record"

        showFavoriteButton={true}
      />
      {/* <BePrepared /> */}
      {/* <Acc />      
      
      <Categ />       */}
    </>
  );
}

export default Home;
