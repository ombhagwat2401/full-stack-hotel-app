import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='hotelapp__header_component'>
            <h3 className='logo'>HotelOm</h3>
            <p href="#">Home</p>
            <p href="#">Add Hotel</p>
        </div>
    )
}

export default Header