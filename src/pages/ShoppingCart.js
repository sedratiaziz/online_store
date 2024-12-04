import React from 'react'
import styles from '../assets/css/LogIn.module.css'; // Import the CSS module
import CartItems from '../assets/components/CartItems';

export default function ShoppingCart() {
  return (
<section className={`py-5 d-flex align-items-center ${styles.LogIn__container}`}>              

<CartItems
  id="new_arrival"
  cardTitle3="عدة المساعدة في الطريق"
  cardP3_detail="عدد القطع:  | رسوم الشحن: $6.89"
  show_cardP3_detail={true}
  btn3Body="49.99$"
  btn3BodyFvrt={"إضافة للمفضلة"}
  btn3Style={"bn24"}
  btn3StyleFvrt={"bn24"}
  link3=""
  cardTitle4="رايبون 02 أمريكي"
  cardP4_detail="عدد القطع:  | رسوم الشحن: لا يوجد"
  show_cardP4_detail={true}
  btn4Body="9.99$"
  btn4BodyFvrt={"إضافة للمفضلة"}
  btn4Style={"bn24"}
  btn4StyleFvrt={"bn24"}
  link4=""
  continueButton={"المتابعة"}
  continueButtonLink={'/Delivery'}
  showHomeButton={true}
  homeButton={"الصفحة الرئيسية"}
  showFavoriteButton={true}
/>
</section>
   
  )
}
