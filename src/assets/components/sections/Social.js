import React from 'react';
import { Link } from 'react-router-dom';
import youtubeLong from '../../img/car.svg';
import snapchat from '../../img/device.svg';
import x from '../../img/fashion.png'; 
import telegram from '../../img/plane.svg';


function Categ(props) {
    return (
        <section id={`${props.id}`} className="py-5">
            <div className="container">
                {/* FIRST ROW */}
                <div className="row d-flex justify-content-center row-whith-wide-cards text-center pt-4 py-md-2 py-lg-2">
                    <div id="h10" className="hidden col col-6 col-lg-3 col-md-4 py-3">
                        <div className="card h-100 shadow" id="action">
                            <img alt='anotherimg' src={youtubeLong} id="action_img" className="card-img-top" style={{ height: "14rem" }} />
                            <div className="card-body">
                                <h3 className="card-title py-3">قطع سيارات</h3>
                                <hr></hr>
                                <Link to="/404">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn28">انتقل</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="h10" className="hidden col col-6 col-lg-3 col-md-4 py-3">
                        <div className="card h-100 shadow" id="action">
                            <img alt='anotherimg' src={snapchat} id="action_img" className="card-img-top" style={{ height: "14rem" }} />
                            <div className="card-body">
                                <h3 className="card-title py-3">إلكترونيات</h3>
                                <hr></hr>
                                <Link to="/404">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25snp">انتقل</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="h10" className="hidden col col-6 col-lg-3 col-md-4 py-3">
                        <div className="card h-100 shadow" id="action">
                            <img alt='anotherimg' src={x} id="action_img" className="card-img-top" style={{ height: "14rem" }} />
                            <div className="card-body">
                                <h3 className="card-title py-3">أزياء</h3>
                                <hr></hr>
                                <Link to="/404">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25">انتقل</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* visible only on md screens */}
                    <div id="h10" className="hidden d-md-none d-lg-block d-sm-block col col-6 col-lg-3 col-md-4 py-3">
                        <div className="card h-100 shadow" id="kids">
                            <img alt='anotherimg' src={telegram} id="kids_img" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title py-3 telegram_h3">وصل حديثاً</h3>
                                <hr id="hr_kids"></hr>
                                <Link to="/404">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover islamic">انتقل</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIRST ROW */}

                {/* SECOND ROW */}
                <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-2">
                    <div id="h10" className="hidden d-none d-lg-none d-md-block col col-6 col-lg-3 col-md-6 py-3">
                        <div className="card h-100 shadow" id="kids">
                            <img alt='anotherimg' src={telegram} id="sci-fi_img" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title py-3 telegram_h3">وصل حديثاً</h3>
                                <hr id="hr_sci-fi"></hr>
                                <Link to="/404">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover islamic">انتقل</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SECOND ROW */}


            </div>
        </section>
    );
}

export default Categ;
