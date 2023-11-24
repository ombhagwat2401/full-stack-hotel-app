import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'


function Main() {
    return (
        <div className='hotelapp__main_component'>
            <div className="hotelapp__main_component_bg">
                <h1>Choice your Hotel at HotelOm</h1>
                <p>We have 200+ hotel added choose your's or add one</p>
            </div>

            <div className="hotelapp__main_compnent_tool">
                <div className="tool" style={{ 'borderLeft': "none" }}>
                    <h3>View</h3>
                    <p>View all hotels</p>
                </div>
                <div className="tool">
                    <h3>Edit</h3>
                    <p>Edit an Hotel</p>
                </div>
                <div className="tool">
                    <h3>Delete</h3>
                    <p>Permentantly Delete</p>
                </div>
                <div className="tool">
                    <h3>Add</h3>
                    <p>Add hotel of your choice</p>
                </div>
                <Link to="/add-hotel"><button className="addbtn"><i class="fa fa-arrow-right"></i></button></Link>
            </div>
        </div >
    )
}

export default Main