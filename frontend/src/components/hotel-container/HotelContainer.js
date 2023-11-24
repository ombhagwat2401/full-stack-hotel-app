import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './hotelContainer.css'

function HotelContainer({ setHotels }) {
    const [hotel, setNewHotels] = useState(setHotels);

    useEffect(() => {
        setNewHotels(setHotels)
    }, [setHotels])

    console.log(hotel);


    return (
        <div className='hotelapp__hotel_container'>
            <h3>Browse Hotels</h3>
            <div className="hotel_container">
                {
                    hotel ?
                        hotel.map((e) => {
                            return (
                                <div className="hotel">
                                    <img src={e.image} alt="" />
                                    <div className="details">
                                        <p><b>{e.name}</b></p>
                                        <p className='price'>${e.price}</p>
                                    </div>
                                    <div className='details'>
                                        <p className='rating'>{e.rating} ⭐</p>
                                        <Link to={"/view-hotel/" + e._id}><a href="#"><p className='morebtn'>more</p></a></Link>
                                    </div>
                                </div>
                            )
                        })
                        : ""
                }


            </div>
        </div>
    )
}

export default HotelContainer