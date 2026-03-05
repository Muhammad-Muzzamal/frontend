import React from "react";

const Education = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="Education" />
        </div>
        <div className="col-6 mt-5">
          <h1 className="mt-5 h2 mb-4">Free and open market education</h1>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none mb-5">
            Versity <i className="fa fa-long-arrow-right"></i>
          </a>
          <p className="mt-5 mb-4">
            VTradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none">
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
