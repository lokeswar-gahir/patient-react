import React from 'react'

const Footer = () => {
  return (
    <div style={{position: 'absolute', bottom: 0, backgroundColor: '#0E205E', height: '50px'}} className='w-100 text-white p-3 d-flex align-items-center gap-5'>
        <div>Paul Gann Act</div>
        <div>
            <span>English version</span>
            <button className='btn btn-primary'>View</button>
            <button className='btn btn-secondary'>Print</button>
        </div>
        <div>
            <span>Spanish version</span>
            <button className='btn btn-primary'>View</button>
            <button className='btn btn-secondary'>Print</button>
        </div>
    </div>
  )
}

export default Footer