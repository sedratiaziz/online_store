import React, { useState } from "react";
import { Link } from "react-router-dom";

function CartItems(props) {
  const [count, setCount] = useState(0);

  const handleFavoriteClick = () => {
    alert("تمت إضافة المنتج إلى المفضلة!");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [count2, setCount2] = useState(0);

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };

  return (
    <section id={`${props.id}`} className="py-5">
      <div className="container">
        <h2 className="h1000 text-center pb-5 MostSellingH1">
          {props.mainTitle}
        </h2>
        <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-0 py-md-2 py-lg-2">
          <div className="col h1003 col-lg-6 col-12 py-3 mb-lg-5">
            <div className="card h-100 shadow" id="classic">
              <div className="card-body">
                <h3 className="crd1 card-title py-3">{props.cardTitle3}</h3>
                <hr id="hr_classNameic"></hr>
                {props.show_cardP3_detail && (
                  <p
                    id="pcomplt1"
                    className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4"
                  >
                    {`عدد القطع: ${count} | رسوم الشحن: $5.56 `}
                  </p>
                )}
                <div className="counter">
            <button className="counterBtn" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="counterBtn" onClick={increment}>+</button>
          </div>

                <Link to={`${props.link3}`}>
                  <button
                    style={{ fontSize: "1.1rem" }}
                    className={`bn632-hover ${props.btn3Style}`}
                  >
                    {props.btn3Body}
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <div className="col h1003 col-lg-6 col-12 py-3 mb-lg-5">
            <div className="card h-100 shadow" id="classic">
              <div className="card-body">
                <h3 className="crd1 card-title py-3">{props.cardTitle4}</h3>
                <hr id="hr_classNameic"></hr>
                {props.show_cardP4_detail && (
                  <p
                    id="pcomplt1"
                    className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4"
                  >
                    {`عدد القطع: ${count2} | رسوم الشحن: مجاني `}
                  </p>
                )}
                
                <div className="counter">
            <button className="counterBtn" onClick={decrement2}>-</button>
            <span>{count2}</span>
            <button className="counterBtn" onClick={increment2}>+</button>
          </div>
          
       
        <Link to={`${props.link4}`}>
                  <button
                    style={{ fontSize: "1.1rem" }}
                    className={`bn632-hover ${props.btn3Style}`}
                  >
                    {props.btn4Body}
                  </button>
                </Link> 
                
        
 </div>

              </div>
            </div>
            
            <Link to={props.continueButtonLink}>
            <button style={{ fontSize: "1.1rem" }} className={`bn632-hover bn26`}>
            {props.continueButton}
            </button>
            </Link>
            
            <Link to={'/'}>
            <button style={{ fontSize: "1.1rem" }} className={`bn632-hover bn26`}>
            {props.homeButton}
            </button>
            </Link>
          </div>


          
      </div>
    </section>
  );
}

export default CartItems;
