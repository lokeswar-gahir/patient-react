import React from 'react'

const Header = () => {
    return (<>
        <div style={{ backgroundColor: '#7DDAFB', height: '25px', textAlign: 'right' }} className='pe-3'>welcome back david | Logout</div>
        <nav className='d-flex justify-content-between align-items-center text-white p-3' style={{height: '50px', backgroundColor: '#0B077A'}}>
            <h2>SPIKEWELL</h2>
            <div className='d-flex gap-3'>
                <div>Sign A Form</div>
                <div>Create A New Form</div>
            </div>
        </nav>
    </>
    )
}

export default Header