import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center mt-5'>
        <h1 className='h2 mb-3'>404 Not Found</h1>
        <Link className='btn btn-primary ps-5 pe-5' to={'/'}>Go Home</Link>

    </div>
  )
}

export default NotFound