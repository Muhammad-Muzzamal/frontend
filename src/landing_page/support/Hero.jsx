import React from "react";

const Hero = () => {
  const heroStyle = {
    backgroundColor: "#387ed1",
    color: "white",
    padding: "60px 0",
    minHeight: "400px",
  };

  const searchInputStyle = {
    height: "60px",
    borderRadius: "8px",
    border: "none",
    // fontSize: "1.1rem",
    paddingLeft: "20px",
    width : "75%"
  };

  return (
    <div style={heroStyle} className="container-fluid">
      <div className="container">
        {/* Top Navigation Links */}
        <div className="d-flex justify-content-between mb-5">
          <a
            href="#"
            className="text-white text-decoration-none fw-bold "
          >
            Support Portal
          </a>
          <a href="#" className="text-white text-decoration-none border-bottom">
            Track Tickets
          </a>
        </div>

        <div className="row">
          {/* Left Column: Search Section */}
          <div className="col-md-7">
            <h2 className="mb-4 h4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                style={searchInputStyle}
              />
            </div>

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3 small">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Column: Featured Section */}
          <div className="col-md-5 ps-md-5 mt-5 mt-md-0">
            <h4 className="mb-3 h5">Featured</h4>
            <ol className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-white text-decoration-underline small">
                  1. Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline small">
                  2. Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
