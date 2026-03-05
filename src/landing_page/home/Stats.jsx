import React from 'react'

const Stats = () => {
  return (
    <div className='container my-5 py-5'>
      <div className="row align-items-center">
        {/* Left Column: Trust Points */}
        <div className="col-12 col-md-6 px-lg-5">
          <h2 className='fs-2 mb-5 fw-semibold'>Trust with confidence</h2>
          
          <div className="mb-4">
            <h3 className='h5 fw-bold'>Customer-first always</h3>
            <p className='text-muted small'>
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores 
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h3 className='h5 fw-bold'>No spam or gimmicks</h3>
            <p className='text-muted small'>
              No spam, "gamification", or annoying push notifications. 
              High quality apps that you use at your pace, the way you want.
            </p>
          </div>

          <div className="mb-4">
            <h3 className='h5 fw-bold'>The Zerodha universe</h3>
            <p className='text-muted small'>
              Not just an app, but a whole ecosystem. Our investments in 15+ 
              fintech startups offer you a tailored experience.
            </p>
          </div>

          <div className="mb-4">
            <h3 className='h5 fw-bold'>Do better with money</h3>
            <p className='text-muted small'>
              With initiatives like Nudge and Kill Switch, we help you break 
              bad trading habits and be a better investor.
            </p>
          </div>
        </div>

        {/* Right Column: Image & Links */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <img 
            src="media/images/ecosystem.png" 
            alt="Zerodha Ecosystem" 
            className='img-fluid mb-4' 
          />
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-decoration-none">
                Explore our products <i className='fa fa-long-arrow-right ms-1'></i>
            </a>
            <a href="#" className="text-decoration-none">
                Try Kite demo <i className='fa fa-long-arrow-right ms-1'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats