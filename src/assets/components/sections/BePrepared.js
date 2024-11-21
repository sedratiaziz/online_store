import React from 'react';
import seatbeltImg from '../../img/seatblt.webp';

function BePrepared() {
  return (
    <section id="be_prepared" className="py-5 text-center text-md-start text-lg-start">
      <div className="container">
        <div className="row d-flex flex-row-reverse justify-content-center align-items-center">
          <div className="col-md d-flex justify-content-center align-items-center py-3">
            <img src={seatbeltImg} alt="Seatbeltt" className="img-fluid w-75" style={{ borderRadius: '15px' }} />
          </div>

          <div className="col-md text-white py-3">
            <h1 id="seatbelt" className="py-2 text-center text-md-end text-lg-end text-xlg-end">! اربطو الأحزمة</h1>
            <br></br>
            <br></br>
            <p id="be_prepared_p" className="text-center text-md-end text-lg-end text-xlg-end">
              ، وجبة دسمة من المعلومات في انتظاركم
              <br></br>
              ! اربطو احزمتكم وحلقوا معي في عالم مليء بالتشويق والإثارة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BePrepared;
