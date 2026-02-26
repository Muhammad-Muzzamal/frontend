import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center">
        <img src="/media/images/homeHero.png" alt="Hero image" className='mb-5'/>
        <h1 className='mt-5'>Investing in everything</h1>
        <p>Online platform to invest in stock, deivatives, mutuals funds, and more</p>
        <button className='btn btn-primary w-auto m-auto pe-4 ps-4'>Signup Now</button>
      </div>

    </div>
  )
}

export default Hero