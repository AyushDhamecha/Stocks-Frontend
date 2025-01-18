import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        {/* Title */}
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
        </div>
        
        {/* Paragraph */}
        <div className="col-12 mt-4">
          <h6>
            Extend your trading and investment experience even further with our
            partner platforms
          </h6>
        </div>

        {/* Partner Platforms */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" className="mb-3 w-75"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="Smallcase Logo" className="mb-3 w-75"/>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="Smallcase Logo" className="mb-3 w-75"/>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="Smallcase Logo" className="mb-3 w-75"/>
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="Smallcase Logo" className="mb-3 w-75"/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="Smallcase Logo" className="mb-3" style={{width:"64%"}}/>
          <p className="text-small text-muted">Insurance</p>
        </div>

        {/* Signup Button */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
