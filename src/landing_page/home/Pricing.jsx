import React from 'react';

const Pricing = () => {
  return (
    <div className='container my-5 py-5'>
      <div className="row align-items-center">
        {/* Left Column: Heading & CTA */}
        <div className="col-12 col-md-4 mb-5 mb-md-0">
          <h2 className='fs-1 fw-semibold mb-4'>Unbeatable pricing</h2>
          <p className="text-muted fs-5 mb-4">
            We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-medium">
            See pricing <i className='fa fa-long-arrow-right ms-2' aria-hidden="true"></i>
          </a>
        </div>

        {/* Middle Spacer */}
        <div className="col-md-1"></div>

        {/* Right Column: Pricing Cards */}
        <div className="col-12 col-md-7">
          <div className="row g-0">
            <div className="col border text-center p-4 rounded-start">
              <h1 className='display-5 fw-bold mb-3'>₹0</h1>
              <p className="text-muted small px-3">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border border-start-0 text-center p-4 rounded-end">
              <h1 className="display-5 fw-bold mb-3">₹20</h1>
              <p className="text-muted small px-3">Intraday and F&O trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;