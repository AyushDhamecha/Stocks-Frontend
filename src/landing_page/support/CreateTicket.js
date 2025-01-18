import React from "react";
// import "./CreateTicket.css"; // Assuming you use external CSS for better styling

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h4 className="fs-4 text-muted text-center mb-4 w-100 mb-5 d-flex">To create a ticket, select a relevant topic</h4>

        {/* Section for each topic */}
        <div className="col-md-4 col-sm-6 mb-4">
          <h5 className="mb-3">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h5>
          <ul className="list-unstyled">
            <li><a href="#">Getting started</a></li>
            <li><a href="#">Online</a></li>
            <li><a href="#">Offline</a></li>
            <li><a href="#">Charges</a></li>
            <li><a href="#">Company, Partnership and HUF</a></li>
            <li><a href="#">Non Resident Indian (NRI)</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <h5 className="mb-3">
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h5>
          <ul className="list-unstyled">
            <li><a href="#">Login credentials</a></li>
            <li><a href="#">Your Profile</a></li>
            <li><a href="#">Account modification and segment addition</a></li>
            <li><a href="#">CMR & DP ID</a></li>
            <li><a href="#">Nomination</a></li>
            <li><a href="#">Transfer and conversion of shares</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <h5 className="mb-3">
            <i className="fa fa-chart-bar" aria-hidden="true"></i> Trading and Markets
          </h5>
          <ul className="list-unstyled">
            <li><a href="#">Trading FAQs</a></li>
            <li><a href="#">Kite</a></li>
            <li><a href="#">Margins</a></li>
            <li><a href="#">Product and order types</a></li>
            <li><a href="#">Corporate actions</a></li>
            <li><a href="#">Kite features</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <h5 className="mb-3">
            <i className="fa fa-wallet" aria-hidden="true"></i> Funds
          </h5>
          <ul className="list-unstyled">
            <li><a href="#">Fund withdrawal</a></li>
            <li><a href="#">Adding funds</a></li>
            <li><a href="#">Adding bank accounts</a></li>
            <li><a href="#">eMandates</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <h5 className="mb-3">
            <i className="fa fa-box" aria-hidden="true"></i> Console
          </h5>
          <ul className="list-unstyled">
            <li><a href="#">IPO</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Funds statement</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Referral program</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <h5 className="mb-3">
            <i className="fa fa-coins" aria-hidden="true"></i> Coin
          </h5>
          <ul className="list-unstyled">
            <li><a href="#">Understanding mutual funds and Coin</a></li>
            <li><a href="#">Coin app</a></li>
            <li><a href="#">Coin web</a></li>
            <li><a href="#">Transactions and reports</a></li>
            <li><a href="#">National Pension Scheme (NPS)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
