import React from 'react';

function Taste(props) {
    return (
        <section className="py-5 d-flex justify-content-center align-items-center" style={{ height: "85vh" }}>
            <div className="text-center py-4">
                <h1 id="h10" style={{ fontFamily: "'ibmReg', sans-serif", fontSize: "3rem" }} className="hpro text-light py-3">{props.title}</h1>
            </div>
        </section>    
    );
}

export default Taste;