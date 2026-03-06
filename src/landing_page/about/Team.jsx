import React from "react";

const Team = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold h2">People</h1>
      
      <div className="row justify-content-center align-items-start">
        {/* Left Column: Image & Bio Header */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle shadow mb-3"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h3 className="fs-4 mb-1">Nithin Kamath</h3>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Right Column: Detailed Text */}
        <div className="col-md-6 text-muted ">
          <p className="lh-lg">
            Nithin bootstrapped and founded <strong>Zerodha</strong> in 2010 to 
            overcome the hurdles he faced during his decade-long stint as a trader. 
            Today, Zerodha has changed the landscape of the Indian brokering industry.
          </p>

          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Committee (SMAC) and the
            Market Data Advisory Committee (MDAC).
          </p>

          <p className="lh-lg">Playing basketball is his zen.</p>
          
          <p>
            Connect on <a href="#" className="text-decoration-none">Homepage</a> / 
            <a href="#" className="text-decoration-none ms-2">TradingQ&A</a> / 
            <a href="#" className="text-decoration-none ms-2">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;