import React from 'react';
import { Link } from 'react-router-dom';


function Categ(props) {    
    return (
    <section id={`${props.id}`} class="py-5">
        <div class="container">   
            <h2 className='h1000 text-center pb-5 MostSellingH1'>{props.mainTitle}</h2>
            <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-0 py-md-2 py-lg-2">            
                <div className="col h1001 col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={props.src1} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">{props.cardTitle1}</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">{props.cardP1}</p>
                            {props.show_cardP1_detail && (
                                <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">{props.cardP1_detail}</p>
                            )}
                            <Link to={`/${props.link1}`}>
                                <button style={{ fontSize: "1.1rem" }} className={`bn632-hover ${props.btn1Style}`}>{props.btn1Body}</button>
                            </Link>
                            {props.showFavoriteButton && (
                                <Link to={`/${props.fvrtLink1}`}>
                                    <button style={{ fontSize: "1.1rem" }} className={`bn632-hover ${props.btn1StyleFvrt}`}>{props.btn1BodyFvrt}</button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                <div id='h10' className="col h1002 col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={props.src2} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">{props.cardTitle2}</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">{props.cardP2}</p>
                            {props.show_cardP2_detail && (
                                <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">{props.cardP2_detail}</p>
                            )}
                            <Link to={`/${props.link2}`}>
                                <button style={{ fontSize: "1.1rem" }} className={`bn632-hover ${props.btn2Style}`}>{props.btn2Body}</button>
                            </Link>
                            {props.showFavoriteButton && (
                                <Link to={`/${props.fvrtLink2}`}>
                                    <button style={{ fontSize: "1.1rem" }} className={`bn632-hover ${props.btn2StyleFvrt}`}>{props.btn2BodyFvrt}</button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col h1003 col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={props.src3} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">{props.cardTitle3}</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">{props.cardP3}</p>                            
                            {props.show_cardP3_detail && (
                                <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">{props.cardP3_detail}</p>
                            )}
                            <Link to={`/${props.link3}`}>
                                <button style={{ fontSize: "1.1rem" }} className={`bn632-hover ${props.btn3Style}`}>{props.btn3Body}</button>
                            </Link>
                            {props.showFavoriteButton && (
                                <Link to={`/${props.fvrtLink3}`}>
                                    <button style={{ fontSize: "1.1rem" }} className={`bn632-hover ${props.btn3StyleFvrt}`}>{props.btn3BodyFvrt}</button>
                                </Link>
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