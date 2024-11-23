import React from 'react';

function Categ(props) {
  return (
    <section id={`${props.id}`} className="py-5">
      <div className="container">
        <h2 className="h1000 text-center pb-5 MostSellingH1">{props.mainTitle}</h2>
        <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-0 py-md-2 py-lg-2">
          {/* Card 1 */}
          <div className="col h1001 col-12 col-lg-4 col-md-6 col-sm-12 py-3">
            <div className="card h-100 shadow" id="classic">
              <img alt="animg" src={props.src1} id="classic_img" className="card-img-top" />
              <div className="card-body">
                <h3 className="crd1 card-title py-3">{props.cardTitle1}</h3>
                <hr id="hr_classic"></hr>
                <p id="pcomplt1" className="card-text pt-3 px-4">{props.cardP1}</p>
                {props.show_cardP1_detail && (
                  <p id="pcomplt1" className="card-text pt-3 px-4">{props.cardP1_detail}</p>
                )}
                <button
                  style={{ fontSize: '1.1rem' }}
                  className={`bn632-hover ${props.btn1Style}`}
                  onClick={props.onClick1} // Use onClick prop
                >
                  {props.btn1Body}
                </button>
                {props.showFavoriteButton && (
                  <button
                    style={{ fontSize: '1.1rem' }}
                    className={`bn632-hover ${props.btn1StyleFvrt}`}
                    onClick={props.onClickFavorite1} // Optional for favorite button
                  >
                    {props.btn1BodyFvrt}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div id="h10" className="col h1002 col-12 col-lg-4 col-md-6 col-sm-12 py-3">
            <div className="card h-100 shadow" id="classic">
              <img alt="animg" src={props.src2} id="classic_img" className="card-img-top" />
              <div className="card-body">
                <h3 className="crd1 card-title py-3">{props.cardTitle2}</h3>
                <hr id="hr_classic"></hr>
                <p id="pcomplt1" className="card-text pt-3 px-4">{props.cardP2}</p>
                {props.show_cardP2_detail && (
                  <p id="pcomplt1" className="card-text pt-3 px-4">{props.cardP2_detail}</p>
                )}
                <button
                  style={{ fontSize: '1.1rem' }}
                  className={`bn632-hover ${props.btn2Style}`}
                  onClick={props.onClick2} // Use onClick prop
                >
                  {props.btn2Body}
                </button>
                {props.showFavoriteButton && (
                  <button
                    style={{ fontSize: '1.1rem' }}
                    className={`bn632-hover ${props.btn2StyleFvrt}`}
                    onClick={props.onClickFavorite2}
                  >
                    {props.btn2BodyFvrt}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col h1003 col-12 col-lg-4 col-md-6 col-sm-12 py-3">
            <div className="card h-100 shadow" id="classic">
              <img alt="animg" src={props.src3} id="classic_img" className="card-img-top" />
              <div className="card-body">
                <h3 className="crd1 card-title py-3">{props.cardTitle3}</h3>
                <hr id="hr_classic"></hr>
                <p id="pcomplt1" className="card-text pt-3 px-4">{props.cardP3}</p>
                {props.show_cardP3_detail && (
                  <p id="pcomplt1" className="card-text pt-3 px-4">{props.cardP3_detail}</p>
                )}
                <button
                  style={{ fontSize: '1.1rem' }}
                  className={`bn632-hover ${props.btn3Style}`}
                  onClick={props.onClick3} // Use onClick prop
                >
                  {props.btn3Body}
                </button>
                {props.showFavoriteButton && (
                  <button
                    style={{ fontSize: '1.1rem' }}
                    className={`bn632-hover ${props.btn3StyleFvrt}`}
                    onClick={props.onClickFavorite3}
                  >
                    {props.btn3BodyFvrt}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categ;
