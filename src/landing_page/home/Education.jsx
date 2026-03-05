import React from "react";

const Education = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Left Column: Illustration */}
        <div className="col-12 col-md-6 mb-5 mb-md-0 text-center">
          <img 
            src="media/images/education.svg" 
            alt="Education Illustration" 
            className="img-fluid w-75" 
          />
        </div>

        {/* Right Column: Content */}
        <div className="col-12 col-md-6 px-lg-5">
          <h2 className="mb-4 fs-2 fw-semibold">Free and open market education</h2>
          
          <div className="mb-5">
            <p className="text-muted mb-3">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-decoration-none fw-medium d-flex align-items-center">
              Varsity <i className="fa fa-long-arrow-right ms-2"></i>
            </a>
          </div>

          <div className="mb-4">
            <p className="text-muted mb-3">
              TradingQ&A, the most active trading and investment community in India 
              for all your market related queries.
            </p>
            <a href="#" className="text-decoration-none fw-medium d-flex align-items-center">
              TradingQ&A <i className="fa fa-long-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;