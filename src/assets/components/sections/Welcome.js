import React from 'react';


function Welcome(props) {
    return (
        <section className="py-5 text-light d-flex align-items-center sec1" id={`${props.id}`}>
    <div className="container">


        <div className="py-4 d-flex align-items-evenly justify-content-center flex-column pt-5">       
           
            <div className="py-3 d-flex align-items-center justify-content-center" id="sec1_h1">
                <h1 id="title" className="lh-base text-center">
                {props.title} <span className="title-span">{props.titleSpan}</span> 
                </h1>
            </div>

                {/* <!--pc and tablet--> */}
                <div className="text-center d-none d-sm-block d-sm-none d-md-block " >
                    <h4 className=" px-md-2 px-sm-4 lh-base" id="sec1_h4">

                    <br></br>
                        {props.subTitle}
                    </h4>
                </div>

                {/* <!--mobile--> */}
                <div className="text-center py-4 d-block d-sm-block d-md-none text-center">
                    <h4 id="sec1_mobile">
                    {props.subTitleMobile}
                    </h4>
                </div>
            </div>
           

            {props.arrow}
            {/* <div className="d-flex flex-column justify-content-between pt-5  d-none d-sm-block d-sm-none d-md-block">
                <div className="d-flex flex-column text-center pt-5">
                <FontAwesomeIcon className='arrw' id='arrw_dwn' icon={faAngleDoubleDown} size='2x'/>
                </div>     
            </div> */}
            
            {props.arrowMobile}
            {/* <div className="d-flex flex-column justify-content-between pt-5 d-block d-sm-block d-md-none text-center">
                <div className="d-flex flex-column text-center pt-4">
                <FontAwesomeIcon className='arrw' id='arrw_dwn' icon={faAngleDoubleDown} size='2x'/>
                </div>     
            </div> */}
    </div>

</section>
    );
}

export default Welcome;