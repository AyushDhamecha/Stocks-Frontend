import React from "react";
import { Link } from "react-router-dom";

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center w-100">People</h1>
            </div>

            <div className="row p-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-6 p-3 text-center">
                    <img
                        src="media/images/nithinKamath.jpg"
                        style={{ borderRadius: "100%", width: "50%" }}
                    />
                    <h4 className="mt-5">Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect to <a href="/" style={{ margin: "0 5px" }}>Homepage</a> /
                        <a
                            href="https://tradingqna.com/u/nithin/summary"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ margin: "0 5px" }}
                        >
                            TradingQnA
                        </a> /
                        <a
                            href="https://x.com/Nithin0dha"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ margin: "0 5px" }}
                        >
                            Twitter
                        </a>
                    </p>


                </div>
            </div>
        </div>
    );
}

export default Team;