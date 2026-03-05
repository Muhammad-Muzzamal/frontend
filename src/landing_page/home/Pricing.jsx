import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-4">
          <h1 className='h2 mb-4'>Unbeatable pricing</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis recusandae, adipisci ipsum velit </p>
          <a href="#" >See pricing<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col border text-center p-3">
              <h1 className='h2 mb-4'>Rs. 0</h1>
              <p className="w-75 m-auto mb-3">Lorem ipsum dolor sit amet.m dolor sit amet.</p>
            </div>
            <div className="col border text-center p-3">
              <h1 className="h2 mb-4">Rs. 0</h1>
              <p className="w-75 m-auto mb-3">Lorem ipsum dolor sit amet.m dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing