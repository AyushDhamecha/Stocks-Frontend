// import React from 'react';

// function Hero() {
//     return ( 
//         <div className="hero" style={{backgroundColor:"#387ed1"}}>
//         <div className='container' >
//             <div className='row'>
//                 <h3>Support Portal</h3>
//                 <a href=''style={{
//             color: "white",
//             textDecoration: "underline",
//             fontSize: "18px",
//           }} >Track tickets</a>
//             </div>
//         </div>
//         </div>
//      );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <div className="hero" style={{ backgroundColor: "#387ed1" }}>
    <section
      className="container"
      style={{
        backgroundColor: "#387ed1",
        color: "white",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h4 style={{ fontWeight: "bold", fontSize: "24px" }}>Support Portal</h4>
        <a
          href=""
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "18px",
          }}
        >
          Track tickets
        </a>
      </div>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6" style={{ paddingRight: "30px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "normal", marginBottom: "20px" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              marginBottom: "20px",
            }}
          />
          <div>
            <a
              href=""
              style={{
                display: "block",
                color: "white",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              Track account opening
            </a>
            <a
              href=""
              style={{
                display: "block",
                color: "white",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              Track segment activation
            </a>
            <a
              href=""
              style={{
                display: "block",
                color: "white",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              Intraday margins
            </a>
            <a
              href=""
              style={{
                display: "block",
                color: "white",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              Kite user manual
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-md-6">
          <h1 style={{ fontSize: "20px", fontWeight: "normal", marginBottom: "20px" }}>
            Featured
          </h1>
          <ol style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href=""
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                Trading holiday on account of Christmas on December 25, 2024
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hero;
